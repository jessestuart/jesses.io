import React from 'react'

import { Github, Linkedin, Instagram, Twitter } from 'react-feather'

const GITHUB_URL = 'https://github.com/jessestuart/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jessedstuart/'
const INSTAGRAM_URL = 'https://instagram.com/jaystu/'
const TWITTER_URL = 'https://twitter.com/jesse_stuart/'

const BlackMirror = () => (
  <div className="flex justify-around mv4">
    <a href={GITHUB_URL}>
      <Github
        fill="#333"
        strokeWidth="1px"
        className="b--light-gray pa1 hvr-grow"
        size="3rem"
      />
    </a>
    <a href={LINKEDIN_URL}>
      <Linkedin
        fill="#0077b5"
        strokeWidth="0.9px"
        className="b--light-gray pa1 hvr-grow"
        size="3rem"
      />
    </a>
    <a href={INSTAGRAM_URL}>
      <Instagram
        strokeWidth="1px"
        fill="#C74861"
        className="b--light-gray pa1 hvr-grow"
        size="3rem"
      />
    </a>
    <a href={TWITTER_URL}>
      <Twitter
        fill="#1da1f2"
        strokeWidth="1px"
        className="b--light-gray pa1 hvr-grow"
        size="3rem"
      />
    </a>
  </div>
)

export default BlackMirror
