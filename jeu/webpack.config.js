const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MATERIALIZE_INCLUDE = path.resolve(__dirname, "./node_modules/materialize-css");

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  mode: 'development',
  optimization: {
    noEmitOnErrors: true
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      inject: 'body',
      template: 'src/assets/templates/index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, 
        include: [MATERIALIZE_INCLUDE],
        use: {
              loader: "css-loader",
              options: { modules: true }
        }
      },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};