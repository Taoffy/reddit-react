const path = require('path');
const autoprefixer = require('autoprefixer');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';
const MODULE_LESS_REGEXP = /\.module\.less$/;
const GLOBAL_LESS_REGEXP = /\.global\.less$/;

function setupDevtool() {
  if(IS_DEV) return 'eval';
  if(IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/client/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
      test: /\.[tj]sx?$/,
      use: ['ts-loader']
      },
      {
        test: MODULE_LESS_REGEXP,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              }
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
              sourceMap: IS_DEV   
            }
          },
          'less-loader',
        ],
        exclude: GLOBAL_LESS_REGEXP,
      },
      {
        test: GLOBAL_LESS_REGEXP,
        use: [
          'style-loader', 
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
              sourceMap: IS_DEV
            }
          }, 
          'less-loader'
        ]
      }
    ]
  },
  devtool: setupDevtool()
};