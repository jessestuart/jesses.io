const aws = require('aws-sdk')
const Promise = require('bluebird')
const { createRemoteFileNode } = require('gatsby-source-filesystem')
const _ = require('lodash')
const exif = require('exif-parser')
const DateTime = require('luxon').DateTime

const S3 = new aws.S3({ apiVersion: '2006-03-01' })

const S3SourceGatsbyNodeType = 'S3ImageAsset'

const constructS3UrlForAsset = ({ bucketName, key }) =>
  `https://${bucketName}.s3.amazonaws.com/${key}`

exports.sourceNodes = async (
  { boundActionCreators, getNode, hasNodeChanged, store, cache },
  { bucketName },
  done
) => {
  const { createNode } = boundActionCreators

  const listObjectsResponse = await S3.listObjectsV2({
    Bucket: bucketName,
  }).promise()
  const s3Entities = _.get(listObjectsResponse, 'Contents')

  await Promise.all(
    s3Entities.map(async entity => {
      const entityData = { bucketName, cache, createNode, entity, store }
      await createS3RemoteFileNode(entityData).then(fileNode =>
        createS3ImageAssetNode({
          ...entityData,
          fileNode,
        })
      )
    })
  )
  done()
}

const createS3RemoteFileNode = async ({
  bucketName,
  cache,
  createNode,
  entity,
  store,
}) => {
  const s3Url = constructS3UrlForAsset({ bucketName, key: entity.Key })
  let fileNode
  try {
    fileNode = await createRemoteFileNode({
      url: s3Url,
      store,
      cache,
      createNode,
    })
  } catch (err) {
    // eslint-disable-next-line
    console.error('Unable to create file node.', err)
  }

  if (fileNode) {
    entity.localFile___NODE = fileNode.id
  }

  return entity
}

const createS3ImageAssetNode = async ({
  bucketName,
  createNode,
  entity,
  fileNode,
}) => {
  const { Key, ETag } = entity
  // TODO: Could probably pull this from fileNode.
  const ContentType = 'image/jpeg'
  // Remove obnoxious escaped double quotes in S3 object's ETag. For reference:
  // > The entity tag is a hash of the object. The ETag reflects changes only
  // > to the contents of an object, not its metadata.
  // @see https://docs.aws.amazon.com/AmazonS3/latest/API/RESTCommonResponseHeaders.html
  const objectHash = ETag.replace(/"/g, '')
  const image = await S3.getObject({ Bucket: `js-photos`, Key }).promise()
  const parsedExif = exif.create(image.Body).parse()
  // const dateCreated = DateTime.fromMillis(
  //   parsedExif.tags.DateTimeOriginal * 1000
  // )
  console.log(`\nCreated node for key ${entity.Key}`)
  await createNode({
    ...entity,
    ...parsedExif.tags,
    id: Key,
    parent: null,
    children: [],
    internal: {
      content: constructS3UrlForAsset({ bucketName, key: Key }),
      contentDigest: objectHash,
      mediaType: ContentType,
      type: S3SourceGatsbyNodeType,
    },
  })
}

// =========================================================================

// exports.setFieldsOnGraphQLNodeType = require('./extend-s3-object-node')
