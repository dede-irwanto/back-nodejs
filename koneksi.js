var mysql = require("mysql");

// buat koneksi database
const conn = mysql.createConnection({
  host: "localhost",
  user: "userrestapi",
  password: "userrestapi123",
  database: "dbrestapi",
});
conn.connect((err) => {
  if (err) throw err;
  console.log("Database terhubung");
});
module.exports = conn;
