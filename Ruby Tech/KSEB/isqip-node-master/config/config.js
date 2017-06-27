var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'attendance'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://127.0.0.1/attendance-db'
  },

  test: {
    root: rootPath,
    app: {
      name: 'attendance'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/attendance-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'attendance'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/attendance-production'
  }
};

module.exports = config[env];
