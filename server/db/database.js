const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const my_postgressql_url = process.env.POSTGRES_URL;
const pool = new Pool({
  connectionString: my_postgressql_url + "?sslmode=require",
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connect to PostgreSQL successfully!");
});

module.exports = pool;
