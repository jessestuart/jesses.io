import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import _ from 'lodash'
import slug from 'slug'

class PhotographyIndex extends Component {
  render() {
    const { props } = this
    const siteTitle = _.get(props, 'data.site.siteMetadata.title')
    // const images = get(this, 'props.data.allImageSharp.edges')
    // if (_.isNil(images)) {
    //   return <div />
    // }
    const posts = _.get(props, 'data.allDirectory.edges')
    console.log({ posts })

    return (
      <div className="bg-light-gray black-80 pa4 flex flex-row justify-center flex-body-expand">
        <Helmet title={siteTitle} />
        {posts.map((post, index) => {
          console.log({ post })
          const title = _.get(post, 'node.name')
          const linkSlug = `/photography/${slug(title)}`
          return (
            <section key={title} className="flex flex-row w-100 justify-center">
              <h2 className="alegreya-sans mb2 f3 fw7 header-purple">
                <Link style={{ boxShadow: 'none' }} to={linkSlug}>
                  {title}
                </Link>
              </h2>
              {/* <p className="f5 mb1 tr i open-sans">{node.frontmatter.date}</p> */}
              {/* <p
                className="f4"
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              /> */}
            </section>
          )
        })}
      </div>
    )
  }
}

export default PhotographyIndex

export const pageQuery = graphql`
  query PhotographyPostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allDirectory(filter: { dir: { regex: "/images$/" } }) {
      edges {
        node {
          name
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
          sizes(maxWidth: 768) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
