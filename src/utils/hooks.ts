import { graphql, useStaticQuery } from 'gatsby'
import { useRef, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

// interface MeasureState {
//   height: number
//   left: number
//   top: number
//   width: number
// }

export const useMeasure = () => {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect)),
  )
  // @ts-ignore
  useEffect(() => (ro.observe(ref.current), ro.disconnect), [ro])
  return [{ ref }, bounds]
}

// export function useMeasure() {
//   const ref = useRef()
//   const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
//   const [ro] = useState(
//     () => new ResizeObserver(([entry]) => set(entry.contentRect)),
//   )
//   console.log({ ro, ref})
//   // @ts-ignore
//   useEffect(() => {
//     // if (!ref.current) {
//     //   return
//     // }
//     // @ts-ignore
//     return [ro.observe(ref.current), ro.disconnect]
//   }, [ro])
//   return [{ ref }, bounds]
// }

// export const useMedia = (queries, values, defaultValue) => {
//   const match = useCallback(
//     () =>
//       values[
//         queries.findIndex(
//           (q: any) => defaultValue,
//           // typeof window === undefined ? defaultValue : matchMedia(q).matches,
//         )
//       ] || defaultValue,
//   )

//   const [value, set] = useState(match)
//   useEffect(() => {
//     const handler = () => set(match)
//     window.addEventListener('resize', handler)
//     // @ts-ignore
//     return () => window.removeEventListener(handler)
//   }, [match])
//   return value
// }

export function useMedia(queries, values, defaultValue) {
  console.log({ queries, values, defaultValue })
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map(q => window.matchMedia(q))
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
  console.log({ value })

  useEffect(() => {
    // Event listener callback
    // Note: By defining getValue outside of useEffect we ensure that it has ...
    // ... current values of hook args (as this hook callback is created once on mount).
    const handler = () => setValue(getValue)
    // Set a listener for each media query with above handler as callback.
    mediaQueryLists.forEach(mql => mql.addListener(handler))
    // Remove listeners on cleanup
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
    // eslint-disable-next-line
  }, [])

  return value
}
// export const useMedia = (queries, values, defaultValue) => {
//   // Array containing a media query list for each query
//   // const mediaQueryLists = queries.map(q => window.matchMedia(q))
//   const mediaQueryLists =
//     typeof window !== 'undefined' ? queries.map(q => window.matchMedia(q)) : []

//   // Function that gets value based on matching media query
//   // eslint-disable-next-line
//   const getValue = () => {
//     // Get index of first media query that matches
//     const index = mediaQueryLists.findIndex(mql => mql.matches)
//     // Return related value or defaultValue if none
//     return typeof values[index] !== 'undefined' ? values[index] : defaultValue
//   }

//   // State and setter for matched value
//   const [value, setValue] = useState(getValue)

//   useEffect(() => {
//     // Event listener callback
//     // Note: By defining getValue outside of useEffect we ensure that it has ...
//     // ... current values of hook args (as this hook callback is created once on mount).
//     const handler = () => setValue(getValue)
//     // Set a listener for each media query with above handler as callback.
//     mediaQueryLists.forEach(mql => mql.addListener(handler))
//     // Remove listeners on cleanup
//     return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
//   }, [getValue, mediaQueryLists]) // Empty array ensures effect is only run on mount and unmount

//   return value
// }

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )
  return site.siteMetadata
}
