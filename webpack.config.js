var path = require('path');
var ExtractTextPlugin = require('sgmf-scripts')['extract-text-webpack-plugin'];
var sgmfScripts = require('sgmf-scripts');

module.exports = [{
  mode: 'none',
  name: 'js',
  entry: sgmfScripts.createJsPath(),
  output: {
    path: path.resolve('./cartridges/int_cybersource_sfra_ext/cartridge/static'),
    filename: '[name].js'
  }
}, {
  mode: 'none',
  name: 'scss',
  entry: sgmfScripts.createScssPath(),
  output: {
    path: path.resolve('./cartridges/int_cybersource_sfra_ext/cartridge/static'),
    filename: '[name].css'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            url: false
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')()
            ]
          }
        }, {
          loader: 'sass-loader'
        }]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css' })
  ]
}];
