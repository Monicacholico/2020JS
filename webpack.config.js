const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/modules.js',
    output: {
        filename: 'modules.js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool:'cheap-module-eval-source-map',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    // devServer: {
    //     contentBase: './
    // }
    // plugins: [
    //     new CleanPlugin.CleanWebpackPlugin()
    // ]
};