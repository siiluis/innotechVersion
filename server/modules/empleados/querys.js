const { connection } = require("../../db/connection");


const getAll = function (nameTable, id) {
  return new Promise(function (myResolve, myReject) {
    connection.execute(
      `SELECT * FROM empleados`,
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results);
      }
    );
  });
};

const getItem = function (nameTable, id) {
  return new Promise(function (myResolve, myReject) {
    connection.execute(
      `SELECT * FROM empleados WHERE ID = ${id}`,
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results);
      }
    );
  });
};

const UpdateItem = function (nameTable, id) {
  return new Promise(function (myResolve, myReject) {
    connection.execute(
      `SELECT * FROM empleados WHERE ID = ${id}`,
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results);
      }
    );
  });
};


module.exports.empleados = {
  getAll,
  getItem,

}
