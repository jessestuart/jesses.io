import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import _ from 'lodash'

import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from '.'

const PhotographyGridSection = ({ datetime, linkImages, linkSlug }) =>
  _.isNil(linkImages) ? null : (
    <section className="center flex flex-column w-75 justify-center pv5">
      <PhotographySectionHeader datetime={datetime} href={linkSlug} />
      <ImageZoomGrid>
        {linkImages.map(({ node }, index) => (
          <ImageZoomGridElement
            key={node.id}
            aspectRatio={node.sizes.aspectRatio}
          >
            <ImageZoom image={{ src: node.sizes.src }} />
          </ImageZoomGridElement>
        ))}
      </ImageZoomGrid>
    </section>
  )

export default PhotographyGridSection
