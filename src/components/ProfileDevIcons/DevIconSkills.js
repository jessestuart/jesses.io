import DevIcons from '../Icons/DevIcons'

/* eslint-disable no-unused-vars */
const {
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
  GraphQL,
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
  PythonNew,
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
} = DevIcons
/* eslint-enable no-unused-vars */

const infra = [Docker, Kubernetes, Ansible, Vagrant, Packer, Terraform]

const backend = [Java, Grails, Go, Nodejs, Clojure, PythonNew]

const frontend = [React, GatsbyJS, Jest, Redux, AngularJS, GraphQL]

const DevIconSkills = [
  { icons: infra, label: 'infra' },
  { icons: backend, label: 'backend' },
  { icons: frontend, label: 'frontend' },
]

export default DevIconSkills
