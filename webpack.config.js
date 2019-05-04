const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    return require(`./webpack.${env}.js`);
}