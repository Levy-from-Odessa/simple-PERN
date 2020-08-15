const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'yelp',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'savelik12',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost'
    }
  }
}
