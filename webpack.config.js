const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('webpack');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['dripsy', '@dripsy', 'moti', '@motify'],
      },
    },
    argv
  );

  // https://docs.swmansion.com/react-native-reanimated/docs/2.3.0-alpha.2/web-support/#webpack-support
  config.entry.app = ['babel-polyfill', ...config.entry.app];
  config.plugins = [...config.plugins, new webpack.DefinePlugin({ process: { env: {} } })];

  return config;
};
