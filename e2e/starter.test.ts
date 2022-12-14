describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome hello world'))).toBeVisible()
  })

  it('should navigate to new screen when button is tapped', async () => {
    await element(by.id('actionBtn')).tap()
    await expect(element(by.text('Item 1'))).toBeVisible()
  })

  it('should go back after tapping the back button', async () => {
    await element(by.id("backBtn")).tap()
    await expect(element(by.text('Welcome hello world'))).toBeVisible()
  })
})
