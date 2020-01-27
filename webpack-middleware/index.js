/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const paths = require('./paths');

const app = express();
const webpackConfig = require('../webpack.config.js');

const compiler = webpack(webpackConfig);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(paths, webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));

// Serve the files on port 3000.
app.listen(webpackConfig.devServer.port, () => {
    console.log('Example app listening on: http://localhost:3000/');
});
