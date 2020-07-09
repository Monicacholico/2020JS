const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

// module.exports = {
//     mode: 'development',
//     entry: './src/modules.js',
//     output: {
//         filename: 'modules.js',
//         path: path.resolve(__dirname, 'assets', 'scripts'),
//         publicPath: 'assets/scripts/'
//     },
//     devtool:'cheap-module-eval-source-map',
//     module: {
//         rules: [
//           {
//             test: /\.m?js$/,
//             exclude: /(node_modules)/,
//             use: {
//               loader: 'babel-loader',
//               options: {
//                 presets: ['@babel/preset-env']
//               }
//             }
//           }
//         ]
//       }
//     // devServer: {
//     //     contentBase: './
//     // }
//     // plugins: [
//     //     new CleanPlugin.CleanWebpackPlugin()
//     // ]
// };

module.exports = {
  mode: 'development',
  entry: {
    'SharePlace': './src/SharePlace.js',
    'MyPlace': './src/MyPlace.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { useBuiltIns: 'usage', corejs: { version: 3 } }
              ]
            ]
          }
        }
      }
    ]
  },
  // plugins: [new CleanPlugin.CleanWebpackPlugin()]
};