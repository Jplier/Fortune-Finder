const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};