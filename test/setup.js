const chalk = require('chalk')
const puppeteer = require('puppeteer')
const fs = require('fs')
const mkdirp = require('mkdirp')
const os = require('os')
const path = require('path')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = function() {
  return new Promise((resolve, reject) => {
    console.log(chalk.green('Setup Puppeteer Environment.'))
    puppeteer.launch({ headless: true }).then(browser => {
      global.__BROWSER__ = browser
      mkdirp.sync(DIR)
      fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
      resolve()
    })
  })
}
