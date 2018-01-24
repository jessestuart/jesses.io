package main

import (
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"

	"github.com/kelseyhightower/envconfig"
	"github.com/minio/minio-go"
)

// S3Credentials represent AWS S3 credentials -- these can easily be swapped
// out for B2, DigitalOcean Spaces, etc. alternative storage options.
type S3Credentials struct {
	AccessKeyID string `required:"true"`
	SecretKey   string `required:"true"`
	BucketName  string `required:"true"`
}

func main() {
	var creds S3Credentials
	err := envconfig.Process("aws", &creds)
	if err != nil {
		log.Fatal(err.Error())
	}
	accessKeyID := creds.AccessKeyID
	bucketName := "{{ user `BuckerName` }}"
	endpoint := "s3.amazonaws.com"
	secretAccessKey := creds.SecretKey
	useSSL := true

	// Initialize minio client object.
	minioClient, err := minio.New(endpoint, accessKeyID, secretAccessKey, useSSL)
	if err != nil {
		log.Fatalln(err)
	}

	// Create a done channel to control 'ListObjects' go routine.
	doneCh := make(chan struct{})
	// Indicate to our routine to exit cleanly upon return.
	defer close(doneCh)

	isRecursive := true
	objectCh := minioClient.ListObjectsV2(
		bucketName, "", isRecursive, doneCh,
	)
	for object := range objectCh {
		if object.Err != nil {
			fmt.Println(object.Err)
			return
		}
		objectName := object.Key
		object, err := minioClient.GetObject(bucketName, objectName, minio.GetObjectOptions{})
		if err != nil {
			fmt.Println(err)
			return
		}

		ext := filepath.Ext(objectName)
		if ext != "" {
			localFile, err := os.Create("/tmp/" + objectName)
			if err != nil {
				fmt.Println(err)
				return
			}
			if _, err = io.Copy(localFile, object); err != nil {
				fmt.Println(err)
				return
			}
		}
	}
}
