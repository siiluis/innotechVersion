const { connection } = require("../../db/connection");
const CALL = "CALL";
const SELECT_FROM = "SELECT * FROM";
const viewsDb = {
  getUsers: `${CALL} Users`,
  getAreas: `${CALL} Areas`,
  getEmpleados: `${CALL} Empleados`,
  getEquipos: `${CALL} Equipos`,
  getAccesorios: `${CALL} Accesorios`,

  getEquiposAsignados: `${SELECT_FROM} vista_asigna_equipos_empleado`,
  getAccesoriosAsignados: `${SELECT_FROM} vista_asigna_accesorios_empleado`,
  getAsignacionesEquiposByUsers: `${SELECT_FROM} vista_user_asigna_equipos_empleado`,
  getEquiposEmpleados: `${SELECT_FROM} vista_equipos_empleados`,

  getEmpleadosAreas: `${SELECT_FROM} vista_empleados_areas`,
  getEquiposAreas: `${SELECT_FROM} vista_equipos_in_areas`,
  getUsersAreas: `${SELECT_FROM}  vista_users_areas`,

}


const saveItem = function (nameTable, item) {
  connection.query(
    `INSERT INTO ${nameTable} SET ? `,
    item,
    function (error, results, fields) {
      if (error) throw error;
      console.log("Datos guardados ", results.affectedRows > 0);
    }
  );
};

const getAll = function (nameTable, id) {
  const procedureName = `get${nameTable.charAt(0).toUpperCase() + nameTable.slice(1)}`
  return new Promise(function (myResolve, myReject) {

    connection.execute(
      viewsDb[procedureName],
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results[0]);
      }
    );

  });
};

const getItem = function (nameTable, id) {
  return new Promise(function (myResolve, myReject) {
    connection.execute(
      `SELECT * FROM ${nameTable} WHERE ID = ${id}`,
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results);
      }
    );
  });
};



const updateItem = function (nameTable, update) {
  console.log(update);
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

const saveAsignacion = function (asignacion) {
  return new Promise(function (myResolve, myReject) {
  connection.query(
    `INSERT INTO asignacion_equipos SET ? `,
    asignacion,
    function (error, results, fields) {
      if (error) throw error;
      myResolve(results)
    }
  );
  });
};



const getAsignaciones = (view) => {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      viewsDb.getEquiposAsignados,
      function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        myResolve(results);
      }
    );
  });
}

module.exports.actions = {
  saveItem,
  getAll,
  getItem,
  updateItem,
  deleteItem,
  getAsignaciones,
  saveAsignacion

}


