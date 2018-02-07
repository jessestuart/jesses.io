// =========================
// Third party dependencies.
// =========================
const AWS = require('aws-sdk')
const S3 = new AWS.S3({ apiVersion: '2006-03-01' })
const Promise = require('bluebird')
const _ = require('lodash')
// ============
// Gatsby APIs.
// ============
const { createRemoteFileNode } = require('gatsby-source-filesystem')

// =========================
// Plugin-specific contants.
// =========================
const S3SourceGatsbyNodeType = 'S3ImageAsset'

// =================
// Type definitions.
// =================
type SourceS3Options = {
  bucketName: String,
  // Defaults to `${bucketName}.s3.amazonaws.com`, but may be
  // overridden to e.g., support CDN's (such as CloudFront),
  // or any other S3-compliant API (such as DigitalOcean
  // Spaces.)
  domain: ?String,
  // Defaults to HTTPS.
  protocol: ?String,
}

// [temp]
const obj = {}
let count = 0

const constructS3UrlForAsset = ({
  bucketName,
  domain,
  key,
  protocol = 'https',
}): ?String => {
  if (!key || (!bucketName && !domain)) {
    return null
  }
  // If `domain` is defined, that takes precedence over `bucketName.`
  if (domain) {
    return `${protocol}://${domain}/${key}`
  }
  if (bucketName) {
    return `${protocol}://${bucketName}.s3.amazonaws.com/${key}`
  }
}

exports.sourceNodes = async (
  { boundActionCreators, getNode, hasNodeChanged, store, cache },
  { bucketName, domain, protocol }: SourceS3Options,
  done
) => {
  const { createNode } = boundActionCreators

  const listObjectsResponse = await S3.listObjectsV2({
    Bucket: bucketName,
  }).promise()
  const s3Entities = _.get(listObjectsResponse, 'Contents')

  await Promise.all(
    s3Entities.map(async entity => {
      // [temp]
      obj[entity.Key] = count
      // [temp]
      const entityData = {
        bucketName,
        cache,
        createNode,
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
