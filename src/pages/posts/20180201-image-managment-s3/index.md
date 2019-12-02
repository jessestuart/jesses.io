---
title: Serverless photo organization with S3 and Lambda
date: 2018-02-01
draft: false
---

I like to keep things organized. Let's take my photography catalogue, for
example -- I take my gear pretty much wherever I go, and that's resulted in a
library of (as I write this) 54,848 RAW photographs and counting; back-of-napkin
math, that comes out to roughly ~35 shots per day over the past ~4 years.

I also expect my tooling to accomplish what I want, without having to [make me
think][make-me-think] any more than necessary. When uploading photos to this
site, any time spent uploading, resizing / optimizing, rebuilding the site, etc.
is time I could have spent out shooting, or in post-processing, or whatever.

So naturally, as an engineer, I decided to scratch my own itch — and thus
[serverless-image-organizer][gh-link] was born. This was an afternoon project
that executes a very simple chain of events: it listens for uploads to a source
S3 bucket, then sorts all incoming photos into a destination bucket, grouped
into "folders" by date (in ISO 8601 date format, e.g., `2018-02-01/foobar.jpg`),
and finally pings [Netlify][netlify] to trigger a rebuild of the site with the
new images included.

In order for that simple task to be executed "serverlessly", however, requires
the integration of a non-trivial network of components. There are, of course,
plenty of services to abstract much of the complexity out of this (for a price),
but I'm more the type to roll up my sleeves and get to know how things work
under the hood. IAM Users, Roles, custom Policies, and more? Sounds fun! Let's
dig in.

### Deploying functions & infrastructure

This project uses [Apex][apex] to manage deployments of Lambda functions,
providing a thin but convenient layer of abstraction over the
"refactor-zip-upload" workflow previously required. Deploying a new version of
the Lambda is as simple as:

```shell
λ apex deploy image-upload-handler
   • config unchanged          env= function=image-upload-handler
   • updating function         env= function=image-upload-handler
   • updated alias current     env= function=image-upload-handler version=12
   • function updated          env= function=image-upload-handler name=serverless-image-organizer_image-upload-handler version=12
```

However, the Lambda function isn't of very much use on its own -- several other
AWS infrastructure components are required to wire everything together (IAM, S3,
CloudWatch, etc). And for declaring and maintaining these resources, nothing
beats Hashicorp's [Terraform][terraform] -- it has its shortcomings, but it's
well worth checking out if you're interested in the declarative
infrastructure-as-code scene. It's not too difficult to pick up, and I've found
it much easier to manage than configuring AWS through the web UI.

Luckily, Apex integrates well with Terraform -- the `apex infra` command
essentially proxies all commands directly while exposing a few Apex-provided
variables, like the ARN of any deployed functions.

TL;DR, here's what goes down to put this all together:

1. Create an IAM role with a few required permissions: e.g., S3 R/W access, the
   ability to invoke Lambda functions, and (optional but recommended) write
   access to CloudWatch logs (because you know, [telemetry][telemetry]).
1. Attach a custom IAM policy granting access for that role to respond to S3
   events.
1. Create a Lambda function, and hook it up to the aforementioned IAM role.
1. When the Lambda is triggered, a simple Go function is invoked that queries
   S3, downloads the JPEG asset, parses out the EXIF data (including the date
   created), and executes a final `PutObject` on the destination bucket with the
   updated data.

### What's next?

- I started working on a system to persist EXIF metadata properties in a
  lightweight DB like DynamoDB -- the motivation here would be limiting the
  overhead of EXIF processing to a one-time serverless function, as opposed to
  requiring that computation to be performed client-side on every page load for
  e.g., a photo gallery.

- The system is currently tightly coupled to AWS -- it probably wouldn't be too
  difficult to implement support for any S3-compliant Object Storage provider
  (e.g., [Minio][minio], [DigitalOcean Spaces][do-spaces], [Openstack
  Swift][os-swift]).

### FAQ

- **Q**: Can I use the same bucket for the source and destination?

- **A**: Not without introducing more opinionated logic / filtering to the
  Lambda function -- I wasn't able to determine a trivial way to distinguish
  between images uploaded by a user versus images (re)-uploaded by the Lambda
  (both are treated as a `PutObject` request), resulting in... yeah, an infinite
  loop.

### Takeaways

The tooling around this stack may still be a little rough around the edges --
after all, native Go support was only announced in January of 2018 -- but thanks
to the efforts of organizations like Hashicorp, Apex, and the rest of the OSS
community, it's now possible to rapidly iterate on an idea from prototype to
production-ready in a matter of just a few hours.

And of course, I'd be remiss not to mention the other benefit of working in this
stack: it costs almost nothing to operate, with AWS's free tier extending up to
1 million invocations/month at time of writing.

[apex]: https://github.com/apex/apex
[do-spaces]: https://www.digitalocean.com/products/spaces/
[gh-link]: https://github.com/jessestuart/serverless-image-organizer
[make-me-think]: https://en.wikipedia.org/wiki/Don%27t_Make_Me_Think
[minio]: https://minio.io
[netlify]: https://netlify.com
[os-swift]: https://www.openstack.org/software/releases/ocata/components/swift
[telemetry]: https://www.safaribooksonline.com/library/view/the-devops-handbook/9781457191381/DOHB-ch_14.xhtml
[terraform]: https://github.com/hashicorp/terraform
