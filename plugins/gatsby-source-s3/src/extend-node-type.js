/* @flow */
const Promise = require('bluebird')
const fs = require(`fs`)
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = require(`graphql`)
const exif = require('exif-parser')
const DateTime = require('luxon').DateTime
const _ = require(`lodash`)

type ExtendNodeTypeOptions = {
  type: {
    name: String,
  },
}

type S3Image = {
  Key: String,
  ETag: String,
  id: String,
  absolutePath: String,
  internal: {
    content: String,
    contentDigest: String,
    mediaType: String,
    type: String,
    owner: String,
  },
}

const resolveExifData = (image: S3Image) => {
  const file = fs.readFileSync(image.absolutePath)
  const tags = exif.create(file).parse().tags
  const DateCreatedISO = DateTime.fromMillis(
    tags.DateTimeOriginal * 1000
  ).toISODate()
  return {
    DateCreatedISO,
    ..._.pick(tags, [
      'DateTimeOriginal',
      'ExposureTime',
      'FNumber',
      'FocalLength',
      'ISO',
      'LensModel',
      'Model',
      'ShutterSpeedValue',
    ]),
  }
}

const extendNodeType = ({ type }: ExtendNodeTypeOptions) => {
  if (type.name !== 'S3ImageAsset') {
    return {}
  }

  console.log('extending s3 image asset')

  return Promise.resolve({
    ETag: { type: GraphQLString },
    EXIF: {
      type: new GraphQLObjectType({
        name: 'ExifData',
        fields: {
          DateCreatedISO: { type: GraphQLString },
          DateTimeOriginal: { type: GraphQLInt },
          ExposureTime: { type: GraphQLFloat },
          FNumber: { type: GraphQLFloat },
          FocalLength: { type: GraphQLFloat },
          ISO: { type: GraphQLInt },
          LensModel: { type: GraphQLString },
          Model: { type: GraphQLString },
          ShutterSpeedValue: { type: GraphQLFloat },
        },
      }),
      resolve(image: S3Image) {
        return {
          ...type,
          ...resolveExifData(image),
        }
      },
    },
  })
}

exports.extendNodeType = extendNodeType

exports.resolveExifData = resolveExifData
