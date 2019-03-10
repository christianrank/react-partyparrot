const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const devMode = (process.env.NODE_ENV === 'development')

module.exports = {
  entry: [
    './src/example/index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {},
        },
      },
    ],
  },
  output: {
    libraryTarget: devMode ? 'var' : 'commonjs2',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/example/index.html',
    }),
  ],
  externals: [
    devMode ? '' : nodeExternals(),
  ],
}
