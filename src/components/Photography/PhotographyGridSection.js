import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import _ from 'lodash'
import { DateTime } from 'luxon'

import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from '.'

type Props = {
  datetime: DateTime,
}

const PhotographyGridSection = ({ datetime, images, slug }) => {
  return _.isNil(images) ? null : (
    <section className="center flex flex-column w-75 justify-center pv5">
      <PhotographySectionHeader datetime={datetime} href={slug} />
      <ImageZoomGrid>
        {images.map(image => (
          <ImageZoomGridElement key={image.src} aspectRatio={image.aspectRatio}>
            <ImageZoom image={{ src: image.src }} />
          </ImageZoomGridElement>
        ))}
      </ImageZoomGrid>
    </section>
  )
}

export default PhotographyGridSection
