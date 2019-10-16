import 'react-image-lightbox/style.css'

import _ from 'lodash'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
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

  const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
  const lightboxImages = _.map(sortedImages, 'childImageSharp.sizes.src')

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

// class PhotographyGridSection extends PureComponent<Props, State> {
//   public readonly state: State = {
//     index: 0,
//     isLightboxOpen: false,
//     lightboxImages: [],
//   }

//   /**
//    * Lightbox images are just the scaled up version of the thumbnails.
//    * Here we extract the absolute source path for all Lightbox images
//    * for the current gallery.
//    */
//   public static getDerivedStateFromProps = _.memoize((props: Props) => {
//     const lightboxImages = _.flow(
//       fp.get('images'),
//       fp.sortBy('EXIF.DateTimeOriginal'),
//       fp.map('childImageSharp.sizes.src'),
//     )(props)
//     return {
//       lightboxImages,
//       lightboxSrc: _.first(lightboxImages),
//     }
//   })

//   public render() {
//     const { datetime, images, slug = '/#', totalNumImages = 0 } = this.props
//     if (!images || _.isEmpty(images)) {
//       return null
//     }
//     const [isLightboxOpen, setIsLightboxOpen] = useState(false)
//     const [lightboxIndex, setLightboxIndex] = useState(0)

//     const closeLightbox = () => setIsLightboxOpen(false)
//     const openLightbox = (imageIndex: number) => {
//       setLightboxIndex(imageIndex)
//       setIsLightboxOpen(true)
//     }

//     const {
//       // isLightboxOpen,
//       lightboxSrc,
//       nextImageSrc,
//       prevImageSrc,
//     } = this.state
//     const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')

//     const aspectRatios = _.map(images, 'childImageSharp.sizes.aspectRatio')
//     console.log({ images })
//     console.log({ aspectRatios })
//     // const lightboxImages = _.map(sortedImages, 'childImageSharp.sizes.src')
//     // if (_.isEmpty(images) || _.isEmpty(lightboxImages)) {
//     //   return null
//     // }

//     return (
//       <>
//         <PhotographySectionHeader datetime={datetime} href={slug} />
//         <ImageZoomGrid
//           // className={classNames('bb b--moon-gray pb4', {
//           className={classNames('pb4', {
//             // pb4: totalNumImages > 6,
//           })}
//         >
//           {sortedImages.map((image: any, imageIndex: number) => (
//             <ImageZoomGridElement
//               key={image.id}
//               image={image}
//               onClick={() => openLightbox(imageIndex)}
//             />
//           ))}
//         </ImageZoomGrid>
//         <SeeMoreLink totalNumImages={totalNumImages} href={slug} />
//         <hr />
//         {isLightboxOpen && lightboxSrc && (
//           <Lightbox
//             enableZoom={false}
//             mainSrc={lightboxSrc}
//             nextSrc={nextImageSrc}
//             prevSrc={prevImageSrc}
//             onCloseRequest={closeLightbox}
//             onMovePrevRequest={this.decrementLightboxIndex}
//             onMoveNextRequest={this.incrementLightboxIndex}
//           />
//         )}
//       </>
//     )
//   }

//   private decrementLightboxIndex = () => {
//     this.toggleLightbox({
//       index: this.state.index - 1,
//       isLightboxOpen: true,
//     })
//   }

//   private incrementLightboxIndex = () => {
//     this.toggleLightbox({
//       index: this.state.index + 1,
//       isLightboxOpen: true,
//     })
//   }

//   // private closeLightbox = () => {
//   //   this.toggleLightbox({ ...this.state, isLightboxOpen: false })
//   // }

//   // private clickImageElement = (imageIndex: number) => {
//   //   this.toggleLightbox({
//   //     index: imageIndex,
//   //     isLightboxOpen: !this.state.isLightboxOpen,
//   //     lightboxImages: this.state.lightboxImages,
//   //   })
//   // }

//   private toggleLightbox = (state?: State) => {
//     if (!state) {
//       return
//     }
//     const { index, lightboxImages } = state
//     if (!index || !lightboxImages || _.isEmpty(lightboxImages)) {
//       return
//     }
//     this.setState({
//       ...state,
//       // index,
//       // isLightboxOpen,
//       // lightboxImages,
//       lightboxSrc: lightboxImages[index],
//       nextImageSrc: _.get(lightboxImages, (index + 1) % lightboxImages.length),
//       prevImageSrc: _.get(lightboxImages, (index - 1) % lightboxImages.length),
//     })
//   }
// }

export default PhotographyGridSection
