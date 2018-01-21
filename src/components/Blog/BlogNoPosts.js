import React from 'react'
import PropTypes from 'prop-types'
import { GitMerge } from 'react-feather'

const BlogNoPosts = () => (
  <div className="flex justify-center items-center flex-body-expand flex-column h-100">
    <section className="bb b--hot-pink w-100">
      <h1 className="lato lh-solid tc mb5">
        <span className="nowrap-ns">No posts currently available.</span>
        <br />
        Sit tight.
      </h1>
    </section>
    <section>
      <p className="lato f4 fw4 mt5">
        In the meantime, you can check out a sampling of my publications:
      </p>
      <ul className="list ma0">
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

const PortfolioItem = ({ link, title }) => (
  <li className="f4">
    <a className="flex items-center" href={link}>
      <div>
        <GitMerge className="mr2" size="30px" color="#933E51" />
      </div>
      <p className="fw7 underline">{title}</p>
    </a>
  </li>
)

PortfolioItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlogNoPosts
