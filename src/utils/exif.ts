import _ from 'lodash'

export const mapCameraModelExif = _.memoize((model: string): string =>
  model === 'ILCE-7M3' ? 'Sony α7 III' : model,
)

/**
 * Mapping between how lenses are represented in EXIF data, and how they
 * are coloquially referred to.
 */
const LENS_MAPPING = {
  // This Rokinon lens doesn't report its lens info nor its aperature info
  // in EXIF data.
  '----': 'Rokinon 14mm ƒ2.8',
  'E 18-135mm F3.5-5.6 OSS': 'Sony E 18-135mm ƒ/3.5-5.6',
  'E 28-75mm F2.8-2.8': 'Tamron 28-75mm ƒ/2.8',
  'E 35mm F1.8 OSS': 'Sony E 35mm ƒ/1.8',
  'E 50mm F1.8 OSS': 'Sony E 50mm ƒ/1.8',
  'FE 85mm F1.8': 'Sony FE 85mm ƒ/1.8',
}

export const mapLensModelExif = _.memoize(
  (model: string): string => LENS_MAPPING[model] || model,
)
