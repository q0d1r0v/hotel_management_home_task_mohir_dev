const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hotel_management_db",
  password: "fiF1jbUyDMBbOMTzWrhtSwmF26VwM",
  port: 5432,
});

const query = (text, params, callback) => pool.query(text, params, callback);

module.exports = {
  query,
};
