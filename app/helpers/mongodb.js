const globals = require('../globals');
const config = require('../config')

globals.mongoose.connect(config.database.mongodb.connection_string, err => {
  if (err) {
    console.log('Error while connecting to MongoDB.........');
    throw err;
  } else {
    console.log('Connected to MongoDB!!!!!!!!');
  }
});