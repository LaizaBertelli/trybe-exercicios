const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: '',
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});
