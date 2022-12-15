import { View } from '@nativescript/core'
import { ComponentPublicInstance, NSVElement } from 'nativescript-vue'

declare global {
  interface Element<V = View> extends NSVElement {
    get nativeView(): V
  }

  type VM = Omit<ComponentPublicInstance, '$el'> & { $el: Element }
}
