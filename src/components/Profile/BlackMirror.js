import React from 'react'

import { Github, Linkedin, Instagram, Twitter } from 'react-feather'

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
  <div className="flex justify-around mv4">
    {Icons.map(icon => {
      const { Image } = icon
      return (
        <a key={icon.url} href={icon.url}>
          <Image
            fill={icon.color}
            strokeWidth="1px"
            className="b--light-gray pa1 hvr-grow"
            size="3rem"
          />
        </a>
      )
    })}
  </div>
)

export default BlackMirror
