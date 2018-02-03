import React from 'react'
import { ProfileDevIcons, Profile } from '../components'
import _ from 'lodash'

import 'prismjs/themes/prism.css'
import '../styles/base.css'

const Home = ({ data }) => (
  <div className="moon-gray bg-gray-primary">
    <Profile avatar={_.get(data, 'file.childImageSharp')} />
    <ProfileDevIcons />
  </div>
)

export default Home

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
