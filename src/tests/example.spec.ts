import { Device } from '@nativescript/core'

// A sample Jasmine test
describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(true).toBe(true)
  })

  it('checks if iOS device sdk > 14', () => {
    expect(Device.sdkVersion).toBe('16.1')
  })
})
