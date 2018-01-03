import {
  AngularJS,
  Ansible,
  Atom,
  AWS,
  Babel,
  D3js,
  Debian,
  Docker,
  GatsbyJS,
  Git,
  Go,
  Gradle,
  Grails,
  Java,
  Javascript,
  Jest,
  Kubernetes,
  Linux,
  MongoDB,
  Mysql,
  Netlify,
  Nginx,
  Nodejs,
  Packer,
  Python,
  React,
  Redhat,
  Redis,
  Sass,
  Terraform,
  Typescript,
  Ubuntu,
  Vagrant,
  Vim,
  Webpack,
} from '../Icons'

const infra = [Docker, Kubernetes, Ansible, Vagrant, Packer, Terraform]

const backend = [Java, Grails, Go, Nodejs, Gradle, Python]

const frontend = [React, GatsbyJS, AngularJS, Netlify, Jest, Sass]

const DevIconSkills = [
  {
    icons: infra,
    label: 'infra',
  },
  {
    icons: backend,
    label: 'backend',
  },
  {
    icons: frontend,
    label: 'frontend',
  },
]

export default DevIconSkills
