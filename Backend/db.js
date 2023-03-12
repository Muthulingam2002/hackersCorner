const { Pool } = require("pg");
require("dotenv").config()
const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false, // Set to true in production
    },
});
module.exports = pool;



