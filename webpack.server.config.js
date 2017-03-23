const { resolve } = require('path');
const { readdirSync } = require('fs');

const nodeModules = {};

readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod);

module.exports = {
  context: resolve(__dirname, 'server/'),
  target: 'node',
  node: {
    fs: 'empty'
  },
  entry: './server.js',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'server.bundle.js'
  },
  externals: nodeModules
};
