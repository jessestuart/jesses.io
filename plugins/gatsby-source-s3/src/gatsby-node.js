const AWS = require('aws-sdk')
const Promise = require('bluebird')
const _ = require('lodash')

const { createRemoteFileNode } = require('gatsby-source-filesystem')

const S3 = new AWS.S3({ apiVersion: '2006-03-01' })

const S3SourceGatsbyNodeType = 'S3ImageAsset'

const constructS3UrlForAsset = ({ bucketName, key }) =>
  `https://${bucketName}.s3.amazonaws.com/${key}`

const onCreateNode = async ({ node, boundActionCreators, loadNodeContent }) => {
  const { createNode, createParentChildLink } = boundActionCreators
  if (node.internal.mediaType !== 'image/jpeg') {
    return
  }
  const image = await loadNodeContent(node)
  console.log('Loaded image:')
  console.log({ image })
}

exports.onCreateNode = onCreateNode

// [temp]
const obj = {}
let count = 0

exports.sourceNodes = async (
  { boundActionCreators, getNode, hasNodeChanged, store, cache },
  { bucketName },
  done
) => {
  const { createNode, createParentChildLink } = boundActionCreators

  const listObjectsResponse = await S3.listObjectsV2({
    Bucket: bucketName,
  }).promise()
  const s3Entities = _.get(listObjectsResponse, 'Contents')

  await Promise.all(
    s3Entities.map(async entity => {
      // [temp]
      obj[entity.Key] = count
      const entityData = {
        bucketName,
        cache,
        createNode,
        createParentChildLink,
        entity,
        store,
      }
      const fileNode = await createS3RemoteFileNode(entityData)
      if (fileNode) {
        entityData.localFile___NODE = fileNode.id
      }
      await createS3ImageAssetNode({
        ...entityData,
        fileNode,
        done,
      })
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
  try {
    return await createRemoteFileNode({
      url: s3Url,
      store,
      cache,
      createNode,
    })
  } catch (err) {
    // eslint-disable-next-line
    console.error('Unable to create file node.', err)
    return null
  }
}

const createS3ImageAssetNode = async ({
  createNode,
  createParentChildLink,
  fileNode,
  bucketName,
  entity,
  done,
}) => {
  const { Key, ETag } = entity
  // TODO: Could probably pull this from fileNode.
  const ContentType = 'image/jpeg'
  // Remove obnoxious escaped double quotes in S3 object's ETag. For reference:
  // > The entity tag is a hash of the object. The ETag reflects changes only
  // > to the contents of an object, not its metadata.
  // @see https://docs.aws.amazon.com/AmazonS3/latest/API/RESTCommonResponseHeaders.html
  const objectHash = ETag.replace(/"/g, '')
  createNode({
    ...entity,
    // ...tags,
    // DateCreated: dateCreated.toISODate(),
    id: `${Key} >> ${S3SourceGatsbyNodeType}`,
    absolutePath: fileNode.absolutePath,
    Key,
    parent: fileNode.id,
    children: [],
    internal: {
      content: constructS3UrlForAsset({ bucketName, key: Key }),
      contentDigest: objectHash,
      mediaType: ContentType,
      type: S3SourceGatsbyNodeType,
    },
  })
  count++
  console.log(
    `\nDone creating node for entity ${entity.Key} (${count} / ${_.size(obj)})`
  )
}

exports.setFieldsOnGraphQLNodeType = require(`./extend-node-type`).extendNodeType
