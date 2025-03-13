/// <reference path="../node_modules/webpack/module.d.ts" />

import { runTestApp } from '@nativescript/unit-test-runner'
// import other polyfills here

runTestApp({
	runTests: () => {
    // @ts-ignore
		const tests = require.context('./', true, /\.spec\.ts$/)

		tests.keys().map(tests)
	},
})
