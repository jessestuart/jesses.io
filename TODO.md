### Need-to-do

- Add anchor tags to SVG icons

### Ideas

- Integrate `react-calendar-heatmap` to highlight GH contributions.
- Consolidate vendor stylesheets in `styles` directory.
- Set up SonarQube

* Code block style: http://jstu.art/pRnP

### Icons to add

- Swagger

### Nice-to-haves

- Better logging
- Sentry
  - https://github.com/octalmage/gatsby-plugin-sentry

### Photography

- Add exif plugin?

```
const exifImage = exif.ExifImage(
  { image: image.Body },
  (err, exifData) => {
    // console.log({ err, exifData })
    const exif = exifData.exif
    console.log({ exif })
  }
)
```

========================================================

### Blog Post Ideas

- Gatsby + Docker + CircleCI pipeline

- Homemaker
  - Add CLI (?)

### 20180217

- Replace `react-medium-image-zoom` component. It has a number of problems:
  - The 'zoom' effect is actually a CSS scale transform, so the srcset isn't
    actually serving the proper resolution image.
  - It's got serious UI stutter issues on mobile safari.
- Fix R/L padding for blog template
- Center avatar on home page

* https://www.npmjs.com/package/scrollprogress

==================================================

- Idea: if `gatsby-source-s3-images`, when used with "real" S3, was just
  passed a collection of references to objects, and do all the heavy
  lifting remotely... ah shit, but we'd still need the images locally
  for gatsby-image, and pulling down dozens of 10MB+ images is the main
  bottleneck anyway.
