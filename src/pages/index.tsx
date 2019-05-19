import { graphql } from 'gatsby'
import _ from 'lodash'
import React from 'react'

import { Profile, ProfileDevIcons } from 'components'
import Layout from 'components/Layout'
import GatsbyImage from 'types/GatsbyImage'
import GatsbyLocation from 'types/GatsbyLocation'

interface Props {
  data: {
    file: {
      childImageSharp: GatsbyImage
    }
  }
  location: GatsbyLocation
}

const Home = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <div className="moon-gray bg-gray-primary w-100">
        <Profile avatar={_.get(data, 'file.childImageSharp.fluid')} />
        <ProfileDevIcons />
      </div>
    </Layout>
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
