// eslint-disable-next-line @typescript-eslint/no-var-requires
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['dripsy', '@dripsy', 'moti', '@motify'],
      },
    },
    argv
  );

  return config;
};
