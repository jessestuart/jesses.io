import 'react-image-lightbox/style.css'

import _ from 'lodash'
import { DateTime } from 'luxon'
import React, { useMemo, useState } from 'react'
import Lightbox from 'react-image-lightbox'
import { Flex, Text } from 'rebass/styled-components'
import Link from 'gatsby-link'
import classNames from 'classnames'

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

  // const seeMoreBgColor = color(Colors.gray.calm)
  //   .fade(0.95)
  //   .toString()

  return (
    <Link to={href}>
      <Flex
        // bg={seeMoreBgColor}
        // className="bb b--moon-gray mb4"
        // className="mb4"
        justifyContent="flex-end"
        alignItems="items-center"
        marginBottom="4"
        style={{
          // marginLeft: '2.5rem',
          // marginRight: '2.5rem',
          // marginBottom: '2.5rem',
          borderBottomLeftRadius: '0.3rem',
          borderBottomRightRadius: '0.3rem',
        }}
      >
        <Text
          fontSize="4"
          color="textDarkMuted"
          // fontFamily="smallcaps"
          paddingBottom="3"
        >
          see more →
        </Text>
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

  const decrementLightboxIndex = () => {
    setLightboxIndex(index - 1)
  }

  const incrementLightboxIndex = () => {
    setLightboxIndex(index + 1)
  }

  const closeLightbox = () => setIsLightboxOpen(false)
  const openLightbox = (imageIndex: number) => {
    setLightboxIndex(imageIndex)
    setIsLightboxOpen(true)
  }

  // const aspectRatios = _.map(images, 'childImageSharp.sizes.aspectRatio')

  const lightboxSrc = _.get(lightboxImages, index)
  const nextImage = _.get(lightboxImages, (index + 1) % lightboxImages.length)
  const prevImage = _.get(lightboxImages, (index - 1) % lightboxImages.length)

  // console.log({ aspectRatios, nextImage, prevImage })

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
      <hr />
      {isLightboxOpen && lightboxSrc && (
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
