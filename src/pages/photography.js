import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'
import { DateTime } from 'luxon'

import { PhotographyGridSection } from '../components/Photography'

const PhotographyIndex = ({ data }) => {
  console.log({ data })
  const siteTitle = _.get(data, 'site.siteMetadata.title')
  const images = _.get(data, 'allImageSharp.edges')
  const posts = _.get(data, 'allDirectory.edges')
  return (
    <Fragment>
      <Helmet title={`Photography | ${siteTitle}`} />
      <div className="bg-near-white black-80">
        {_.reverse(_.sortBy(posts, post => new Date(post.node.name) || 0)).map(
          post => {
            const title = _.get(post, 'node.name')
            const linkSlug = `/photography/${title}`
            const linkImages = _.take(
              _.filter(images, image => _.includes(image.node.id, title)),
              6
            )
            const datetime = DateTime.fromISO(title)
            return (
              <PhotographyGridSection
                key={title}
                datetime={datetime}
                linkImages={linkImages}
                linkSlug={linkSlug}
              />
            )
          }
        )}
      </div>
    </Fragment>
  )
}

export default PhotographyIndex

export const pageQuery = graphql`
  query PhotographyPostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allS3ImageAsset {
      edges {
        node {
          id
          EXIF {
            DateCreatedISO
          }
          childImageSharp {
            sizes(maxWidth: 1024) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
