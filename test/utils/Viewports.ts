interface Viewport {
  width: number
  height: number
  deviceScaleFactor?: number
  isMobile?: boolean
  hasTouch?: boolean
  isLandscape?: boolean
}

export const iPhone: Viewport = {
  height: 1334,
  width: 750,
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true,
  isLandscape: false,
}

export const iPhonePlus: Viewport = {
  height: 1920,
  width: 1080,
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true,
  isLandscape: false,
}

export const iPadMini: Viewport = {
  height: 2048,
  width: 1536,
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: false,
  isLandscape: false,
}
