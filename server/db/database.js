const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const my_postgressql_url =
  "postgres://default:PvN5bwhtKO2a@ep-cold-dream-93716958-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb" ||
  process.env.POSTGRES_URL;
const pool = new Pool({
  connectionString: my_postgressql_url + "?sslmode=require",
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connect to PostgreSQL successfully!");
});

module.exports = pool;
