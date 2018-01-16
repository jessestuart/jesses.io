import React, { Component } from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'
import { DateTime } from 'luxon'

import { PhotographyGridSection } from '../components/Photography'

class PhotographyPostTemplate extends Component {
  render() {
    const { props } = this
    const images = _.get(props, 'data.allImageSharp.edges')
    const pathname = _.get(props, 'location.pathname')
    const siteTitle = _.get(props, 'data.site.siteMetadata.title')
    const date = _.get(props, 'pathContext.name')
    const datetime = date ? DateTime.fromISO(date.replace(/\//g, '')) : null

    const title = `Photography | ${date} | ${siteTitle}`

    return (
      <div className="bg-light-gray black-80 w-100 flex-body-expand">
        <Helmet title={title} />
        <PhotographyGridSection
          key={pathname}
          datetime={datetime}
          linkImages={images}
        />
      </div>
    )
  }
}

export default PhotographyPostTemplate

export const pageQuery = graphql`
  query PhotographyImagesBySlug($name: String) {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp(filter: { id: { regex: $name } }) {
      edges {
        node {
          id
          sizes(maxWidth: 1024) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
