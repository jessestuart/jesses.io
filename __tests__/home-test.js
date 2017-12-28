const timeout = 10000

describe('/ (Home page)', () => {
  let page
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('localhost:8000')
  }, timeout)

  it('Should load without error.', async () => {
    let text = await page.evaluate(() => document.body.textContent)
    expect(text).toBeDefined()
  })
})
