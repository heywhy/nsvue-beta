/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    ios: {
      type: 'ios.app',
      binaryPath: 'platforms/ios/build/Debug-iphonesimulator/nsvuebeta.app',
      build: 'ns build ios --env.e2e'
    },
    android: {
      type: 'android.apk',
      binaryPath: 'platforms/android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'ns build android --detox --env.e2e'
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14'
      }
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_30_x86'
      }
    }
  },
  configurations: {
    ios: {
      device: "simulator",
      app: "ios"
    },
    android: {
      device: "emulator",
      app: "android"
    }
  }
};
