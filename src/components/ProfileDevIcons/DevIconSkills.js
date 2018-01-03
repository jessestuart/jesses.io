import {
  AngularJS,
  Ansible,
  Atom,
  AWS,
  Babel,
  D3js,
  Debian,
  Docker,
  Git,
  Go,
  Gradle,
  Grails,
  Java,
  Javascript,
  Kubernetes,
  Linux,
  MongoDB,
  Mysql,
  Nginx,
  Nodejs,
  Packer,
  Python,
  React,
  Redhat,
  Redis,
  Sass,
  Sketch,
  Terraform,
  Typescript,
  Ubuntu,
  Vagrant,
  Vim,
  Webpack,
} from '../Icons'

const infra = [Docker, Kubernetes, Ansible, Vagrant, Packer, Terraform]

const backend = [Java, Grails, Go, Nodejs, Gradle, Python]

const frontend = [React, Webpack, AngularJS, Sass]

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
