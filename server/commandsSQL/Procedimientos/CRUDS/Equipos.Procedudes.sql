USE innotech_db;

DELIMITER $$
DROP PROCEDURE IF EXISTS addEquipo;
CREATE PROCEDURE addEquipo (
        IN _tipo_equipo VARCHAR(1), 
        IN _equipo_serial VARCHAR(30),
        IN _version_so VARCHAR (80),
        IN _key_so VARCHAR (80),
        IN _version_office VARCHAR (80),
        IN _key_office VARCHAR (80),
        IN _ram VARCHAR(5),
        IN _disco VARCHAR(5),
        IN _equipo_cpu varchar(20),
        IN _id_user INT
        )
    BEGIN
        INSERT
         INTO 
            equipos (
                tipo_equipo,
                equipo_serial,
                version_so,
                key_so,
                version_office,
                key_office,         
                ram,
                disco,
                equipo_cpu,
                id_user
            )
        VALUES (
            _tipo_equipo,
            _equipo_serial,
            _version_so,
            _key_so,
            _version_office,
            _key_office,
            _ram,
            _disco,
            _equipo_cpu,
            _id_user
        );
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Equipo;
CREATE PROCEDURE Equipo(IN _ID INT)
    BEGIN
        SELECT * ,
        IF(tipo_equipo>"1", "LAPTOP", "DESKTOP") AS "Equipo Tipo"
        FROM equipos
        WHERE ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Equipos;
CREATE PROCEDURE Equipos()
    BEGIN
        SELECT * ,
        IF(tipo_equipo>"1", "LAPTOP", "DESKTOP") AS "Equipo Tipo"
        FROM equipos;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS updateEquipo;
CREATE PROCEDURE updateEquipo (
        IN _ID INT, 
        IN _tipo_equipo VARCHAR(1), 
        IN _equipo_serial VARCHAR(30),
        IN _version_so VARCHAR (80),
        IN _key_so  VARCHAR(80),
        IN _version_office VARCHAR (80),
        IN _key_office VARCHAR (80),
        IN _ram VARCHAR(5),
        IN _disco VARCHAR(5),
        IN _equipo_cpu varchar(20),
        IN _id_user INT
    )
    BEGIN
        UPDATE equipos
        SET 
            tipo_equipo = _tipo_equipo,
            equipo_serial = _equipo_serial,
            version_so = _version_so,
            key_so = _key_so,
            version_office = _version_office,
            key_office = _key_office,
            ram = _ram,
            disco = _disco,
            equipo_cpu = _equipo_cpu,
            id_user = _id_user
        WHERE  ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS deleteEquipo;
CREATE PROCEDURE deleteEquipo(IN _ID INT)
    BEGIN
        DELETE FROM equipos
        WHERE ID = _ID;
    END$$
 CALL addEquipo();