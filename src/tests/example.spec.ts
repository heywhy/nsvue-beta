import { Button, Device, EventData, Label } from '@nativescript/core'
import Docker from '~/components/Docker.vue'
import Home from '~/components/Home.vue'
import { findAllBy, findBy, findById, fireEvent, mount } from './helper'

// A sample Jasmine test
describe('A suite', () => {
  beforeEach(() => {
    jasmine.clock().install()
  })

  afterEach(() => {
    jasmine.clock().uninstall()
  })

  it('contains spec with an expectation', () => {
    expect(true).toBe(true)
  })

  it('checks if iOS device sdk > 14', () => {
    expect(parseFloat(Device.sdkVersion)).toBeGreaterThan(14)
  })

  it('should mount Home component', async () => {
    const vm = mount(Home)

    const labels = findAllBy<Label>(vm, 'Label')
    const btn = findById<Button>(vm, "actionBtn")
    const messageLabel = findById<Label>(vm, 'messageLabel')

    expect(messageLabel.text).toEqual('Blank {N}-Vue app: 0')

    expect(btn).toBeDefined()
    expect(btn.text?.trim()).toEqual('View Details')

    expect(labels).toHaveSize(5)
    expect(labels[1]).toEqual(messageLabel)

    jasmine.clock().tick(10000)

    // wait to allow vue apply updates
    await vm.$nextTick()

    expect(messageLabel.text).toEqual('Blank {N}-Vue app: 1')
  })

  it('should mount Docker component', async () => {
    const msg = 'Hello World'
    const onClick = jasmine.createSpy().and.returnValue(1)

    const vm = mount(Docker, {
      props: { msg, onClick }
    })

    const label = findBy<Label>(vm, "Label[messageLabel]")

    expect(label.text).toEqual(msg)

    const btn = findById<Button>(vm, "helloBtn")
    const eventData: EventData = {
      eventName: Button.tapEvent,
      object: btn.nativeView
    }

    await fireEvent.tap(btn)

    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledWith(eventData)
  })
})
