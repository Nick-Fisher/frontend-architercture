const htmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development', 
  devServer: { 
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({ // This is the plugin that enables module federation 
      name: 'container', // Not required, but recommended for clarity
      remotes: { // List of apps that container can search for modules in (see below)
        products: 'products@http://localhost:8081/remoteEntry.js', // This is the name of the remote app, and the URL to its remoteEntry.js file
        cart: 'cart@http://localhost:8082/remoteEntry.js', 
      },
    }),
    new htmlWebpackPlugin({ // This is the plugin that generates the index.html file
      template: './public/index.html', // This is the template file that the plugin will use to generate the index.html file
    }),
  ],
};
