const path = require('path');

module.exports = {
  entry: '.home/liujiao/js/module3.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};