const path = require('path');
const nodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_LESS_REGEXP = /\.global\.css$/;

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
      test: /\.[tj]sx?$/,
      use: ['ts-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              onlyLocals: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    verrideBrowserslist: ['> 0.0001%', 'not dead']
                  }),
                  require('cssnano')({ preset: 'default' }),
                  require('postcss-flexbugs-fixes')
                ],
              },
            }
          },
          'less-loader',
        ],
        exclude: GLOBAL_LESS_REGEXP
      },
      {
        test: GLOBAL_LESS_REGEXP,
        use: [
          'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    verrideBrowserslist: ['> 0.0001%', 'not dead']
                  }),
                  require('cssnano')({ preset: 'default' }),
                  require('postcss-flexbugs-fixes')
                ],
              },
            }
          },
          'less-loader',
        ]
      }
    ]
  },
  optimization: {
    minimize: false,
  }
};