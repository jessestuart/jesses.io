const timeout = 10000

describe('/ (Home page)', () => {
  let page
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('localhost:8000')
  }, timeout)

  afterAll(async () => global.__BROWSER__.close())

  it('Should load without error.', async () => {
    let text = await page.evaluate(() => document.body.textContent)
    expect(text).toBeDefined()
  })

  it('Should take a screenshot.', async () => {
    const screenshot = await page.screenshot({
      path: '__snapshots__/home-page.png',
    })
    expect(screenshot)
  })
})
