import 'react-image-lightbox/style.css'

import _ from 'lodash'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
import { Flex } from 'rebass/styled-components'
// import Lightbox from 'react-image-lightbox'

import Carousel, { Image, Modal, ModalGateway } from 'react-images'

import { useDimensions, useMedia } from 'utils/hooks'
import {
  ImageZoomGridElement,
  PhotographySectionHeader,
  SeeMoreLink,
} from 'components/Photography'

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
  /* const [index, setLightboxIndex] = useState(0) */

  const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
  /* const lightboxImages = _.map(sortedImages, 'childImageSharp.sizes.src') */
  const reactImages: Image[] = _.map(sortedImages, 'childImageSharp.sizes')

  /* const decrementLightboxIndex = () => setLightboxIndex(index - 1) */
  /* const incrementLightboxIndex = () => setLightboxIndex(index + 1) */
  /* const closeLightbox = () => setIsLightboxOpen(false) */
  /* const openLightbox = (imageIndex: number) => { */
  const openLightbox = () => {
    /* setLightboxIndex(imageIndex) */
    setIsLightboxOpen(true)
  }
  const toggleModal = () => {
    setIsLightboxOpen(!isLightboxOpen)
  }
  /* const getImageAtIndex = (imageIndex: number) => */
  /*   _.get(lightboxImages, imageIndex % lightboxImages.length) */

  /* const lightboxSrc = getImageAtIndex(index) */
  /* const nextImage = getImageAtIndex(index + 1) */
  /* const prevImage = getImageAtIndex(index - 1) */

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
    const aspectRatio = _.get(childImageSharp, 'sizes.aspectRatio')
    const imageWidth = child.width || width / columns
    const height = _.isFinite(child.height)
      ? child.height
      : imageWidth * (2 / aspectRatio)
    // Masonry-grid placing — positions each tile sequentially into the
    // smallest column available.
    const column = heights.indexOf(Math.min(...heights)) || 0

    const x = (width / columns) * column
    const y = (heights[column] += height / 2) - height / 2
    return {
      ...child,
      columns,
      height: height / 2,
      index,
      width: width / columns,
      x,
      y,
    }
  })

  return (
    <>
      <PhotographySectionHeader datetime={datetime} href={slug} />
      <Flex
        ref={ref as any}
        className="mt2 mb4"
        // Define height in `style` to avoid creating a new className on each
        // resize / render.
        sx={{ height: Math.max(...heights), position: 'relative' }}
      >
        {width != null &&
          gridItems.map(
            // @ts-ignore
            (item, key) => {
              const { height, width, x, y } = item
              return (
                <div
                  key={key}
                  style={{
                    position: 'absolute',
                    height,
                    width,
                    top: y,
                    left: x,
                  }}
                >
                  <ImageZoomGridElement image={item} onClick={openLightbox} />
                </div>
              )
            },
          )}
      </Flex>
      <SeeMoreLink totalNumImages={totalNumImages} href={slug} />
      <ModalGateway>
        {isLightboxOpen && _.size(reactImages) > 0 ? (
          <Modal allowFullscreen={false} onClose={toggleModal}>
            <Carousel
              onClickThumbnail={toggleModal}
              onClose={_.noop}
              views={reactImages}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}

export default PhotographyGridSection
