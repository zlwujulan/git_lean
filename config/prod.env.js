'use strict';
const argv = require('yargs').argv;
const APP = require('../app.json');
const envType = argv.envType ? argv.envType : APP.envType;
const target = APP.env[envType];
const api = argv.api ? argv.api : target['host'];

module.exports = {
    NODE_ENV: '"production"',
    BASE_API: `"${api}"`
};
