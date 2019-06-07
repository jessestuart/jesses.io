import { mapCameraModelExif, mapLensModelExif } from 'utils/exif'

describe('Exif utils.', () => {
  test('Correctly returns a7 III when given ILCE-7MS.', () => {
    expect(mapCameraModelExif('ILCE-7M3')).toBe('Sony α7 III')
  })
  test('Anything else defaults to whatever.', () => {
    expect(mapCameraModelExif('Some random camera')).toBe('Some random camera')
  })
})

describe('Exif lens utils.', () => {
  test('Sony 85mm ƒ1.8', () => {
    expect(mapLensModelExif('E 28-75mm F2.8-2.8')).toBe('Tamron 28-75mm ƒ/2.8')
  })
  test('Anything else defaults to whatever.', () => {
    expect(mapLensModelExif('Some random lens')).toBe('Some random lens')
  })
})
