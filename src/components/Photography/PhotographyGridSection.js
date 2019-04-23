/* @flow */

import 'react-image-lightbox/style.css'

import { DateTime } from 'luxon'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import React, { Component } from 'react'
import _ from 'lodash'

import type { GatsbyImage } from '../../types/gatsby-image'
import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from '.'
import StyledPanel from '../StyledPanel/StyledPanel'

// let Lightbox
// if (typeof window !== 'undefined') {
//   require('react-image-lightbox/style.css')
//   Lightbox = require('react-image-lightbox').default
// }

type Props = {
  datetime: DateTime,
  images: Array<GatsbyImage>,
  slug?: string,
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
    lightboxImages = this.state.lightboxImages,
  }: ToggleLightboxOptions) {
    // const images: Array<string> = lightboxImages || this.state.lightboxImages
    this.setState({
      index,
      isLightboxOpen,
      lightboxImages,
      lightboxSrc: lightboxImages[index],
      nextImageSrc: lightboxImages[(index + 1) % lightboxImages.length],
      prevImageSrc: lightboxImages[(index - 1) % lightboxImages.length],
    })
  }

  render() {
    const { datetime, images, slug } = this.props
    const { isLightboxOpen, index } = this.state
    if (_.isEmpty(images)) {
      return null
    }

    const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
    const lightboxImages = _.map(
      sortedImages,
      'childrenFile[0].childImageSharp.largeSizes.src'
    )
    if (!lightboxImages) {
      return null
    }

    return (
      <StyledPanel>
        <PhotographySectionHeader datetime={datetime} href={slug} />
        <ImageZoomGrid>
          {sortedImages.map((image, index) => {
            const thumbnailSizes = _.get(
              image,
              'childrenFile[0].childImageSharp.thumbnailSizes'
            )
            if (_.isEmpty(thumbnailSizes)) {
              return null
            }

            return (
              <ImageZoomGridElement
                key={thumbnailSizes.src}
                onClick={() =>
                  this.toggleLightbox({
                    index,
                    isLightboxOpen: !isLightboxOpen,
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
            mainSrc={this.state.lightboxSrc}
            nextSrc={this.state.nextImageSrc}
            prevSrc={this.state.prevImageSrc}
            onCloseRequest={() => this.setState({ isLightboxOpen: false })}
            onMovePrevRequest={() =>
              this.toggleLightbox({
                index: index - 1,
                isLightboxOpen: true,
              })
            }
            onMoveNextRequest={() =>
              this.toggleLightbox({
                index: index + 1,
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
