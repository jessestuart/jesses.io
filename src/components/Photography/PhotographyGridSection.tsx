import 'react-image-lightbox/style.css'

import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'
import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import { Flex } from 'rebass'

import Colors from 'utils/colors'

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
   */
  private static getLightboxImagesFromProps: (
    props: Props,
  ) => string[] = _.memoize(
    _.flow(
      fp.get('images'),
      fp.sortBy('EXIF.DateTimeOriginal'),
      fp.map('childImageSharp.sizes.src'),
    ),
  )

  public static getDerivedStateFromProps(props: Props) {
    return {
      lightboxImages: PhotographyGridSection.getLightboxImagesFromProps(props),
    }
  }

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

    console.log({ totalNumImages })

    // const lightboxImages = _.map(sortedImages, 'childImageSharp.sizes.src')
    // if (_.isEmpty(images) || _.isEmpty(lightboxImages)) {
    //   return null
    // }

    return (
      <StyledPanel>
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
        {totalNumImages > 6 ? (
          <Flex
            backgroundColor={Colors.gray.calm}
            className="bt b--moon-gray mt2 pt2 br2 justify-end items-center"
            color="white"
            style={{
              marginLeft: '-2.5rem',
              marginRight: '-2.5rem',
              marginBottom: '-2.5rem',
            }}
          >
            see more...
          </Flex>
        ) : null}
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
      </StyledPanel>
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
