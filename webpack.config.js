var path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
  basePath = __dirname;

const DESTINATION_PATH = 'docs';

module.exports = {
  resolve: {
    extensions: ['.js', '.css', '.scss', '.jsx']
  },
  // JavaScript entry point
  entry: {
    app: './App',
    vendor: ['react', 'react-dom'],    
  },
  // JavaScrip bundle file
  output: {
    path: path.join(basePath, DESTINATION_PATH),
    filename: '[chunkhash][name].js'
  },
  // Setup server
  devServer: {
    inline: true,
    port: 4041
  },
  module: {
    // JS, JSX and SASS loaders
    rules: [
      {
        parser: { amd: false },
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },     
      {
        test: /\.(woff2?|svg|png|jpe?g|gif)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: './index.html', //Name of template in ./src
      hash: true
    })
  ]
};