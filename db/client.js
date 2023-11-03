const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/fitness-dev';

const client = new Client({
  user: 'postgres',
  database: 'fitness_dev',
  password: 'postgres',
  port: 5432
});
module.exports = client;
