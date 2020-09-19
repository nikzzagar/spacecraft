const path = require('path');

module.exports = {
  entry: './src/index.js',
  output : {
    filename: 'c-bundle.js',
    path: path.resolve(__dirname, '../public')  
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } } ]
          ]
        }
      }
    ]
  }
}
