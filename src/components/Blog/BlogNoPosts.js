import React from 'react'
import Link from 'gatsby-link'
import { PortfolioItem } from '../../components/Portfolio'

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
        In the meantime, you can check out a sampling of my publications as well
        as an extended C.V. over{' '}
        <Link className="underline header-purple fw7" to="/curriculum-vitae">
          here{' '}
        </Link>
        to get the scoop on what I've been up to lately, including my published
        works:
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

export default BlogNoPosts
