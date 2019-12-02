import React from 'react'

import { GitHub, Instagram, Linkedin, Twitter } from 'react-feather'
import { Flex, Link } from 'rebass/styled-components'
import styled from 'styled-components'

const GITHUB_COLOR = '#333333'
const GITHUB_URL = 'https://github.com/jessestuart/'
const INSTAGRAM_COLOR = '#C74861'
const INSTAGRAM_URL = 'https://instagram.com/jaystu/'
const LINKEDIN_COLOR = '#0077B5'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jessedstuart/'
const TWITTER_COLOR = '#1DA1F2'
const TWITTER_URL = 'https://twitter.com/jesse_stuart/'

interface Icon {
  Image: any
  color: string
  url: string
}

const Icons: Icon[] = [
  {
    Image: GitHub,
    color: GITHUB_COLOR,
    url: GITHUB_URL,
  },

  {
    Image: Linkedin,
    color: LINKEDIN_COLOR,
    url: LINKEDIN_URL,
  },

  {
    Image: Instagram,
    color: INSTAGRAM_COLOR,
    url: INSTAGRAM_URL,
  },

  {
    Image: Twitter,
    color: TWITTER_COLOR,
    url: TWITTER_URL,
  },
]

const BlackMirrorDiv = styled(Flex)`
  justify-content: justify-around;
  @media (max-width: 45em) {
    display: none !important;
  }
`

const BlackMirror = () => (
  <BlackMirrorDiv my={4} justifyContent="center">
    {Icons.map(({ color, Image, url }) => (
      <Link color="textLightMuted" key={url} href={url} m={2}>
        <Image
          fill={color}
          strokeWidth="1px"
          className="b--light-gray hvr-grow"
          size="35px"
        />
      </Link>
    ))}
  </BlackMirrorDiv>
)

export default BlackMirror
