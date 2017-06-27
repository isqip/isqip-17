var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'Diagnosia'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://127.0.0.1/Diagnosia'
  },

  test: {
    root: rootPath,
    app: {
      name: 'Diagnosia'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/Diagnosia-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'Diagnosia'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/Diagnosia-production'
  }
};

module.exports = config[env];
