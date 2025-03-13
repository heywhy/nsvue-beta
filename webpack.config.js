const webpack = require("@nativescript/webpack")

/**
 * @param {import("@nativescript/webpack").IWebpackEnv} env
 */
module.exports = (env) => {
  webpack.init(env)

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  return webpack.resolveConfig()
};
