const mysql = require("mysql");

module.exports = initConnection = () => {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookuj",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return con;
};
