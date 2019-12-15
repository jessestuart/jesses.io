import _ from 'lodash'

import { createFilePath } from 'gatsby-source-filesystem'
import fs from 'fs-extra'

export const onCreateNode = ({ node, actions, getNode }) => {
  const {
    // GATSBY_ENV = 'Development',
    GATSBY_ENV_CREATE_ALBUMS = false,
  } = process.env
  const { createNodeField } = actions
  const nodeType: string = _.get(node, 'internal.type')

  if (nodeType === 'Directory' || nodeType === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }

  if (nodeType === 'S3ImageAsset' && GATSBY_ENV_CREATE_ALBUMS) {
    const albumName = node.Key.slice(0, node.Key.indexOf('/'))
    const albumDir = `${__dirname}/../albums/${albumName}`
    const albumDirExists = fs.pathExistsSync(albumDir)
    if (!albumDirExists) {
      fs.mkdirp(albumDir)
    }
  }
}
