import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0 })
  const [node, setNode] = useState(null)

  const ref = useCallback(node => {
    setNode(node)
  }, [])

  useLayoutEffect(() => {
    if (!node) {
      return
    }
    const measure = () =>
      window.requestAnimationFrame(() => {
        // @ts-ignore
        const rect = node.getBoundingClientRect()
        setDimensions({ width: rect.width })
      })
    measure()

    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure)

    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure)
    }
  }, [node])
  return [ref, dimensions, node]
}

export const useMedia = (
  queries: string[],
  // eslint-disable-next-line
  values: Array<string | number | any>,
  defaultValue: string | number | any,
) => {
  // Array containing a media query list for each query
  const mediaQueryLists =
    typeof window !== 'undefined'
      ? queries.map((q: any) => window.matchMedia(q))
      : []

  // Function that gets value based on matching media query
  // eslint-disable-next-line
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex(mql => mql.matches)
    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }

  // State and setter for matched value
  const [value, setValue] = useState(getValue)

  useEffect(() => {
    // Event listener callback
    // NB: By defining getValue outside of useEffect we ensure that it has
    // current values of hook args (as this hook callback is created once on
    // mount).
    const handler = () => setValue(getValue)
    // Set a listener for each media query with above handler as callback.
    mediaQueryLists.forEach(mql => mql.addListener(handler))
    // Remove listeners on cleanup.
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
    // eslint-disable-next-line
  }, [])

  return value
}

// export const useSiteMetadata = () => {
//   const { site } = useStaticQuery(
//     graphql`
//       query SiteMetaData {
//         site {
//           siteMetadata {
//             title
//             siteUrl
//           }
//         }
//       }
//     `,
//   )
//   return site.siteMetadata
// }
