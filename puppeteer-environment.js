const chalk = require('chalk')
const fs = require('fs')
const NodeEnvironment = require('jest-environment-node')
const os = require('os')
const path = require('path')
const puppeteer = require('puppeteer')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    console.log(chalk.green('Initializing Puppeteer Test Environment.'))
    await super.setup()
    const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8')
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found')
    }
    this.global.__BROWSER__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    })
  }

  async teardown() {
    await super.teardown()
  }

  runScript(script) {
    return super.runScript(script)
  }
}

module.exports = PuppeteerEnvironment
