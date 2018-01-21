const Promise = require('bluebird')

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
const onCreatePage = ({ page, boundActionCreators }) =>
  new Promise((resolve, reject) => {
    if (page.path.match(/^\/posts/)) {
      page.layout = 'blog-layout'
      boundActionCreators.createPage(page)
    }
    resolve()
  })

module.exports = onCreatePage
