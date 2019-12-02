interface Viewport {
  width: number
  height: number
  deviceScaleFactor?: number
  isMobile?: boolean
  hasTouch?: boolean
  isLandscape?: boolean
}

export const iPhone: Viewport = {
  deviceScaleFactor: 1,
  hasTouch: true,
  height: 1334,
  isLandscape: false,
  isMobile: true,
  width: 750,
}

export const iPhonePlus: Viewport = {
  deviceScaleFactor: 1,
  hasTouch: true,
  height: 1920,
  isLandscape: false,
  isMobile: true,
  width: 1080,
}

export const iPadMini: Viewport = {
  deviceScaleFactor: 1,
  hasTouch: false,
  height: 2048,
  isLandscape: false,
  isMobile: true,
  width: 1536,
}
