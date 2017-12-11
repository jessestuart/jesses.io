#!/usr/bin/env node

if (process.env.CIRCLECI !== 'true') {
  require('dotenv').config()
}

const _ = require('lodash')
const AWS = require('aws-sdk')
const s3 = require('s3')

AWS.config.apiVersions = {
  s3: '2006-03-01',
  cloudfront: '2017-03-25',
}
AWS.config.update({ region: process.env.AWS_REGION })

const uploadFiles = () =>
  new Promise((resolve, reject) => {
    const s3Client = new AWS.S3()
    const client = s3.createClient({ s3Client })

    const uploader = client.uploadDir({
      localDir: 'public',
      // Don't remove old files in case they're still being used by a cache.
      deleteRemoved: false,
      s3Params: {
        Bucket: process.env.BUCKET,
      },
      getS3Params: (localFile, stat, callback) => {
        // Cache HTML files (and rss.xml) for an hour, everything else 14 days.
        const isHTML = _.endsWith(localFile, '.html')
        const isXML = _.endsWith(localFile, '.xml')
        const params = {
          ACL: 'public-read',
          CacheControl: `max-age=${isHTML || isXML ? '3600' : '1209600'}`,
        }
        callback(null, params)
      },
    })
    uploader.on('error', reject)
    uploader.on('end', () => resolve())
  })

const invalidateCache = () =>
  new Promise((resolve, reject) => {
    const cloudfront = new AWS.CloudFront()
    const reference = Date.now()

    const invalidation = {
      DistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
      InvalidationBatch: {
        CallerReference: reference.toString(),
        Paths: {
          Quantity: 1,
          Items: ['/*'], // just assume everything has been invalidated
        },
      },
    }
    cloudfront.createInvalidation(invalidation, (err, data) => {
      if (err) {
        reject(err)
      } else {
        console.log(data)
        resolve()
      }
    })
  })

uploadFiles()
  .then(invalidateCache)
  .catch(e => console.error(e) && process.exit(1))
  .then(() => process.exit(0))
