/* @flow */
import { GitHub, Instagram, Linkedin, Twitter } from 'react-feather'
import React from 'react'
import styled from 'styled-components'

const GITHUB_COLOR = '#333333'
const GITHUB_URL = 'https://github.com/jessestuart/'
const INSTAGRAM_COLOR = '#C74861'
const INSTAGRAM_URL = 'https://instagram.com/jaystu/'
const LINKEDIN_COLOR = '#0077B5'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jessedstuart/'
const TWITTER_COLOR = '#1DA1F2'
const TWITTER_URL = 'https://twitter.com/jesse_stuart/'

type Icon = $ReadOnly<{
  color: string,
  Image: *,
  url: string,
}>

const Icons: Array<Icon> = Object.freeze([
  {
    Image: GitHub,
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
])

const BlackMirrorDiv = styled.div.attrs({
  className: 'flex justify-around mv4',
})`
  @media (max-width: 45em) {
    display: none !important;
  }
`

const BlackMirror = () => (
  <BlackMirrorDiv>
    {Icons.map(({ color, Image, url }) => (
      <a key={url} href={url} className="ma1">
        <Image
          fill={color}
          strokeWidth="1px"
          className="b--light-gray hvr-grow"
          size="35px"
        />
      </a>
    ))}
  </BlackMirrorDiv>
)

export default BlackMirror
