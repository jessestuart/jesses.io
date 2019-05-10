export default interface GatsbyImage {
  sizes: {
    aspectRatio: number
    base64: string
    sizes: string
    src: string
    srcSet: string
  }
}
