/// <reference path="../node_modules/@types/jest/index.d.ts" />
/// <reference path="../node_modules/detox/index.d.ts" />

declare namespace jest {
  interface Expect extends Detox.ExpectFacade {
    (element: Detox.NativeElement): Detox.Expect
    (webElement: Detox.WebElement): Detox.WebExpect
  }
}
