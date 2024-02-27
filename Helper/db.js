const mysql = require("mysql2");
const config = require("../Config/config");

const connection = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USERNAME,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log("Error while Connecting DB", err);
  } else {
    console.log("Connected to PoundsApp DB Successfully!!!");
  }
});

module.exports = connection;
