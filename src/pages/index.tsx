import { graphql } from 'gatsby'
import _ from 'lodash'
import React from 'react'

import { Profile, ProfileDevIcons } from 'components'
import GatsbyImage from 'types/GatsbyImage'

interface Props {
  data: {
    file: {
      childImageSharp: GatsbyImage
    }
  }
}

const Home = ({ data }: Props) => {
  const avatar = _.get(data, 'file.childImageSharp.fluid')
  return (
    <div className="moon-gray bg-gray-primary w-100">
      <Profile avatar={avatar} />
      <ProfileDevIcons />
    </div>
  )
}

export const query = graphql`
  {
    file(relativePath: { regex: "/avatar-square.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Home
