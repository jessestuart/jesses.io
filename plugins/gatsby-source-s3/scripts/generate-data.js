// const aws = require('aws-sdk')
const fs = require('fs')
const exif = require('exif-parser')
const DateTime = require('luxon').DateTime

// const S3 = new aws.S3({ apiVersion: '2006-03-01' })

// const BUCKET_NAME = 'js-photos'

const fetchImages = async () => {
  // const imagesResponse = await S3.listObjectsV2({
  //   Bucket: BUCKET_NAME,
  // }).promise()
  // const images = imagesResponse.Contents

  // const image1 = images[0]
  // const image = await S3.getObject({
  //   Bucket: BUCKET_NAME,
  //   Key: image1.Key,
  // }).promise()

  console.log('==================================================')
  const path =
    '/Users/jestuart/dev/jessestuart.com/.cache/gatsby-source-filesystem/62f0c88018d87f034076384765b50a36.jpg'
  const file = fs.readFileSync(path)
  console.log({ file })
  const parsedExif = exif.create(file).parse()
  const { tags } = parsedExif
  const dateCreated = DateTime.fromMillis(tags.DateTimeOriginal * 1000)
  console.log({ tags })
  console.log({ dateCreated })
}

fetchImages()
