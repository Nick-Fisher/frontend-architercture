const htmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js', // This is the file that the container will look for when searching for modules
      exposes: {
        // This is the list of modules that the remote app can search for
        './ProductsIndex': './src/bootstrap',
      },
      shared: ['faker'], // This is the list of modules that the remote app will share with the container
    }),
    new htmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
