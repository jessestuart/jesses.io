import React, { Fragment } from 'react'

import { SiteHeader, SiteFooter } from '../components'

import 'prismjs/themes/prism.css'

const BlogLayout = ({ children, location }) => {
  return (
    <Fragment>
      <SiteHeader location={location} />
      <div className="bg-light-gray black-80 pa4 bb b--purple bw2 flex justify-center">
        <article className="mw6 mw7-ns lh-title">
          {/* <div
              className="f4 fw5 lh-title"
              id="remark-post"
              dangerouslySetInnerHTML={{ __html: post.html }}
            /> */}

          {/* <section className="share-section">
              <div className="social">
                <Share
                  url={pageURL}
                  options={{
                    size: 'small',
                    text: twitterprompt || `Check out '${title}'`,
                    via: 'cwpittman',
                  }}
                />
              </div>
              <p className="prompt">Let's keep the conversation going!</p>
            </section> */}
          {/* <hr style={{ marginBottom: rhythm(1) }} /> */}
          {children()}
        </article>
      </div>

      <SiteFooter theme={SiteFooter.Theme.Dark} />
    </Fragment>
  )
}

export default BlogLayout
