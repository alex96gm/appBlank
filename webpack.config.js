var path = require('path');
module.exports = {
    // JavaScript entry point
    entry: './App.js',
    // JavaScrip bundle file
    output: {
      path: __dirname,
      filename: 'index.js'
    },
    // Setup server
    devServer: {
      inline: true,
      port: 4041
    },
    module: {
      // JS, JSX and SASS loaders
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        }
      ]
    }
  };