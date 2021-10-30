USE innotech_db;

DELIMITER $$
DROP PROCEDURE IF EXISTS addAccesorio;
CREATE PROCEDURE addAccesorio(
        IN _id_empleado INT, 
        IN _id_equipo INT,
        IN _id_user INT
        )
    BEGIN
        INSERT 
        INTO asignacion_equipos (
                id_empleado, 
                id_equipo, 
                id_user
            )
        VALUES (
            _id_empleado,
            _id_equipo, 
            _id_user
        );
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Asignacion_Equipo;
CREATE PROCEDURE Asignacion_Equipo(IN _ID INT)
    BEGIN
        SELECT 
        asignacion_equipos.ID,
        empleados.nombre AS "nombreEmpleado",
        equipos.equipo_serial AS "equipoSerial",
        IF(equipos.tipo_equipo>"1", "LAPTOP", "DESKTOP") AS "Equipo Tipo"
        FROM asignacion_equipos
        INNER JOIN equipos ON asignacion_equipos.id_equipo = equipos.ID
        INNER JOIN empleados ON asignacion_equipos.id_empleado = empleados.ID
        WHERE ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Asignaciones_Equipo;
CREATE PROCEDURE Asignaciones_Equipo()
    BEGIN
        SELECT 
        asignacion_equipos.ID,
        empleados.nombre AS "nombreEmpleado",
        equipos.equipo_serial AS "equipoSerial",
        IF(equipos.tipo_equipo>"1", "LAPTOP", "DESKTOP") AS "Equipo Tipo"
        FROM asignacion_equipos
        INNER JOIN equipos ON asignacion_equipos.id_equipo = equipos.ID
        INNER JOIN empleados ON asignacion_equipos.id_empleado = empleados.ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS updateAsignacion_Equipo;
CREATE PROCEDURE updateAsignacion_Equipo(
        IN _ID INT, 
        IN _id_empleado INT, 
        IN _id_equipo INT,
        IN _id_user INT
        )
    BEGIN
        UPDATE asignacion_equipos
        SET 
            id_empleado = _id_empleado,
            id_equipo = _id_equipo,
            id_user = _id_user
        WHERE  ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS deleteAsignacion_Equipo;
CREATE PROCEDURE deleteAsignacion_Equipo(IN _ID INT)
    BEGIN
        DELETE FROM asignacion_equipos
        WHERE ID = _ID;
    END$$