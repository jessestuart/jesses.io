/* @flow */
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import config from '../../gatsby-config'

import { BlogHeader } from '../components/Blog'
import { PortfolioItem } from '../components/Portfolio'
import { StyledLink } from '../components/StyledLink'
import StyledPanel from '../components/StyledPanel/StyledPanel'

import Logo from '../components/Icons/logo_dark.svg'

const ContactInfoList = () => (
  <Fragment>
    <StyledLink className="b" href="mailto:hi@jessestuart.com">
      Email
    </StyledLink>,&nbsp;
    <StyledLink className="b" href="https://twitter.com/jesse_stuart/">
      Twitter
    </StyledLink>,&nbsp;
    <StyledLink className="b" href="https://github.com/jessestuart">
      Github
    </StyledLink>
  </Fragment>
)

const PortfolioItemsList = () => (
  <ul className="list ma0">
    <PortfolioItem title="Curriculum Vitae" link="cv/JS_Resume_2018.pdf" />
    <PortfolioItem
      title="Biber Redux: Reconsidering Dimensions of Variation in American English"
      link="publications/genre-variation.pdf"
    />
    <PortfolioItem
      title="Systems and methods for determining packages of licensable assets"
      link="http://jstu.art/ooQi"
    />
  </ul>
)

const About = () => (
  <div className="bg-near-white lh-copy pa3-ns pv4 w-100">
    <Helmet title={`About | ${config.siteMetadata.title}`} />
    <StyledPanel className="mt2">
      <div className="center flex items-center justify-center">
        <img src={Logo} style={{ maxHeight: 200, marginBottom: 0 }} />
      </div>

      <BlogHeader className="w-100 flex flex-column">Get in touch</BlogHeader>
      <p className="lato f4 fw4 mt5">
        You can check out a sampling of my publications below, or scope out my
        C.V. to learn more about what I've been up to.
      </p>
      <p className="lato f4 fw4">
        Feel free to hit me up via whichever communication platform you prefer (<ContactInfoList />,
        etc.) if you'd like to chat.
      </p>
      <PortfolioItemsList />
    </StyledPanel>
  </div>
)

export default About
