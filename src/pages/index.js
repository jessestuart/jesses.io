/* @flow */
import { graphql } from 'gatsby'
import React from 'react'
import _ from 'lodash'

import type { GatsbyImage } from '../types/gatsby-image'
import { ProfileDevIcons, Profile } from '../components'

type Props = {
  data: {
    file: {
      childImageSharp: GatsbyImage,
    },
  },
}

const Home = ({ data }: Props) => {
  return (
    <div className="moon-gray bg-gray-primary w-100">
      <Profile avatar={_.get(data, 'file.childImageSharp.fluid')} />
      <ProfileDevIcons />
    </div>
  )
}

export const query = graphql`
  {
    file(relativePath: { regex: "/avatar-square.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Home
