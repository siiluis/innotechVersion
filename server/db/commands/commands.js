const { connection } = require("../connection");
const saveItem = function (nameTable, equipo) {
  connection.query(
    `INSERT INTO ${nameTable} SET ? `,
    equipo,
    function (error, results, fields) {
      if (error) throw error;
      console.log("Datos guardados ", results.affectedRows > 0);
    }
  );
};

const updateItem = function (nameTable, update) {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      `UPDATE ${nameTable} SET ? WHERE ID = ?`,
      [update, update.ID],
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results);
      }
    );
  });
};

const deleteItem = function (nameTable, id) {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      `DELETE FROM ${nameTable} WHERE ID = ?`,
      id,
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results);
      }
    );
  });
};

module.exports.commands = {
  saveItem,
  deleteItem,
  updateItem,
};
