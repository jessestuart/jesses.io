const Promise = require('bluebird')

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
const onCreatePage = ({ page, boundActionCreators }) =>
  new Promise((resolve, reject) => {
    if (page.path.match(/^\/blog/)) {
      page.layout = 'blog-layout'
      boundActionCreators.createPage(page)
    }
    if (page.path === '/') {
      page.layout = 'home-layout'
      boundActionCreators.createPage(page)
    }
    resolve()
  })

module.exports = onCreatePage
