/* tslint:disable no-shadowed-variable */
import 'react-image-lightbox/style.css'

import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import { animated, useTransition } from 'react-spring'
import { Box } from 'rebass/styled-components'

import { useDimensions, useMedia } from 'utils/hooks'

import { ImageZoomGridElement, PhotographySectionHeader, SeeMoreLink } from '.'

interface Props {
  datetime: DateTime
  // The images to be *currently* displayed for this section.
  images: any[]
  slug?: string
  totalNumImages?: number
}

const PhotographyGridSection = (props: Props) => {
  const { datetime, images, slug = '/#', totalNumImages = 0 } = props
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [index, setLightboxIndex] = useState(0)

  const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
  const lightboxImages = _.map(sortedImages, 'childImageSharp.sizes.src')

  // const lightboxImages = _.flow(
  //   // -        fp.get('images'),
  //   // -        fp.sortBy('EXIF.DateTimeOriginal'),
  //   fp.map('childImageSharp.sizes.src'),
  // )(sortedImages)

  const decrementLightboxIndex = () => setLightboxIndex(index - 1)
  const incrementLightboxIndex = () => setLightboxIndex(index + 1)
  const closeLightbox = () => setIsLightboxOpen(false)
  const openLightbox = (imageIndex: number) => {
    setLightboxIndex(imageIndex)
    setIsLightboxOpen(true)
  }
  const getImageAtIndex = (imageIndex: number) =>
    _.get(lightboxImages, imageIndex % lightboxImages.length)

  const lightboxSrc = getImageAtIndex(index)
  const nextImage = getImageAtIndex(index + 1)
  const prevImage = getImageAtIndex(index - 1)

  // Tie media queries to the number of columns.
  const columns = useMedia(
    ['(min-width: 1536px)', '(min-width: 1024px)', '(min-width: 512px)'],
    [4, 3, 2],
    1,
  )
  // Measure the width of the container element.
  // @ts-ignore
  const [ref, { width }] = useDimensions()

  // Form a grid of stacked images, using the width & column calculations we got
  // from the `useMedia` and `useDimensions` hooks above.
  const heights: number[] = new Array(columns).fill(0) // Each column gets a height starting with zero
  const gridItems = sortedImages.map((child, index) => {
    const { childImageSharp } = child
    const imageWidth = child.width || width / columns
    const aspectRatio = _.get(childImageSharp, 'sizes.aspectRatio')
    const height = _.isFinite(child.height)
      ? child.height
      : imageWidth * (2 / aspectRatio)
    // Masonry-grid placing — positions each tile sequentially into the
    // smallest column available.
    const column = heights.indexOf(Math.min(...heights)) || 0

    const xy = [
      (width / columns) * column,
      (heights[column] += height / 2) - height / 2,
    ]
    return {
      ...child,
      columns,
      height: height / 2,
      index,
      width: width / columns,
      xy,
    }
  })

  const transitions = useTransition(gridItems, fp.get('id'), {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    /* config: { mass: 1, tension: 10000, friction: 1000 }, */
    /* trail: 0, */
  })

  return (
    <>
      <PhotographySectionHeader datetime={datetime} href={slug} />
      <Box
        ref={ref as any}
        className="mb4 w-100"
        // Define height in `style` to avoid creating a new className on each
        // resize / render.
        sx={{ height: Math.max(...heights) }}
      >
        {width != null &&
          transitions.map(
            // @ts-ignore
            ({ item, props: { xy, width, height, ...rest }, key }) => {
              return (
                <animated.div
                  key={key}
                  style={{
                    ...rest,
                    height,
                    position: 'absolute',
                    transform: xy.interpolate(
                      (x: number, y: number) => `translate3d(${x}px,${y}px,0)`,
                    ),
                    width,
                  }}
                >
                  <ImageZoomGridElement
                    image={item}
                    onClick={() => openLightbox(item.index)}
                  />
                </animated.div>
              )
            },
          )}
      </Box>
      <SeeMoreLink totalNumImages={totalNumImages} href={slug} />
      {isLightboxOpen && (
        <Lightbox
          enableZoom={false}
          mainSrc={lightboxSrc}
          nextSrc={nextImage}
          onCloseRequest={closeLightbox}
          onMoveNextRequest={incrementLightboxIndex}
          onMovePrevRequest={decrementLightboxIndex}
          prevSrc={prevImage}
        />
      )}
    </>
  )
}

export default PhotographyGridSection
