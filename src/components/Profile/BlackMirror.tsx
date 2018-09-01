import React from 'react'
import styled from 'styled-components'

import { Github, Instagram, Linkedin, Twitter } from 'react-feather'

const GITHUB_URL = 'https://github.com/jessestuart/'
const GITHUB_COLOR = '#333333'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jessedstuart/'
const LINKEDIN_COLOR = '#0077B5'
const INSTAGRAM_URL = 'https://instagram.com/jaystu/'
const INSTAGRAM_COLOR = '#C74861'
const TWITTER_URL = 'https://twitter.com/jesse_stuart/'
const TWITTER_COLOR = '#1DA1F2'

const Icons = [
  {
    Image: Github,
    url: GITHUB_URL,
    color: GITHUB_COLOR,
  },
  {
    Image: Linkedin,
    url: LINKEDIN_URL,
    color: LINKEDIN_COLOR,
  },
  {
    Image: Instagram,
    url: INSTAGRAM_URL,
    color: INSTAGRAM_COLOR,
  },
  {
    Image: Twitter,
    url: TWITTER_URL,
    color: TWITTER_COLOR,
  },
]

const BlackMirror = () => (
  <BlackMirrorDiv>
    {Icons.map(icon => {
      const { Image } = icon
      return (
        <a key={icon.url} href={icon.url} className="ma1">
          <Image
            fill={icon.color}
            strokeWidth="1px"
            className="b--light-gray hvr-grow"
            size="35px"
          />
        </a>
      )
    })}
  </BlackMirrorDiv>
)

const BlackMirrorDiv = styled.div.attrs({
  className: 'flex justify-around mv4',
})`
  @media (max-width: 45em) {
    display: none !important;
  }
`

export default BlackMirror
