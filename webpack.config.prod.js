// const path = require('path');
// // const CleanPlugin = require('clean-webpack-plugin');

// module.exports = {
//     mode: 'production',
//     entry: './src/modules.js',
//     output: {
//         // filename: '[contenthash].js',// when you're going to deploy
//         filename: 'modules.js',
//         path: path.resolve(__dirname, 'assets', 'scripts'),
//         publicPath: 'assets/scripts/'
//     },
//     devtool:'cheap-source-map'
//     // devServer: {
//     //     contentBase: './
//     // },
// module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       }
//     ]
//   },
//     // plugins: [
//     //     new CleanPlugin.CleanWebpackPlugin()
//     // ]
// };