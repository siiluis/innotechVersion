USE innotech_db;

DELIMITER $$
DROP PROCEDURE IF EXISTS addEmpleado;
CREATE PROCEDURE addEmpleado(
        IN _nombre VARCHAR(100), 
        IN _cedula VARCHAR(15),
        IN _email VARCHAR(80),
        IN _telefono VARCHAR(15),
        IN _id_area INT,
        IN _id_user INT
        )
    BEGIN
        INSERT
         INTO 
            empleados (
                nombre,
                cedula,
                email,
                telefono,
                id_area,            
                id_user
            )
        VALUES (
            _nombre,
            _cedula,
            _email,
            _telefono,
            _id_area,
            _id_user
        );
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Empleado;
CREATE PROCEDURE Empleado(IN _ID INT)
    BEGIN
        SELECT * ,
        (SELECT areas.nombre FROM areas WHERE areas.ID = empleados.id_area ) AS "nombreea"
        FROM empleados
        WHERE ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Empleados;
CREATE PROCEDURE Empleados()
    BEGIN
        SELECT * ,
        (SELECT areas.nombre FROM areas WHERE areas.ID = empleados.id_area ) AS "nombresArea"
        FROM empleados
        INNER JOIN areas ON empleados.id_area = areas.ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS updateEmpleado;
CREATE PROCEDURE updateEmpleado (
        IN _ID INT, 
        IN _nombre VARCHAR(100), 
        IN _cedula VARCHAR(15),
        IN _email VARCHAR(80),
        IN _telefono VARCHAR(15),
        IN _id_area INT,
        IN _id_user INT
    )
    BEGIN
        UPDATE empleados
        SET 
            nombre = _nombre,
            cedula = _cedula,
            email = _email,
            telefono = _telefono,
            id_area = _id_area,
            id_user = _id_user
        WHERE  ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS deleteEmpleado;
CREATE PROCEDURE deleteEmpleado(IN _ID INT)
    BEGIN
        DELETE FROM empleados
        WHERE ID = _ID;
    END$$
