/* @flow */
import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'
import type { GatsbyImage } from '../../types/gatsby-image'

import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from '.'

type Props = {
  datetime: DateTime,
  images: Array<GatsbyImage>,
  slug: string,
  isPreview: boolean,
}

const PhotographyGridSection = ({
  datetime,
  images,
  slug,
  isPreview = true,
}: Props) => {
  if (_.isNil(images)) {
    return
  }

  const sortedImages =
    // Sort images by date created, with most recent appearing first.
    _.flow(fp.sortBy('EXIF.DateTimeOriginal'), fp.reverse)(images)

  return (
    <section className="center flex flex-column justify-center pv5 w-75">
      <PhotographySectionHeader datetime={datetime} href={slug} />
      <ImageZoomGrid>
        {sortedImages.map(image => (
          <ImageZoomGridElement key={image.src} aspectRatio={image.aspectRatio}>
            <ImageZoom image={{ src: image.src }} />
          </ImageZoomGridElement>
        ))}
      </ImageZoomGrid>
    </section>
  )
}

export default PhotographyGridSection
