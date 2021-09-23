const { connection } = require("../connection");
const getAll = (nameTable) => {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      `SELECT * FROM ${nameTable}`,
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results);
      }
    );
  });
};

const getItem = function (nameTable, id) {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      `SELECT * FROM ${nameTable} WHERE ID = ${id}`,
      [id],
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results[0]);
      }
    );
  });
};

const findUser = function (email, password) {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      `SELECT * FROM users WHERE email = ? AND password = ?`,
      [email, password],
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results.length);
      }
    );
  });
};

module.exports.querys = {
  getAll,
  getItem,
  findUser,
};
