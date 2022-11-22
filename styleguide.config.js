const pkg = require('./package.json');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/*/*.jsx',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper')
  },
  logger: {
    // One of: info, debug, warn
    // Suppress messages
    info:  message => console.warn(`NOOOOOO: ${message}`),
    // Override display function
    warn: message => console.warn(`NOOOOOO: ${message}`)
  },
  webpackConfig: {
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ["@babel/plugin-transform-runtime"]
            }
          },
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
  require: [],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');

    return `import { ${name} } from '${pkg.name}';`;
  },
};
