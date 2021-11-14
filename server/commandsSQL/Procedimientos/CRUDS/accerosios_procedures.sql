USE innotech_db;

DELIMITER $$
DROP PROCEDURE IF EXISTS addAccesorio;
CREATE PROCEDURE addAccesorio(
        IN _serial_accesorio VARCHAR(20), 
        IN _descripcion VARCHAR(50),
        IN _id_user INT
        )
    BEGIN
        INSERT 
        INTO accesorios (
                serial_accesorio, 
                descripcion, 
                id_user
            )
        VALUES (
            _serial_accesorio,
            _descripcion, 
            _id_user
        );
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Accesorio;
CREATE PROCEDURE Accesorio(IN _ID INT)
    BEGIN
        SELECT * 
        FROM accesorios
        WHERE ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Accesorios;
CREATE PROCEDURE Accesorios()
    BEGIN
        SELECT * 
        FROM accesorios;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS updateAccesorio;
CREATE PROCEDURE updateAccesorio(
        IN _ID INT, 
        IN _serial_accesorio VARCHAR(20), 
        IN _descripcion VARCHAR(50),
        IN _id_user INT
        )
    BEGIN
        UPDATE accesorios
        SET 
            serial_accesorio = _serial_accesorio,
            descripcion = _descripcion,
            id_user = _id_user
        WHERE  ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS deleteAccesorio;
CREATE PROCEDURE deleteAccesorio(IN _ID INT)
    BEGIN
        DELETE FROM accesorios
        WHERE ID = _ID;
    END$$