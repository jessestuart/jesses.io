/* eslint-disable no-unused-vars */
import {
  AWS,
  AngularJS,
  Ansible,
  Atom,
  Babel,
  Clojure,
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
  Mysql,
  Netlify,
  Nginx,
  Nodejs,
  Packer,
  Python,
  React,
  Redhat,
  Redis,
  Redux,
  Sass,
  Terraform,
  Typescript,
  Ubuntu,
  Vagrant,
  Vim,
  Webpack,
} from '../Icons'
/* eslint-enable no-unused-vars */

const infra = [Docker, Kubernetes, Ansible, Vagrant, Packer, Terraform]

const backend = [Java, Grails, Go, Nodejs, Clojure, Python]

const frontend = [React, GatsbyJS, Jest, Redux, AngularJS, Netlify]

const DevIconSkills = [
  { icons: infra, label: 'infra' },
  { icons: backend, label: 'backend' },
  { icons: frontend, label: 'frontend' },
]

export default DevIconSkills
