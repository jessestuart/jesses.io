import 'react-image-lightbox/style.css'

import { Box, Flex, Text } from 'rebass/styled-components'
import { DateTime } from 'luxon'
import { animated, useTransition } from 'react-spring'
import Lightbox from 'react-image-lightbox'
import Link from 'gatsby-link'
import React, { useMemo, useState } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import styled from 'styled-components'

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

const SeeMoreText = styled(Text)`
  :hover {
    color: ${colors.textDark};
  }
`

// const SeeMoreLink = ({
//   href,
//   totalNumImages,
// }: {
//   href: string
//   totalNumImages: number
// }) => {
//   if (totalNumImages <= 6) {
//     return null
//   }

//   return (
//     <Link to={href}>
//       <Flex
//         justifyContent="flex-end"
//         alignItems="items-center"
//         marginBottom="4"
//       >
//         <SeeMoreText
//           sx={{
//             ':hover': {},
//           }}
//           fontSize="5"
//           color="textDarkMuted"
//           fontFamily="smallcaps"
//           hoverColor="textDark"
//           style={{ transition: 'all 0.25s ease-in-out' }}
//         >
//           See More →
//         </SeeMoreText>
//       </Flex>
//     </Link>
//   )
// }

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
    [sortedImages],
  )

  const decrementLightboxIndex = () => setLightboxIndex(index - 1)
  const incrementLightboxIndex = () => setLightboxIndex(index + 1)
  const closeLightbox = () => setIsLightboxOpen(false)
  const openLightbox = (imageIndex: number) => {
    setLightboxIndex(imageIndex)
    setIsLightboxOpen(true)
  }

  const getImageAtIndex = (imageIndex: number) =>
    _.get(lightboxImages, imageIndex % lightboxImages.length)
  const lightboxSrc = getImageAtIndex(index)
  const nextImage = getImageAtIndex(index + 1)
  const prevImage = getImageAtIndex(index - 1)

  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [4, 3, 2],
    1,
  )
  // Hook2: Measure the width of the container element
  // @ts-ignore
  const [bind, { width }] = useMeasure()
  console.log({ width })

  // Hook3: Hold items
  // const [items, set] = useState(data)
  // // Hook4: shuffle data every 2 seconds
  // useEffect(() => void setInterval(() => set(shuffle), 2000), [])

  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const heights: number[] = new Array(columns).fill(0) // Each column gets a height starting with zero
  const gridItems = sortedImages.map((child, index) => {
    // console.log({ child })
    const { childImageSharp } = child
    const imageWidth = child.width || width / columns
    // const originalHeight = _.get(childImageSharp, 'original.height')
    const aspectRatio = _.get(childImageSharp, 'sizes.aspectRatio')
    // console.log({ aspectRatio, imageWidth })
    const height = _.isFinite(child.height)
      ? child.height
      : imageWidth * (2 / aspectRatio)
    // debugger
    // console.log({ height })
    // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const column = heights.indexOf(Math.min(...heights))
    console.log({ column, height })
    // heights[column] = height
    // X = container width / number of columns * column index, Y = it's just the height of the current column
    // }

    const xy = [
      (width / columns) * column,
      (heights[column] += height / 2) - height / 2,
    ]
    return {
      ...child,
      index,
      xy,
      columns,
      width: width / columns,
      height: height / 2,
    }
  })

  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.id, {
    // initial: null,
    initial: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    unique: true,
    // leave: { height: 0, opacity: 0 },
    // config: { mass: 5, tension: 500, friction: 100 },
    // trail: 25,
  })
  // Render the grid
  // return (
  //   <div {...bind} className="list" style={{ height: Math.max(...heights) }}>
  //     {transitions.map(({ item, props: { xy, ...rest }, key }) => (
  //       <animated.div
  //         key={key}
  //         style={{
  //           transform: xy.interpolate(
  //             (x: number, y: number) => `translate3d(${x}px,${y}px,0)`,
  //           ),
  //           ...rest,
  //         }}
  //       >
  //         <div style={{ backgroundImage: item.css }} />
  //       </animated.div>
  //     ))}
  //   </div>
  // )

  // const sortedImages = useMemo(
  //   () => _.sortBy(images, 'EXIF.DateTimeOriginal'),
  //   [images],
  // )
  // const lightboxImages = useMemo(
  //   () => _.map(sortedImages, 'childImageSharp.sizes.src'),
  //   [images],
  // )

  // const decrementLightboxIndex = () => setLightboxIndex(index - 1)
  // const incrementLightboxIndex = () => setLightboxIndex(index + 1)
  // const closeLightbox = () => setIsLightboxOpen(false)
  // const openLightbox = (imageIndex: number) => {
  //   setLightboxIndex(imageIndex)
  //   setIsLightboxOpen(true)
  // }

  // const getImageAtIndex = (imageIndex: number) =>
  //   _.get(lightboxImages, imageIndex % lightboxImages.length)
  // const lightboxSrc = getImageAtIndex(index)
  // const nextImage = getImageAtIndex(index + 1)
  // const prevImage = getImageAtIndex(index - 1)

  // {gridItems.map((image: any, imageIndex: number) => (
  //   <animated.div key=
  //   <ImageZoomGridElement
  //     image={image}
  //     key={image.id}
  //     onClick={() => openLightbox(imageIndex)}
  //     style={{ width: image.width, height: image.height }}
  //     // style={{ width: image.width, height: image.height }}
  //   />
  // ))}
  //
  //
  //
  // <SeeMoreLink totalNumImages={totalNumImages} href={slug} />
  return (
    <>
      <PhotographySectionHeader datetime={datetime} href={slug} />
      <Box
        {...bind}
        // className={classNames('bb b--moon-gray pb4', {
        className={classNames('mb4 w-100')}
        height={_.max(heights)}
      >
        {transitions.map(({ item, props, key }) => {
          // @ts-ignore
          const { xy, ...rest } = props
          return (
            <animated.div
              key={key}
              style={{
                position: 'absolute',
                transform: xy.interpolate(
                  (x: number, y: number) => `translate3d(${x}px,${y}px,0)`,
                ),
                ...rest,
              }}
            >
              <ImageZoomGridElement
                image={item}
                onClick={() => openLightbox(item.index)}
              />
            </animated.div>
          )
        })}
      </Box>
      <Box marginTop={2} style={{ borderTop: '1px solid rgb(221, 221, 221)' }}>
        &nbsp;
      </Box>
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

// const PhotographyGridSection = (props: Props) => {
//   const { datetime, images, slug = '/#', totalNumImages = 0 } = props
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false)
//   const [index, setLightboxIndex] = useState(0)

//   const sortedImages = useMemo(
//     () => _.sortBy(images, 'EXIF.DateTimeOriginal'),
//     [images],
//   )
//   const lightboxImages = useMemo(
//     () => _.map(sortedImages, 'childImageSharp.sizes.src'),
//     [images],
//   )

//   const decrementLightboxIndex = () => setLightboxIndex(index - 1)
//   const incrementLightboxIndex = () => setLightboxIndex(index + 1)
//   const closeLightbox = () => setIsLightboxOpen(false)
//   const openLightbox = (imageIndex: number) => {
//     setLightboxIndex(imageIndex)
//     setIsLightboxOpen(true)
//   }

//   // const aspectRatios = _.map(images, 'childImageSharp.sizes.aspectRatio')

//   const getImageAtIndex = (imageIndex: number) =>
//     _.get(lightboxImages, imageIndex % lightboxImages.length)
//   const lightboxSrc = getImageAtIndex(index)
//   const nextImage = getImageAtIndex(index + 1)
//   const prevImage = getImageAtIndex(index - 1)

//   // const nextImage = _.get(lightboxImages, (index + 1) % lightboxImages.length)
//   // const prevImage = _.get(lightboxImages, (index - 1) % lightboxImages.length)

//   // const lightboxSrc = _.get(lightboxImages, index)
//   // const nextImage = _.get(lightboxImages, (index + 1) % lightboxImages.length)
//   // const prevImage = _.get(lightboxImages, (index - 1) % lightboxImages.length)

//   return (
//     <>
//       <PhotographySectionHeader datetime={datetime} href={slug} />
//       <ImageZoomGrid
//         // className={classNames('bb b--moon-gray pb4', {
//         className={classNames('pb4', {
//           // pb4: totalNumImages > 6,
//         })}
//       >
//         {sortedImages.map((image: any, imageIndex: number) => (
//           <ImageZoomGridElement
//             key={image.id}
//             image={image}
//             onClick={() => openLightbox(imageIndex)}
//           />
//         ))}
//       </ImageZoomGrid>
//       <SeeMoreLink totalNumImages={totalNumImages} href={slug} />
//       <Box style={{ borderTop: '1px solid rgb(221, 221, 221)' }}>&nbsp;</Box>
//       {isLightboxOpen && (
//         <Lightbox
//           enableZoom={false}
//           mainSrc={lightboxSrc}
//           nextSrc={nextImage}
//           prevSrc={prevImage}
//           onCloseRequest={closeLightbox}
//           onMovePrevRequest={decrementLightboxIndex}
//           onMoveNextRequest={incrementLightboxIndex}
//         />
//       )}
//     </>
//   )
// }

export default PhotographyGridSection
