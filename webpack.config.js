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
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]'
            }
          }
    ]
  }]
 }
}