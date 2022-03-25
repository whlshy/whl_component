const pkg = require('./package.json');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/*/*.jsx',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper')
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: ['babel-loader']
        }, {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }, {
          test: /\.styl?/,
          use: ["style-loader", "css-loader", "stylus-loader"]
        }, {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: path.join(__dirname, 'src/style'), to: path.join(__dirname, 'dist/style') },
        ]
      }),
    ],
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://use.fontawesome.com/releases/v5.4.1/css/all.css'
        },
      ]
    }
  },
  require: [
    'babel-polyfill'
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');

    return `import { ${name} } from '${pkg.name}';`;
  },
};