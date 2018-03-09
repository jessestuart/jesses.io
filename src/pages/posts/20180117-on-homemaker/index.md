---
title: On Making Homemaker
date: 2018-01-16T10:28:28-05:00
draft: true
---

### Background: A tale of too many VMs

I spend a lot of time spinning up & working in virtualized environments.

I've also grown quite scrupulous over the years in the [configuration of my
environments][dotfiles-url]. These concerns, you can imagine, are often at odds
with one another.

EC2 instances, Docker containers, Vagrant boxes, Digital Ocean Droplets, Linode
nodes, Vultr, Scaleway, etc. -- I grew tired of `ssh`-ing or `docker exec`-ing
in to some variation of the same unfriendly prompt:

```
Last login: Mon Jan 01 00:00:00 2018
[thisis@not-home ~]#
```

So, I decided to script away the schlep, and automate the creation of
environments in which I -- or any developer with a healthy fondness for her
dotfiles -- could be immediately productive.

[dotfiles-url]: https://github.com/jessestuart/dotfiles
