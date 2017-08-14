var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

function generatePage (pageName) {
    return new HtmlWebpackPlugin({
        template: __dirname + `/app/templates/${pageName.replace('-', '_')}_index.hbs`,
        filename: `${pageName === 'home' ? 'index' : pageName}.html`,
        inject: 'body'
    });
}

var pages = ['corporate-donation', 'donation', 'campaigne', 'home', 'about', 'donors-wall'].map(generatePage);
var ExtractTextPluginConfig = new ExtractTextPlugin('style.[contenthash].css');

var entrypoint = process.env.npm_lifecycle_event === 'dev' ?
  'webpack-dev-server/client?http://localhost:8080' :
  './app/index.js';

module.exports = {
  entry: ['whatwg-fetch', entrypoint],
  output: {
      path: __dirname + '/dist',
      filename: '[name].[chunkhash].js',
      publicPath: '/carmen/',
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              include: __dirname + '/app',
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'stage-0']
              }
          },
          {
              test: /\.scss$/,
              include: __dirname + '/app',
              loader: ExtractTextPlugin.extract('css-loader!sass-loader')
          },
          {
              test: /.png|gif|jpg$/,
              loader: 'url-loader?limit=8192',
          },
          {
              test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)$/,
              loader: 'url-loader?limit=8192',
          },
          {
              test: /\.svg$/,
              loader: 'file-loader' 
          },
          {
              test: /\.hbs$/,
              loader: 'handlebars-loader',
              query: {
                  debug: true,
                  partialDirs: [
                      path.join(__dirname, 'app/pages/'),
                      path.join(__dirname, 'app/templates/')
                  ]
              }
          },
    ]
  },
  plugins: [...pages, ExtractTextPluginConfig]
}
