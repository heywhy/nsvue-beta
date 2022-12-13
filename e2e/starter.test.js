describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome'))).toBeVisible()
  })

  it('should navigate to new screen when button is tapped', async () => {
    const btn = element(by.id('actionBtn'))

    await btn.tap()
    await expect(element(by.text('Item 1'))).toBeVisible()
  })

  it('should go back after tapping the back button', async () => {
    const backBtn = element(by.id("backBtn"))

    await backBtn.tap()
    await expect(element(by.text('Welcome'))).toBeVisible()
  })
})
