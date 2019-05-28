import { StyledPanel } from 'components'
import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from 'components/Photography'
import _ from 'lodash'
import fp from 'lodash/fp'
import { DateTime } from 'luxon'
import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

interface Props {
  datetime: DateTime
  // The images to be *currently* displayed for this section.
  images: any[]
  // The *total* number of images available for this section, even those that
  // are currently hidden.
  // imageCount: number
  // True if on `/photography` page; false if on one of the photo details pages.
  isPreview?: boolean
  slug?: string
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
  private getLightboxImagesFromProps: (props: Props) => string[] = _.memoize(
    _.flow(
      fp.get('images'),
      fp.sortBy('EXIF.DateTimeOriginal'),
      fp.map('childImageSharp.largeSizes.src'),
    ),
  )

  public componentWillMount() {
    this.setState({
      lightboxImages: this.getLightboxImagesFromProps(this.props),
    })
  }

  public render() {
    const { datetime, images, slug = '/#' } = this.props
    const {
      isLightboxOpen,
      lightboxSrc,
      nextImageSrc,
      prevImageSrc,
    } = this.state
    const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
    const lightboxImages = _.map(sortedImages, 'childImageSharp.largeSizes.src')

    if (_.isEmpty(images) || _.isEmpty(lightboxImages)) {
      return null
    }

    return (
      <StyledPanel>
        <PhotographySectionHeader datetime={datetime} href={slug} />
        <ImageZoomGrid>
          {sortedImages.map((image: any, imageIndex: number) => {
            return (
              <ImageZoomGridElement
                key={image.id}
                image={image}
                onClick={() => this.clickImageElement(imageIndex)}
              />
            )
          })}
        </ImageZoomGrid>
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
    // prettier-ignore
    this.setState({ // lgtm [js/react/inconsistent-state-update]
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
