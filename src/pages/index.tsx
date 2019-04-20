import { graphql } from 'gatsby'
import React from 'react'
import _ from 'lodash'
import { GatsbyImage } from '../types/gatsby-image'
import { Layout, ProfileDevIcons, Profile } from '../components'

interface Props {
  data: {
    file: {
      childImageSharp: GatsbyImage
    }
  }

  location: any
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
