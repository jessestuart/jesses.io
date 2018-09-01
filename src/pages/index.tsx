import _ from 'lodash'
import React, { Fragment } from 'react'

import { Profile, ProfileDevIcons } from '../components'
import { GatsbyImage } from '../types/gatsby-image'

interface Props {
  data: {
    file: {
      childImageSharp: GatsbyImage
    }
  }
}

const Home = ({ data }: Props) => (
  <Fragment>
    <div className="moon-gray bg-gray-primary w-100">
      <Profile avatar={_.get(data, 'file.childImageSharp')} />
      <ProfileDevIcons />
    </div>
  </Fragment>
)

export const query = graphql`
  query AvatarImageQuery {
    file(name: { eq: "avatar-square" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default Home
