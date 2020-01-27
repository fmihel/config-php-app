// eslint-disable-next-line import/no-extraneous-dependencies
const { routerPaths } = require('fmihel-server-lib');

const paths = routerPaths([
    '/page2',
    '/page1',
    '/',
]);

module.exports = paths;
