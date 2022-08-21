const path = require('path');

module.exports = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '~': path.resolve(__dirname, './src/'),
      '@': path.resolve(__dirname, './src/components'),
    },
  };

  return config;
};
