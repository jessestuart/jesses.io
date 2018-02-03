import React from 'react'
import PropTypes from 'prop-types'

let stylesString
if (process.env.NODE_ENV === 'production') {
  try {
    // eslint-disable-next-line
    stylesString = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.error(e)
  }
}

const DESCRIPTION = 'Jesse has things to say.'

const HTML = ({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents,
}) => {
  const css =
    process.env.NODE_ENV === 'production' ? (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesString }}
      />
    ) : null

  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <meta name="description" content={DESCRIPTION} />

        <meta name="twitter:card" content={DESCRIPTION} />
        <meta name="twitter:site" content="@jesse_stuart" />
        <meta name="twitter:creator" content="@jesse_stuart" />

        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:site_name" content="Jesse Stuart" />
        <meta property="og:type" content="article" />

        <meta itemProp="description" content={DESCRIPTION} />

        {headComponents}
        {css}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  body: PropTypes.any,
  bodyAttributes: PropTypes.any,
  headComponents: PropTypes.any,
  htmlAttributes: PropTypes.any,
  postBodyComponents: PropTypes.any,
  preBodyComponents: PropTypes.any,
}

export default HTML
