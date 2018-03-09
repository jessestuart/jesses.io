/* @flow */
import React from 'react'
import { PortfolioItem } from '../components/Portfolio'
import { StyledLink } from '../components/StyledLink'

import '../styles/base.css'

import Logo from '../../src/components/Icons/logo_dark.svg'

const CV = () => (
  <div className="lato bg-near-white black-80 flex justify-center flex-body-expand pv5 lh-title">
    <section className="center flex-body-expand w-50-ns w-75">
      <div className="center flex items-center justify-center">
        <img src={Logo} style={{ maxHeight: 200 }} />
      </div>
      <p className="lato f4 fw4 mt5">
        You can check out a sampling of my publications below, or scope out my
        C.V. to learn more about what I've been up to.
      </p>
      <p className="lato f4 fw4">
        Please feel free to hit me up via the communication tool of your
        choosing (
        <a href="mailto:hi@jessestuart.com">
          <StyledLink className="b">Email</StyledLink>
        </a>,
        <a href="https://https://twitter.com/jesse_stuart/">
          <StyledLink className="b">Twitter,</StyledLink>
        </a>
        <a href="https://github.com/jessestuart">
          <StyledLink className="b">Github</StyledLink>
        </a>
        ) if you'd like to chat.
      </p>
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
    </section>
  </div>
)

export default CV
