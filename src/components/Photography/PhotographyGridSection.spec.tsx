import PhotographyGridSection from 'components/Photography/PhotographyGridSection'
import { DateTime } from 'luxon'
import React from 'react'
import renderer from 'react-test-renderer'

import image2 from '../../../test/images/DSC01983.jpg'
import image1 from '../../../test/images/DSC02630.jpg'

const datetime = DateTime.utc(2019, 5, 1, 1, 1, 1)

test('Render PhotographyGridSection component.', () => {
  const tree = renderer
    .create(
      <PhotographyGridSection datetime={datetime} images={[]} imageCount={0} />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Render PhotographyGridSection component w/ images.', () => {
  const tree = renderer
    .create(
      <PhotographyGridSection
        datetime={datetime}
        imageCount={2}
        images={[image1, image2]}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
