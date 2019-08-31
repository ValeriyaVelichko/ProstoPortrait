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
    './src/js/news.js',
    './src/js/header.js',
    './src/js/slider.js',
    './src/js/form.js',
    './src/js/admin.js',
    './src/js/toTheTop.js',
    './src/js/jquery.fancybox.pack.js',
    './src/js/jquery.fancybox.js',
    './src/js/jquery.fancybox.cjs.js',
    
    //scss 
    './src/css/jquery.fancybox.css',
    './src/css/auth.scss',
    './src/css/about.scss',
    './src/css/header.scss',
    './src/css/body.scss',
    './src/css/main.scss',
    './src/css/gallery.scss',
    './src/css/footer.scss',
    './src/css/news.scss',
    './src/css/form.scss',
    './src/css/slider.scss',
    './src/css/topButton.scss'
    
 
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  plugins: [
    new ExtractTextPlugin( {
      filename: './css/style.bundle.css',
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
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/css'),
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }) 
      }, 

    
        
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            },
        })
      },

      {    
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
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
      }
    ]
  }
  
};