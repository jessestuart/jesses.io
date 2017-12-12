/* eslint-disable sort-keys */
const ParticlesConfig = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
      },
    },
    line_linked: {
      shadow: {
        enable: true,
        color: '#3CA9D1',
        blur: 10,
      },
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    retina_detect: true,
  },
}
/* eslint-enable sort-keys */

export default ParticlesConfig
