import 'react-image-lightbox/style.css'

import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'
import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import { Flex, Text } from 'rebass'
import Link from 'gatsby-link'

import Colors from 'utils/colors'
import color from 'color'

import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from 'components/Photography'
import StyledPanel from 'components/StyledPanel/StyledPanel'

interface Props {
  datetime: DateTime
  // The images to be *currently* displayed for this section.
  images: any[]
  // True if on `/photography` page; false if on one of the photo details pages.
  isPreview?: boolean
  slug?: string
  totalNumImages?: number
}

interface State {
  index: number
  isLightboxOpen: boolean
  lightboxImages: string[]
  lightboxSrc?: string
  nextImageSrc?: string
  prevImageSrc?: string
}

interface ToggleLightboxOptions {
  index: number
  isLightboxOpen: boolean
  lightboxImages?: string[]
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

  console.log('href: ', { href })

  const seeMoreBgColor = color(Colors.gray.calm)
    .fade(0.95)
    .toString()

  return (
    <Flex
      bg={seeMoreBgColor}
      className="bt b--moon-gray justify-end"
      p={3}
      marginLeft="-2.5rem"
      marginRight="-2.5rem"
      marginBottom="-2.5rem"
      alignItems="items-center"
      color="moon-gray"
      style={{
        // marginLeft: '-2.5rem',
        // marginRight: '-2.5rem',
        // marginBottom: '-2.5rem',
        borderBottomLeftRadius: '0.3rem',
        borderBottomRightRadius: '0.3rem',
      }}
    >
      <Link to={href}>
        <Text fontFamily="Alegreya Sans SC">See More →</Text>
      </Link>
    </Flex>
  )
}

class PhotographyGridSection extends Component<Props, State> {
  public readonly state: State = {
    index: 0,
    isLightboxOpen: false,
    lightboxImages: [],
  }

  /**
   * Lightbox images are just the scaled up version of the thumbnails.
   * Here we extract the absolute source path for all Lightbox images
   * for the current gallery.
   * @Deprecated
   */
  // private static getLightboxImagesFromProps: (
  //   props: Props,
  // ) => string[] = _.memoize(
  //   _.flow(
  //     fp.get('images'),
  //     fp.sortBy('EXIF.DateTimeOriginal'),
  //     fp.map('childImageSharp.sizes.src'),
  //   ),
  // )

  /**
   * Lightbox images are just the scaled up version of the thumbnails.
   * Here we extract the absolute source path for all Lightbox images
   * for the current gallery.
   */
  public static getDerivedStateFromProps = (_props: Props) => ({
    lightboxImages: _.memoize(
      _.flow(
        fp.get('images'),
        fp.sortBy('EXIF.DateTimeOriginal'),
        fp.map('childImageSharp.sizes.src'),
      ),
    ),
  })

  public render() {
    const { datetime, images, slug = '/#', totalNumImages = 0 } = this.props
    if (!images || _.isEmpty(images)) {
      return null
    }
    const {
      isLightboxOpen,
      lightboxSrc,
      nextImageSrc,
      prevImageSrc,
    } = this.state
    const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')

    // const lightboxImages = _.map(sortedImages, 'childImageSharp.sizes.src')
    // if (_.isEmpty(images) || _.isEmpty(lightboxImages)) {
    //   return null
    // }

    return (
      <>
        <PhotographySectionHeader datetime={datetime} href={slug} />
        <ImageZoomGrid className={totalNumImages > 6 ? 'pb4' : undefined}>
          {sortedImages.map((image: any, imageIndex: number) => (
            <ImageZoomGridElement
              key={image.id}
              image={image}
              onClick={() => this.clickImageElement(imageIndex)}
            />
          ))}
        </ImageZoomGrid>
        <SeeMoreLink totalNumImages={totalNumImages} href={slug} />
        {isLightboxOpen && lightboxSrc && (
          <Lightbox
            enableZoom={false}
            mainSrc={lightboxSrc}
            nextSrc={nextImageSrc}
            prevSrc={prevImageSrc}
            onCloseRequest={this.closeLightbox}
            onMovePrevRequest={this.decrementLightboxIndex}
            onMoveNextRequest={this.incrementLightboxIndex}
          />
        )}
      </>
    )
  }

  private decrementLightboxIndex = () => {
    this.toggleLightbox({ index: this.state.index - 1, isLightboxOpen: true })
  }

  private incrementLightboxIndex = () => {
    this.toggleLightbox({ index: this.state.index + 1, isLightboxOpen: true })
  }

  private closeLightbox = () => {
    this.toggleLightbox({ ...this.state, isLightboxOpen: false })
  }

  private clickImageElement = (imageIndex: number) => {
    this.toggleLightbox({
      index: imageIndex,
      isLightboxOpen: !this.state.isLightboxOpen,
      lightboxImages: this.state.lightboxImages,
    })
  }

  private toggleLightbox = ({
    index = this.state.index,
    isLightboxOpen = this.state.isLightboxOpen,
    lightboxImages = this.state.lightboxImages,
  }: ToggleLightboxOptions) => {
    this.setState({
      index,
      isLightboxOpen,
      lightboxImages,
      lightboxSrc: lightboxImages[index],
      nextImageSrc: lightboxImages[(index + 1) % lightboxImages.length],
      prevImageSrc: lightboxImages[(index - 1) % lightboxImages.length],
    })
  }
}

export default PhotographyGridSection
