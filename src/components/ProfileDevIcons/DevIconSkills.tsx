import { DevIcons } from '../Icons/DevIcons'

const {
  AngularJS,
  Ansible,
  Clojure,
  Docker,
  GatsbyJS,
  Go,
  Grails,
  GraphQL,
  Java,
  Jest,
  Kubernetes,
  Nodejs,
  Packer,
  Python,
  React,
  Redux,
  Terraform,
  Vagrant,
} = DevIcons

const infra = [Kubernetes, Docker, Terraform, Ansible, Packer, Vagrant]

const backend = [Nodejs, Go, Java, Grails, Python, Clojure]

const frontend = [React, Redux, GraphQL, Jest, GatsbyJS, AngularJS]

const DevIconSkills = [
  { icons: infra, label: 'infra' },
  { icons: backend, label: 'backend' },
  { icons: frontend, label: 'frontend' },
]

export default DevIconSkills
