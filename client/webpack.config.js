const path = require('path')

module.exports = {
  mode: 'development',

  entry: './components/App.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]

        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
        // include: path.resolve(__dirname,  'client/node_modules/antd'),
      }
    ]
  },

  devServer: {
    static: path.join(__dirname, 'client/public'),

    compress: true,

    port: 8080,

    hot: true,

    historyApiFallback: true,
    proxy: [
      {
        context: ['/supportTicket'],
        target: 'http://localhost:3000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'eval'

}