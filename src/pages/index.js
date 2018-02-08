/* @flow */
import React, { Fragment } from 'react'
import { ProfileDevIcons, Profile } from '../components'
import _ from 'lodash'

const Home = ({ data }: Props) => (
  <Fragment>
    <div className="moon-gray bg-gray-primary">
      <Profile avatar={_.get(data, 'file.childImageSharp')} />
      <ProfileDevIcons />
    </div>
  </Fragment>
)

type Props = {
  data: {
    file: {
      childImageSharp: {
        sizes: {
          aspectRatio: Number,
          base64: String,
          sizes: String,
          src: String,
          srcSet: String,
        },
      },
    },
  },
}

export default Home

// $FlowFixMe
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
