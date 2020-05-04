module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        asset: './asset',
        components: './src/components',
        containers: './src/containers',
        stylesheets: './src/stylesheets',
        utils: './src/utils',
      },
    }],
  ],
};
