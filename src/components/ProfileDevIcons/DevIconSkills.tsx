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
  Python,
  React,
  Redux,
  Terraform,
  Elasticsearch,
  Prometheus,
} = DevIcons

const infra = [
  Kubernetes,
  Docker,
  Prometheus,
  Elasticsearch,
  Terraform,
  Ansible,
]

const backend = [Nodejs, Go, Java, Grails, Python, Clojure]

const frontend = [React, Redux, GatsbyJS, GraphQL, Jest, AngularJS]

const DevIconSkills = [
  { icons: infra, label: 'infra' },
  { icons: backend, label: 'backend' },
  { icons: frontend, label: 'frontend' },
]

export default DevIconSkills
