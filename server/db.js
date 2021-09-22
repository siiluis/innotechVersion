var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_inventario",
});

module.exports.saveItem = function (asignacion) {
  connection.query(
    "INSERT INTO asignaciones SET ? ",
    asignacion,
    function (error, results, fields) {
      if (error) throw error;
      console.log("Datos guardados ", results.affectedRows > 0);
    }
  );
};

module.exports.getItems = function () {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      "SELECT * FROM asignaciones",
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results);
      }
    );
  });
};

module.exports.getItem = function (id) {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      "SELECT * FROM asignaciones WHERE ID = ?",
      [id],
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results[0]);
      }
    );
  });
};

module.exports.updateItem = function (update) {
  console.log(update.ID);
  return new Promise(function (myResolve, myReject) {
    connection.query(
      "UPDATE asignaciones SET ? WHERE ID = ?",
      [update, update.ID],
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results);
      }
    );
  });
};

module.exports.deleteItem = function (id) {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      "DELETE FROM asignaciones WHERE ID = ?",
      [id],
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results);
      }
    );
  });
};
