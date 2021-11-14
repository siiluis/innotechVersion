const { connection } = require("../connection");
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

const getItem = function (nameTable, id) {
  return new Promise(function (myResolve, myReject) {
    connection.execute(
      `CALL ${nameTable} (${id})`,
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results[0]);
      }
    );
  });
};


const getView = (view) => {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      `${viewsDb[view]}`,
      function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        myResolve(results);
      }
    );
  });
}

module.exports.querys = {
  getItem,
  getView
};


