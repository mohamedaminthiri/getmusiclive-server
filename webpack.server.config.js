const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, 'server/'),
  target: 'node',
  entry: './server.js',
  output: {
    path: 'dist',
    filename: 'server.bundle.js'
  }
};
