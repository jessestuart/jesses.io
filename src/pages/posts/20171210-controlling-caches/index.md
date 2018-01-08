---
title: Controlling Caches
date: 2017-12-10T12:01:29-06:00
tags:
  - caching
  - browsers
  - aws
  - s3
  - cloudfront
draft: true
---

* DeleteRemoved: false
* Cache-control: max-age
* Invalidating
* Browsers kept old versions, which is totally fine. But the cloudfront caches had been killed and the files were deleted from s3. So requests from old versions died
* http://someguyontheinter.net/blog/serving-index-pages-from-a-non-root-location-via-cloudfront/
