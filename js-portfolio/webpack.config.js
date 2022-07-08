const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.relative(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    }

}