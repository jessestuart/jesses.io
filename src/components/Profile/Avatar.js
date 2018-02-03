import React from 'react'
import classNames from 'classnames'
import Img from 'gatsby-image'

const Avatar = ({ image }) => (
  <Img
    className={classNames('br-100 justify-center mv2 pa0 shadow-6')}
    sizes={image.sizes}
  />
)

export default Avatar

export const query = graphql`
  fragment avatar on RootQueryType {
    file(name: { eq: "avatar-square" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
