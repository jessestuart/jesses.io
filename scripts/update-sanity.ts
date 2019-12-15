import got from 'got'
import { parseStringPromise } from 'xml2js'
import _ from 'lodash'
import { promises as fs } from 'fs'

// import Sanity from '@sanity/client'
// import fp from 'lodash/fp'

// const client = Sanity({
//   projectId: '4sdu6nnp',
//   dataset: 'development',
//   token: process.env.SANITY_API_TOKEN,
//   // We can't use the CDN for writing
//   useCdn: false,
// })
// const sanityData = fs.readFileSync(path.join(__dirname, 'sanity.ndjson'))

const normalizeID = (type: string, key: string) =>
  `${type}_${key.replace('/', '_')}`

const serializeSchema = async (schema: any) =>
  await fs.appendFile('sanity.ndjson', JSON.stringify(schema) + '\n')

const updateSanity = async () => {
  try {
    const s3Response = await got('https://minio.jesses.io/js-photos-dev')
    const json = await parseStringPromise(s3Response.body, {
      explicitArray: false,
    })
    const listBucketResponse = _.get(json, 'ListBucketResult.Contents')

    const groupedByAlbum = _.groupBy(listBucketResponse, item =>
      item.Key.slice(0, item.Key.indexOf('/')),
    )

    _.each(groupedByAlbum, async (photographs: any[], albumName: string) => {
      // const photos = photographs.map((photo: any) => ({
      //   ...photo,
      //   sourceUrl: `https://minio.jesses.io/${photo.Key}`,
      // }))
      const photographySchemas = photographs.map(photo => ({
        _id: normalizeID('photograph', photo.Key), // `photograph_${photo.Key}`,
        _type: 'photograph',
        title: photo.Key,
        sourceImage: {
          _type: 'image',
          _sanityAsset: `image@https://minio.jesses.io/js-photos-dev/${photo.Key}`,
        },
        parentAlbum: {
          _type: 'reference',
          _ref: normalizeID('imageAlbum', albumName),
        },
        ...photo,
      }))

      // photographySchemas.forEach(schema => console.log(JSON.stringify(schema)))
      // photographySchemas.forEach(async schema => await serializeSchema(schema))
      photographySchemas.forEach(serializeSchema)
      // console.log(JSON.stringify(photographySchemas))

      // photographySchemas.forEach(async p => {
      //   console.log('Processing photo: ', p.Key)
      //   const res = await client.createOrReplace(p)
      //   console.log({ res })
      // })

      // console.log('Creating album: ', albumName)

      const albumSchema = {
        _id: normalizeID('imageAlbum', albumName), // `imageAlbum_${albumName}`,
        _type: 'imageAlbum',
        _weak: true,
        albumDate: albumName,
        photographs: photographySchemas,
        title: albumName,
      }
      await serializeSchema(albumSchema)
      // await fs.appendFile('sanity.ndjson', albumSchema)
    })

    // albumNames.forEach((name: string) => {
    //   client.create({
    //     _id: `imageAlbum_${name}`,
    //     type: 'imageAlbum',
    //     name,
    //   })
    // })
  } catch (error) {
    return error
  }
}

updateSanity()
  .then(_.noop)
  .catch(console.error)
