'use strict'

const fs = require('fs');
const path = require('path');

const default_app_env = 'dev';

let app_env = null;

//setting default application environment
if(process.env.app_env) {
  console.log(`Using app_env: ${process.env.app_env}`)
} else {
  app_env = process.env.app_env || default_app_env;
  console.log(`App parameter app_env is not set, setting it to default value: ${default_app_env}`);
}

let configBuffer = null;

switch(app_env) {
  case default_app_env:
    configBuffer = fs.readFileSync(path.resolve(__dirname, 'dev.json'), 'utf-8');
    break;
}

let config = JSON.parse(configBuffer);
module.exports = config;