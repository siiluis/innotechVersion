USE innotech_db;

DELIMITER $$
DROP PROCEDURE IF EXISTS addArea;
CREATE PROCEDURE addArea(
        IN _nombre VARCHAR(50), 
        IN _code VARCHAR(5),
        IN _id_user INT
        )
    BEGIN
        INSERT 
        INTO areas (
            nombre, 
            code,
            id_user
        )
        VALUES (
           _nombre,
           _code,
           _id_user 
        );
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Area;
CREATE PROCEDURE Area(IN _ID INT)
    BEGIN
        SELECT * 
        FROM areas
        WHERE ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Areas;
CREATE PROCEDURE Areas()
    BEGIN
        SELECT * 
        FROM areas;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS updateArea;
CREATE PROCEDURE updateArea(
    IN _ID INT, 
    IN _nombre VARCHAR(50), 
    IN _code VARCHAR(5),
    IN _id_user INT
    )
    BEGIN
        UPDATE areas
        SET 
            nombre = _nombre,
            code = _code,
            id_user = _id_user
        WHERE  ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS deleteArea;
CREATE PROCEDURE deleteArea(IN _ID INT)
    BEGIN
        DELETE FROM areas
        WHERE ID = _ID;
    END$$