const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "adorminis.cp1aphjaifpb.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "adorminis",
  database: "adorminis",
  connectionLimit: 5,
});
async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("Database Connected!!" + rows);
    console.log(rows);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) return conn.end();
  }
}
asyncFunction();

module.exports = pool;
