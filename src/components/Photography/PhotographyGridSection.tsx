import 'react-image-lightbox/style.css'

import { Box, Flex, Text } from 'rebass/styled-components'
import { DateTime } from 'luxon'
import Lightbox from 'react-image-lightbox'
import Link from 'gatsby-link'
import React, { useMemo, useState } from 'react'
import _ from 'lodash'
import classNames from 'classnames'

import { colors } from 'styles/Theme'
import { useMeasure, useMedia } from 'utils/hooks'

import { ImageZoomGridElement, PhotographySectionHeader } from '.'

interface Props {
  datetime: DateTime
  // The images to be *currently* displayed for this section.
  images: any[]
  slug?: string
  totalNumImages?: number
}

const SeeMoreLink = ({
  href,
  totalNumImages,
}: {
  href: string
  totalNumImages: number
}) => {
  if (totalNumImages <= 6) {
    return null
  }

  return (
    <Link to={href}>
      <Flex
        justifyContent="flex-end"
        alignItems="items-center"
        marginBottom="4"
      >
        <Text
          sx={{
            ':hover': {
              color: colors.textDark,
            },
          }}
          fontSize="5"
          color="textDarkMuted"
          fontFamily="smallcaps"
          hoverColor="textDark"
          style={{ transition: 'all 0.25s ease-in-out' }}
        >
          See More →
        </Text>
      </Flex>
      <Box marginTop={2} style={{ borderTop: '1px solid rgb(221, 221, 221)' }}>
        &nbsp;
      </Box>
    </Link>
  )
}

const PhotographyGridSection = (props: Props) => {
  const { datetime, images, slug = '/#', totalNumImages = 0 } = props
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [index, setLightboxIndex] = useState(0)

  const sortedImages = useMemo(
    () => _.sortBy(images, 'EXIF.DateTimeOriginal'),
    [images],
  )
  const lightboxImages = useMemo(
    () => _.map(sortedImages, 'childImageSharp.sizes.srcWebp'),
    [sortedImages],
  )

  const decrementLightboxIndex = () => setLightboxIndex(index - 1)
  const incrementLightboxIndex = () => setLightboxIndex(index + 1)
  const closeLightbox = () => setIsLightboxOpen(false)
  const openLightbox = (imageIndex: number) => {
    console.log('open lightbox', { imageIndex })
    setLightboxIndex(imageIndex)
    setIsLightboxOpen(true)
  }

  const getImageAtIndex = (imageIndex: number) =>
    _.get(lightboxImages, imageIndex % lightboxImages.length)
  const lightboxSrc = getImageAtIndex(index)
  const nextImage = getImageAtIndex(index + 1)
  const prevImage = getImageAtIndex(index - 1)

  // Hook1: Tie media queries to the number of columns
  // const columns = useMedia(
  //   ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
  //   [4, 3, 2],
  //   1,
  // )
  const columns = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [4, 3, 2],
    1,
  )
  // Hook2: Measure the width of the container element
  // @ts-ignore
  const [bind, { width }] = useMeasure()
  console.log({ width })

  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const heights: number[] = new Array(columns).fill(0) // Each column gets a height starting with zero
  const gridItems = sortedImages.map((child, index) => {
    const { childImageSharp } = child
    const imageWidth = child.width || width / columns
    const aspectRatio = _.get(childImageSharp, 'sizes.aspectRatio')
    const height = _.isFinite(child.height)
      ? child.height
      : imageWidth * (2 / aspectRatio)
    // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const column = heights.indexOf(Math.min(...heights))

    const position = {
      x: (width / columns) * column,
      y: (heights[column] += height / 2) - height / 2,
    }
    return {
      ...child,
      index,
      position,
      columns,
      width: width / columns,
      height: height / 2,
    }
  })

  return (
    <>
      <PhotographySectionHeader datetime={datetime} href={slug} />
      <Box
        {...bind}
        className={classNames('mb4 w-100')}
        height={_.max(heights)}
      >
        {gridItems.map(item => {
          const { position, width, height } = item
          return (
            <Box
              key={item.id}
              style={{
                position: 'absolute',
                transform: `translate3d(${position.x}px,${position.y}px,0)`,
                width,
                height,
              }}
            >
              <ImageZoomGridElement
                image={item}
                onClick={() => openLightbox(item.index)}
              />
            </Box>
          )
        })}
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
