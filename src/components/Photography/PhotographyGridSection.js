/* @flow */
import React, { Component } from 'react'
import Img from 'gatsby-image'
import _ from 'lodash'
import { DateTime } from 'luxon'
import Lightbox from 'react-image-lightbox'

import type { GatsbyImage } from '../../types/gatsby-image'
import StyledPanel from '../StyledPanel/StyledPanel'

import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from '.'

type Props = {
  datetime: DateTime,
  images: Array<GatsbyImage>,
  slug: string,
}

type State = {
  isLightboxOpen: boolean,
  lightboxImages: Array<string>,
  index: number,
  lightboxSrc?: string,
  nextImageSrc?: string,
  prevImageSrc?: string,
}

type ToggleLightboxOptions = {
  index: number,
  isLightboxOpen: boolean,
  lightboxImages?: Array<string>,
}

class PhotographyGridSection extends Component<Props, State> {
  state = {
    isLightboxOpen: false,
    lightboxImages: [],
    index: 0,
  }

  toggleLightbox({
    index,
    isLightboxOpen,
    lightboxImages,
  }: ToggleLightboxOptions) {
    const images: Array<string> = lightboxImages || this.state.lightboxImages
    this.setState({
      index,
      isLightboxOpen,
      lightboxImages: images,
      lightboxSrc: images[index],
      nextImageSrc: images[(index + 1) % images.length],
      prevImageSrc: images[(index - 1) % images.length],
    })
  }

  render() {
    const { datetime, images, slug } = this.props
    if (_.isEmpty(images)) {
      return
    }

    const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
    const lightboxImages = _.map(sortedImages, 'childImageSharp.largeSizes.src')

    return (
      <StyledPanel>
        <PhotographySectionHeader datetime={datetime} href={slug} />
        <ImageZoomGrid>
          {sortedImages.map((image, index) => {
            const thumbnailSizes = _.get(
              image,
              'childImageSharp.thumbnailSizes'
            )
            if (_.isEmpty(thumbnailSizes)) {
              return
            }

            return (
              <ImageZoomGridElement
                key={thumbnailSizes.src}
                onClick={() =>
                  this.toggleLightbox({
                    index,
                    isLightboxOpen: !this.state.isLightboxOpen,
                    lightboxImages,
                  })
                }
                aspectRatio={thumbnailSizes.aspectRatio}
              >
                <Img sizes={thumbnailSizes} className="pointer" />
              </ImageZoomGridElement>
            )
          })}
        </ImageZoomGrid>
        {this.state.isLightboxOpen ? (
          <Lightbox
            enableZoom={false}
            mainSrc={this.state.lightboxSrc || ''}
            nextSrc={this.state.nextImageSrc}
            prevSrc={this.state.prevImageSrc}
            onCloseRequest={() => this.setState({ isLightboxOpen: false })}
            onMovePrevRequest={() =>
              this.toggleLightbox({
                index: this.state.index - 1,
                isLightboxOpen: true,
              })
            }
            onMoveNextRequest={() =>
              this.toggleLightbox({
                index: this.state.index + 1,
                isLightboxOpen: true,
              })
            }
          />
        ) : null}
      </StyledPanel>
    )
  }
}

export default PhotographyGridSection
