var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

var homeHtml = new HtmlWebpackPlugin({
  template: __dirname + '/app/templates/home_index.hbs',
  filename: 'index.html',
  inject: 'body'
});

var campaigneHtml = new HtmlWebpackPlugin({
  template: __dirname + '/app/templates/campaigne_index.hbs',
  filename: 'campaigne.html',
  inject: 'body'
});

var donationHtml = new HtmlWebpackPlugin({
  template: __dirname + '/app/templates/donation_index.hbs',
  filename: 'donation.html',
  inject: 'body'
});

var corporateDonationHtml = new HtmlWebpackPlugin({
  template: __dirname + '/app/templates/corporate_donation_index.hbs',
  filename: 'corporate-donation.html',
  inject: 'body'
});

var ExtractTextPluginConfig = new ExtractTextPlugin('style.css');

var entrypoint = process.env.npm_lifecycle_event === 'dev' ?
  'webpack-dev-server/client?http://localhost:8080' :
  './app/index.js';

module.exports = {
  entry: entrypoint,
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js'
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
              loader: ExtractTextPlugin.extract('css!sass')
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
  plugins: [homeHtml, campaigneHtml, donationHtml, corporateDonationHtml, ExtractTextPluginConfig]
}
