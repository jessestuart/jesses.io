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
  Java,
  Javascript,
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

const infra = [
  Docker,
  AWS,
  Nginx,
  Packer,
  Ansible,
  Vagrant,
]

const backend = [
  Java,
  Nodejs,
  Go,
  Python,
]

const frontend = [
  React,
  Webpack,
  AngularJS,
  Typescript,
]

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
