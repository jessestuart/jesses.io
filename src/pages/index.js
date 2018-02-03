import React from 'react'
import Helmet from 'react-helmet'
import { ProfileDevIcons, Profile } from '../components'
import _ from 'lodash'

import config from '../../gatsby-config'

import 'prismjs/themes/prism.css'
import '../styles/base.css'

const Home = ({ data }) => {
  const title = _.get(config, 'siteMetadata.title')
  return (
    <div className="moon-gray bg-gray-primary">
      <Helmet title={title}>
        <meta itemProp="name" content={title} />
        <meta name="twitter:title" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={config.siteMetadata.siteUrl} />
      </Helmet>
      <Profile avatar={_.get(data, 'file.childImageSharp')} />
      <ProfileDevIcons />
    </div>
  )
}

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
