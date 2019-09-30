import { graphql, useStaticQuery } from 'gatsby'
import { useRef, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect)),
  )
  // @ts-ignore
  // eslint-disable-next-line
  useEffect(() => (ro.observe(ref.current), ro.disconnect), [])
  return [{ ref }, bounds]
}

export function useMedia(queries, values, defaultValue) {
  const match = () =>
    values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener('resize', handler)
    // @ts-ignore
    return () => window.removeEventListener(handler)
  }, [])
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
