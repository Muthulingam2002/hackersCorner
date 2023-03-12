import  pg  from "pg";
import * as dotenv from "dotenv";
dotenv.config();
const pool = new pg.Pool({
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false, // Set to true in production
    },
});
export default pool;



