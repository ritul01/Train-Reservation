const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'train_reservation',
  password: 'password',
  port: 5432,
});

module.exports = pool;
