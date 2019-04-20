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

const infra = [Docker, Kubernetes, Ansible, Vagrant, Packer, Terraform]

const backend = [Java, Grails, Go, Nodejs, Python, Clojure]

const frontend = [React, Redux, GraphQL, Jest, GatsbyJS, AngularJS]

const DevIconSkills = [
  { icons: infra, label: 'infra' },
  { icons: backend, label: 'backend' },
  { icons: frontend, label: 'frontend' },
]

export default DevIconSkills
