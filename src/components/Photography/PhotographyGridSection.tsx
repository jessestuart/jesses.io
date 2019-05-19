import { StyledPanel } from 'components'
import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from 'components/Photography'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import _ from 'lodash'
import { DateTime } from 'luxon'
import md5 from 'md5'
import React, { Component } from 'react'
import { Maximize2 } from 'react-feather'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import styled from 'styled-components'
import GatsbyImage from 'types/GatsbyImage'
import colors from 'utils/colors'

interface Props {
  datetime: DateTime
  // The images to be *currently* displayed for this section.
  images: any[]
  // The *total* number of images available for this section, even those that
  // are currently hidden.
  imageCount: number
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

const MaximizeLink = styled(Link)`
  bottom: -40px;
  color: ${colors.accent};
  cursor: pointer;
  position: absolute;
  right: -40px;
  transition: all 0.5s;
  &:hover {
    color: ${colors.primary.main} !important;
  }
`

class PhotographyGridSection extends Component<Props, State> {
  public readonly state: State = {
    index: 0,
    isLightboxOpen: false,
    lightboxImages: [],
  }

  public componentWillMount() {
    this.setState({ lightboxImages: this.getLightboxImagesFromProps() })
  }

  public render() {
    const { datetime, images, imageCount, isPreview, slug = '/#' } = this.props
    const {
      isLightboxOpen,
      lightboxSrc,
      nextImageSrc,
      prevImageSrc,
    } = this.state

    // const lightboxImages = _.get(imageSources, 'largeSizes.src')
    const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
    const lightboxImages = _.map(sortedImages, 'childImageSharp.largeSizes.src')

    if (_.isEmpty(images) || _.isEmpty(lightboxImages)) {
      return null
    }

    // The value of the comparator here needs to match that of
    // `PHOTOGRAPHY_INDEX_NUM_PREVIEWS` in `pages/photography.tsx` (currently,
    // six).  Unfortunately importing that directly seems to cause circular
    // dependency issues with tests that I haven't had the time to debug,
    // so... yay magic numbers.
    const shouldShowMaximizeLink = isPreview && imageCount > 6

    return (
      <StyledPanel>
        <PhotographySectionHeader datetime={datetime} href={slug} />
        <ImageZoomGrid>
          {sortedImages.map((image: any, imageIndex: number) => {
            return this.renderImagePreview(image, imageIndex)
          })}
          {shouldShowMaximizeLink && (
            <MaximizeLink to={slug}>
              <Maximize2 size={32} />
            </MaximizeLink>
          )}
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

  /**
   * Lightbox images are just the scaled up version of the thumbnails.
   * Here we extract the absolute source path for all Lightbox images
   * for the current gallery.
   */
  private getLightboxImagesFromProps = (): string[] => {
    const { images } = this.props
    const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
    const lightboxImages = _.map(sortedImages, 'childImageSharp.largeSizes.src')
    return lightboxImages
  }

  private renderImagePreview = (image, imageIndex) => {
    const thumbnailSizes: GatsbyImage = _.get(
      image,
      'childImageSharp.thumbnailSizes',
    )

    if (_.isEmpty(thumbnailSizes)) {
      return null
    }

    const { aspectRatio, src } = thumbnailSizes

    return (
      <ImageZoomGridElement
        aspectRatio={aspectRatio}
        key={md5(src)}
        onClick={() => this.clickImageElement(imageIndex)}
      >
        <Img fluid={thumbnailSizes} className="pointer" />
      </ImageZoomGridElement>
    )
  }
}

export default PhotographyGridSection
