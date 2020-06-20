const path = require('path');

module.exports = {
    entry: './src/modules.js',
    output: {
        filename: 'modules.js',
        path: path.resolve(__dirname, 'assets', 'scripts')
    }
};