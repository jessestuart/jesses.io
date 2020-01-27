import Img, { FluidObject } from 'gatsby-image'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import _ from 'lodash'

const Avatar = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/avatar-square.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const avatar: FluidObject = _.get(data, 'file.childImageSharp.fluid')

  return (
    <Img
      className="br-100 justify-center mv2 pa0"
      loading="eager"
      style={{
        boxShadow: '0 0 12px 12px rgba(40, 40, 40, 0.6)',
      }}
      fluid={avatar}
    />
  )
}

export default Avatar
