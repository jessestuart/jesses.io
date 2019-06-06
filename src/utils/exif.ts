import _ from 'lodash'

export const mapCameraModelExif = _.memoize(
  (model: string): string => {
    return model === 'ILCE-7M3' ? 'Sony α7 III' : model
  },
)

export const mapLensModelExif = _.memoize(
  (model: string): string => {
    const mapping = {
      '---': 'Rokinon 14mm ƒ2.8',
      'E 28-75mm F2.8-2.8': 'Tamron 28-75mm ƒ/2.8',
      'FE 85mm F1.8': 'Sony FE 85mm ƒ/1.8',
    }
    return mapping[model] || model
  },
)
