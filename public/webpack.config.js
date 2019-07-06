const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs')
const CopyWebpackPlugin= require('copy-webpack-plugin');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    })
  })
}
const htmlPlugins = generateHtmlPlugins('./src/html/views')

module.exports = {
  entry: [
    //js
    './src/js/firebase.js',
    './src/js/header.js',
    './src/js/news.js',
    './src/js/slider.js',
    
    //css
    './src/css/body.css',
    './src/css/gallery.css',
    './src/css/header.css',
    './src/css/main.css',
    './src/css/menu.css',
    './src/css/new.css',
    './src/css/news.css',
    './src/css/reset.css',
    './src/css/slider.css',
    './src/css/style.css'
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  plugins: [
    new ExtractTextPlugin( {
      filename: './css/styles.css',
    }),
    new CopyWebpackPlugin([{
      from: './src/fonts',
      to: './fonts'
    },
    {
      from: './src/favicon',
      to: './'
    },
    {
      from: './src/img',
      to: './img'
    }
  ]),
  
  ].concat(htmlPlugins),
  module: {
    rules: [
      { 
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/',
            }
          }
        ]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
              //TODO throw error
              //minimize: true,
            },
        }),
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/html/includes'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      },
    ]
  },
};