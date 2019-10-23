import { graphql, useStaticQuery } from 'gatsby'
import { useRef, useState, useEffect, useCallback } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import _ from 'lodash'

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

export const useMedia = (queries, values, defaultValue) => {
  const match = useCallback(
    () =>
      values[
        queries.findIndex((q: any) =>
          _.isNil(window) ? defaultValue : matchMedia(q).matches,
        )
      ] || defaultValue,
  )

  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener('resize', handler)
    // @ts-ignore
    return () => window.removeEventListener(handler)
  }, [match])
  return value
}

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
