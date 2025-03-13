import { Button, View } from '@nativescript/core'
import { Component, createApp, NSVElement, NSVNode } from 'nativescript-vue'
import { installPlugins } from '~/bootstrap'

interface MountOptions {
  props?: Record<string, unknown>
}

export function mount(component: Component, options: MountOptions = {}) {
  const app = createApp(component, options.props)

  installPlugins(app)

  return app.mount() as VM
}

const parseSelector = (selector: string): Array<string> => {
  const matches = selector.match(/^(\w+)(?:\[(.+)\]$)*/i)
  if (!matches) throw new Error(`Invalid selector ${selector}.`)
  const [_q, tag, testID] = matches

  return [tag.toLowerCase(), testID]
}

const walk = ([node, ...nodes]: NSVNode[], cb: (node: NSVElement) => any): any => {
  if (!node) return
  let result
  if (node instanceof NSVElement && !!(result = cb(node))) return result

  return walk(node.childNodes.concat(nodes), cb)
}

const matched = (node: NSVElement, [tagName, testID]: Array<string|undefined>) => {
  return testID === undefined
    ? node.tagName == tagName
    : node.tagName === tagName && node.getAttribute('testID') === testID
}

// findById(vm, 'testID')
export function findById<T = View>(vm: VM, id: string): Element<T> {
  return walk([vm.$el], node => node.getAttribute('testID') == id && node)
}

// findBy(vm, 'Button')
// findBy(vm, 'Button[testID]')
export function findBy<T = View>(vm: VM, selector: string) {
  const query = parseSelector(selector)

  return walk([vm.$el], node => matched(node, query) && node)
}

// findAllBy(vm, 'Button')
// findAllBy(vm, 'Button[testID]')
export function findAllBy<T = View>(vm: VM, selector: string) {
  const elements: NSVElement[] = []
  const query = parseSelector(selector)

  walk([vm.$el], node => {
    matched(node, query) && elements.push(node)
  })

  return elements
}

export const fireEvent = {
  async tap(element: Element) {
    let event: string | undefined

    if (element.nativeView instanceof Button) event = Button.tapEvent

    !!event && element.nativeView.notify({ eventName: event })
  }
}

