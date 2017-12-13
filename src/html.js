import React from 'react'
import _ from 'lodash'

const isProd = _.get(process, 'env.NODE_ENV') === 'production'
const stylesString = isProd ? require(`!raw-loader!../public/styles.css`) : null

const css = isProd ? (
  <style
    id="gatsby-inlined-css"
    dangerouslySetInnerHTML={{ __html: stylesString }}
  />
) : null

const description = 'Jesse has things to say.'

export default function HTML(props) {
  const {
    body,
    bodyAttributes,
    headComponents,
    htmlAttributes,
    postBodyComponents,
    preBodyComponents,
  } = props

  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta name="description" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jesse_stuart" />
        <meta name="twitter:creator" content="@jesse_stuart" />

        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Jesse Stuart" />
        <meta property="og:type" content="article" />

        <meta itemProp="description" content={description} />

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
