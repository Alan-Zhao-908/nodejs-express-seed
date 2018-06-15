'use strict'

const config = require('../config');
var globals = require('../globals');

//MongoDB uri to connect
const dburi = 'mongodb://' + config.database.mongodb.server + ':'
                          + config.database.mongodb.port
                          + '/' + config.database.mongodb.database;

//MongoDB options to be used while connecting
const dboptions = {
                    user: config.database.mongodb.user,
                    pass: config.database.mongodb.pass,
                    auth: {
                      authdb: config.database.mongodb.authdb
                    }
                  };

//Make connection using mongoose
globals.mongoose.connect(dburi, dboptions);

//Log after mongoose connection has been made
globals.mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB on ' + config.database.mongodb.server);
});

//Log error if mongoose has any error
globals.mongoose.connection.on('error', (err) => {
  console.log('Mongoose conection errror ' + err);
});

//Log after mongoose disconnects
globals.mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

//Disconnect mongoose if node process terminates and then log message
process.on('SIGINT', function() {
  globals.mongoose.connection.close(function () {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});
