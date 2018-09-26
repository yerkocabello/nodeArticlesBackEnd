'use strict';

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let env = process.env.NODE_ENV || 'local';
console.log(env);
let config = require('../env/mongo.json')[env];

module.exports = mongoose.connect(config.uri,  config.options);