import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import React from 'react'

import { Profile, ProfileDevIcons } from 'components'

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/avatar-square.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
