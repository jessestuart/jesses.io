import { withPrefix } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { PortfolioItem, StyledLink, StyledPanel } from 'components'
import Logo from 'components/Icons/logo_dark.svg'
import Layout from 'components/Layout'

const ContactInfoList = () => (
  <>
    <StyledLink className="b" href="mailto:hi@jessestuart.com">
      Email
    </StyledLink>
    ,&nbsp;
    <StyledLink className="b" href="https://twitter.com/jesse_stuart/">
      Twitter
    </StyledLink>
    ,&nbsp;
    <StyledLink className="b" href="https://github.com/jessestuart">
      Github
    </StyledLink>
  </>
)

const PortfolioItemsList = () => (
  <ul className="list ma0">
    <PortfolioItem
      title="Curriculum Vitæ"
      link={withPrefix('cv/JS_Resume_2019.pdf')}
    />
    <PortfolioItem
      title="Biber Redux: Reconsidering Dimensions of Variation in American English"
      link={withPrefix('publications/genre-variation.pdf')}
    />
    <PortfolioItem
      title="Systems and methods for determining packages of licensable assets"
      link="https://jstu.art/ooQi"
    />
  </ul>
)

const About = ({ location }: { location: any }) => (
  <Layout location={location}>
    <div className="bg-near-white lh-copy pa3-ns pv4 w-100">
      <Helmet title={`About | jesses.io`} />
      <StyledPanel className="mt2 f3">
        <StyledLink className="alegreya-sans f2 fw5 w-100">
          Get in touch
        </StyledLink>
        <div className="center flex items-center justify-center">
          <img src={Logo} style={{ maxHeight: 200, marginBottom: 0 }} />
        </div>
        <p className="lato f4 fw4 mt5">
          You can check out a sampling of my publications below, or scope out my
          C.V. to learn more about what I've been up to.
        </p>
        <p className="lato f4 fw4">
          Feel free to hit me up via whichever communication platform you prefer
          (
          <ContactInfoList />, etc.) if you'd like to chat.
        </p>
        <PortfolioItemsList />
      </StyledPanel>
    </div>
  </Layout>
)

export default About
