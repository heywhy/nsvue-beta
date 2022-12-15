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

const enum TrasverseAction {
  KEEP,
  KEEP_HALT,
}

const trasverse = <T extends NSVNode>(el: NSVNode, cb: (node: NSVNode) => TrasverseAction | undefined): T[] => {
  const walk = ([node, ...nodes]: Array<NSVNode | undefined>, result: NSVNode[]): any => {
    if (!node) return result
    const action = cb(node)
    if (action == TrasverseAction.KEEP) result.push(node)
    if (action == TrasverseAction.KEEP_HALT) {
      result.push(node)
      return result
    }

    return walk(nodes.concat(node.childNodes), result)
  }

  return walk([el], [])
}

// findById(vm, 'testID')
export function findById<T = View>(vm: VM, id: string): Element<T> {
  const nodes = trasverse<Element<T>>(vm.$el, node => {
    if (node instanceof NSVElement && node.getAttribute('testID') == id) {
      return TrasverseAction.KEEP_HALT
    }
  })

  return nodes[0]
}

const parseSelector = (selector: string): Array<string> => {
  const matches = selector.match(/^(\w+)(?:\[(.+)\]$)*/i)
  if (!matches) throw new Error(`Invalid selector ${selector}.`)
  const [_q, tag, testID] = matches

  return [tag.toLowerCase(), testID]
}

// findBy(vm, 'Button')
// findBy(vm, 'Button[testID]')
export function findBy<T = View>(vm: VM, selector: string) {
  const [node] = findAllBy<T>(vm, selector)

  return node
}

// findAllBy(vm, 'Button')
// findAllBy(vm, 'Button[testID]')
export function findAllBy<T = View>(vm: VM, selector: string) {
  const [tag, testID] = parseSelector(selector)

  const nodes = trasverse<Element<T>>(vm.$el, node => {
    if (!(node instanceof NSVElement)) return
    const tagName = node.tagName.toLowerCase()
    if (tagName == tag) return TrasverseAction.KEEP
  })

  return nodes.filter(node => !!testID ? node.getAttribute('testID') == testID : true)
}

export const fireEvent = {
  async tap(element: Element) {
    let event: string | undefined

    if (element.nativeView instanceof Button) event = Button.tapEvent

    !!event && element.nativeView.notify({ eventName: event })
  }
}

