const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = ({ development }) => ({
  entry: './src/decartes.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'decartes.js',
    library: {
      name: 'decartes',
      type: 'umd',
      export: 'default'
    },
    umdNamedDefine: true
  },
  devtool: 'inline-source-map',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  plugins: [new ESLintPlugin({ extensions: ['ts'] })],
})