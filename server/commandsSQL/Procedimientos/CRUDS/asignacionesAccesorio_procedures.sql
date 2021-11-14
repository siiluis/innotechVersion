USE innotech_db;

DELIMITER $$
DROP PROCEDURE IF EXISTS addAccesorio;
CREATE PROCEDURE addAccesorio(
        IN _id_empleado INT, 
        IN _id_accesorio INT,
        IN _id_user INT
        )
    BEGIN
        INSERT 
        INTO asignacion_accesorios (
                id_empleado, 
                id_accesorio, 
                id_user
            )
        VALUES (
            _id_empleado,
            _id_accesorio, 
            _id_user
        );
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Asignacion_Accesorio;
CREATE PROCEDURE Asignacion_Accesorio(IN _ID INT)
    BEGIN
        SELECT 
        asignacion_accesorios.ID,
        empleados.nombre AS "nombreEmpleado",
        accesorios.descripcion AS "Descripcion",
        accesorios.serial_accesorio AS "Serial"
        FROM asignacion_accesorios
        INNER JOIN accesorios ON asignacion_accesorios.id_accesorio = accesorios.ID
        INNER JOIN empleados ON asignacion_accesorios.id_empleado = empleados.ID;
        WHERE ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Asignaciones_Accesorio;
CREATE PROCEDURE Asignaciones_Accesorio()
    BEGIN
        SELECT 
        asignacion_accesorios.ID,
        empleados.nombre AS "nombreEmpleado",
        accesorios.descripcion AS "Descripcion",
        accesorios.serial_accesorio AS "Serial"
        FROM asignacion_accesorios
        INNER JOIN accesorios ON asignacion_accesorios.id_accesorio = accesorios.ID
        INNER JOIN empleados ON asignacion_accesorios.id_empleado = empleados.ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS updateAsignacion_Accesorio;
CREATE PROCEDURE updateAsignacion_Accesorio(
        IN _ID INT, 
        IN _id_empleado INT, 
        IN _id_accesorio INT,
        IN _id_user INT
        )
    BEGIN
        UPDATE asignacion_accesorios
        SET 
            id_empleado = _id_empleado,
            id_accesorio = _id_accesorio,
            id_user = _id_user
        WHERE  ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS deleteAsignacion_Accesorio;
CREATE PROCEDURE deleteAsignacion_Accesorio(IN _ID INT)
    BEGIN
        DELETE FROM asignacion_accesorios
        WHERE ID = _ID;
    END$$