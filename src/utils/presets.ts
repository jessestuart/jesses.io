const animation = {
  curveDefault: 'cubic-bezier(0.4, 0, 0.2, 1)',
  speedDefault: '300ms',
  speedFast: '100ms',
}

const gutters = {
  HdR: 2.5,
  VHdR: 3,
  VVHdR: 4.5,
  default: 1.25,
}

export default {
  Desktop: '@media (min-width: 1000px)',
  Hd: '@media (min-width: 1200px)',
  Mobile: '@media (min-width: 400px)',
  Phablet: '@media (min-width: 550px)',
  Tablet: '@media (min-width: 750px)',
  VHd: '@media (min-width: 1450px)',
  VVHd: '@media (min-width: 1650px)',
  animation,
  desktop: '(min-width: 1000px)',
  gutters,
  hd: '(min-width: 1200px)',
  headerHeight: '3.5rem',
  logoOffset: 1.8,
  maxWidth: 35,
  maxWidthWithSidebar: 26,
  mobile: '(min-width: 400px)',
  phablet: '(min-width: 550px)',
  radius: 2,
  radiusLg: 4,
  shadowAmbientShadowOpacity: 0.06,
  shadowKeyPenumbraOpacity: 0.07,
  shadowKeyUmbraOpacity: 0.1,
  tablet: '(min-width: 750px)',
}
