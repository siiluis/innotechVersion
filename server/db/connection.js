var mysql = require("mysql");
module.exports.connection = mysql.createConnection({
  host: "localhost",
  port:3002,
  user: "root",
  password: "",
  database: "innotech_db",
});


