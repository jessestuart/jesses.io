import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import _ from 'lodash'
import { DateTime } from 'luxon'

import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from '.'

const PhotographyGridSection = ({ datetime, images, slug }: Props) =>
  _.isNil(images) ? null : (
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

type Props = {
  datetime: DateTime,
  images: Array,
  slug: String,
}

export default PhotographyGridSection
