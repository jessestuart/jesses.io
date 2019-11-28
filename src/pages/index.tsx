import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import _ from 'lodash'
import React from 'react'

import { Profile, ProfileDevIcons } from 'components'

interface Props {
  data: {
    file: {
      childImageSharp: GatsbyImage
    }
  }
}

const Home = () => {
  const data: Props = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/avatar-square.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const avatar = _.get(data, 'file.childImageSharp.fluid')
  return (
    <div className="moon-gray bg-gray-primary w-100">
      <Profile avatar={avatar} />
      <ProfileDevIcons />
    </div>
  )
}

export default Home
