USE innotech_db;

 DELIMITER $$
DROP PROCEDURE IF EXISTS addUser;
CREATE PROCEDURE addUser(
        IN _email VARCHAR(100), 
        IN _password VARCHAR(100)
        )
    BEGIN
        INSERT 
        INTO users
        (email, password)
        VALUES
        (_email,_password);
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS User;
CREATE PROCEDURE User(IN _ID INT)
    BEGIN
        SELECT * 
        FROM users
        WHERE ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS Users;
CREATE PROCEDURE Users()
    BEGIN
        SELECT * 
        FROM users;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS updateUser;
CREATE PROCEDURE updateUser(
        IN _ID INT, 
        IN _email VARCHAR(100), 
        IN _password VARCHAR(100)
    )
    BEGIN
        UPDATE users
        SET 
            email = _email,
            password = _password
        WHERE  ID = _ID;
    END$$

DELIMITER $$
DROP PROCEDURE IF EXISTS deleteUser;
CREATE PROCEDURE deleteUser(IN _ID INT)
    BEGIN
        DELETE FROM users
        WHERE ID = _ID;
    END$$