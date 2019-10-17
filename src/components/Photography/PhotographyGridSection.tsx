import 'react-image-lightbox/style.css'

import _ from 'lodash'
import classNames from 'classnames'
import Lightbox from 'react-image-lightbox'
import Link from 'gatsby-link'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from 'rebass/styled-components'
import { DateTime } from 'luxon'

import { colors } from 'styles/Theme'

import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from 'components/Photography'

interface Props {
  datetime: DateTime
  // The images to be *currently* displayed for this section.
  images: any[]
  slug?: string
  totalNumImages?: number
}

const SeeMoreText = styled(Text)`
  :hover {
    color: ${colors.textDark};
  }
`

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
        <SeeMoreText
          fontSize="5"
          color="textDarkMuted"
          fontFamily="smallcaps"
          hoverColor="textDark"
          style={{ transition: 'all 0.25s ease-in-out' }}
        >
          See More →
        </SeeMoreText>
      </Flex>
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
    () => _.map(sortedImages, 'childImageSharp.sizes.src'),
    [images],
  )

  const decrementLightboxIndex = () => setLightboxIndex(index - 1)
  const incrementLightboxIndex = () => setLightboxIndex(index + 1)
  const closeLightbox = () => setIsLightboxOpen(false)
  const openLightbox = (imageIndex: number) => {
    setLightboxIndex(imageIndex)
    setIsLightboxOpen(true)
  }

  // const aspectRatios = _.map(images, 'childImageSharp.sizes.aspectRatio')

  const getImageAtIndex = (imageIndex: number) =>
    _.get(lightboxImages, imageIndex % lightboxImages.length)
  const lightboxSrc = getImageAtIndex(index)
  const nextImage = getImageAtIndex(index + 1)
  const prevImage = getImageAtIndex(index - 1)

  // const nextImage = _.get(lightboxImages, (index + 1) % lightboxImages.length)
  // const prevImage = _.get(lightboxImages, (index - 1) % lightboxImages.length)

  // const lightboxSrc = _.get(lightboxImages, index)
  // const nextImage = _.get(lightboxImages, (index + 1) % lightboxImages.length)
  // const prevImage = _.get(lightboxImages, (index - 1) % lightboxImages.length)

  return (
    <>
      <PhotographySectionHeader datetime={datetime} href={slug} />
      <ImageZoomGrid
        // className={classNames('bb b--moon-gray pb4', {
        className={classNames('pb4', {
          // pb4: totalNumImages > 6,
        })}
      >
        {sortedImages.map((image: any, imageIndex: number) => (
          <ImageZoomGridElement
            key={image.id}
            image={image}
            onClick={() => openLightbox(imageIndex)}
          />
        ))}
      </ImageZoomGrid>
      <SeeMoreLink totalNumImages={totalNumImages} href={slug} />
      <Box style={{ borderTop: '1px solid rgb(221, 221, 221)' }}>&nbsp;</Box>
      {isLightboxOpen && (
        <Lightbox
          enableZoom={false}
          mainSrc={lightboxSrc}
          nextSrc={nextImage}
          prevSrc={prevImage}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={decrementLightboxIndex}
          onMoveNextRequest={incrementLightboxIndex}
        />
      )}
    </>
  )
}

export default PhotographyGridSection
