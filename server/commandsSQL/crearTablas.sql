/* 
    DB = innotech_db
    desc = "Crear tablas"
    TABLAS : 
            1 - users 
            2 - areas
            3 - empleados
            4 - equipos
            5 - accesorios
            6 - asignacion_equipos
            7 - asignacion_accesorios
*/

CREATE DATABASE IF NOT EXISTS innotech_db;
USE innotech_db;

# USERS
DROP TABLE IF exists users;
CREATE TABLE users (
    ID INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(100),
    password VARCHAR(100),
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);


# AREAS
DROP TABLE IF exists areas;
CREATE TABLE areas (
    ID INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    code VARCHAR(5),
    id_user INT,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);

# EMPLEADOS
DROP TABLE IF exists empleados;
CREATE TABLE empleados (
    ID INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    cedula VARCHAR(15) NOT NULL,
    email VARCHAR(80) NOT NULL,
    telefono VARCHAR(15),
    id_area INT,
    id_user INT,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);

#  EQUIPOS
DROP TABLE IF exists equipos;
CREATE TABLE equipos(
    ID INT NOT NULL AUTO_INCREMENT,
    tipo_equipo VARCHAR(1) NOT NULL,
    equipo_serial VARCHAR(30) NOT NULL,
    version_so VARCHAR (80) ,
    key_so VARCHAR (80) ,
    version_office VARCHAR (80) ,
    key_office VARCHAR (80) ,
    ram VARCHAR(5) NOT NULL ,
    disco VARCHAR(5) NOT NULL ,
    equipo_cpu varchar(20) NOT NULL ,
    id_user INT,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);

#  ACCESORIOS
DROP TABLE IF exists accesorios;
CREATE TABLE accesorios (
    ID INT NOT NULL AUTO_INCREMENT,
    serial_accesorio varchar(20),
    descripcion VARCHAR(50) NOT NULL,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_user INT,
    PRIMARY KEY (ID)
);

# ASIGNACIONES DE EQUIPOS
DROP TABLE IF exists asignacion_equipos;
CREATE TABLE asignacion_equipos (
    ID INT NOT NULL AUTO_INCREMENT,
    id_empleado INT,
    id_equipo INT,
    id_user INT,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);

#  ASIGNACIONES DE ACCESORIOS
DROP TABLE IF exists asignacion_accesorios;
CREATE TABLE asignacion_accesorios (
    ID INT NOT NULL AUTO_INCREMENT,
    id_empleado INT,
    id_accesorio INT,
    id_user INT,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);

ALTER TABLE areas
  ADD FOREIGN KEY (id_user) REFERENCES users(ID);

ALTER TABLE empleados
   ADD FOREIGN KEY (id_area) REFERENCES areas (ID),
   ADD  FOREIGN KEY (id_user) REFERENCES users (ID);

ALTER TABLE equipos
    ADD FOREIGN KEY (id_user) REFERENCES users(ID);

ALTER TABLE accesorios
    ADD FOREIGN KEY (id_user) REFERENCES users (ID);

ALTER TABLE asignacion_equipos
  ADD FOREIGN KEY (id_equipo) REFERENCES equipos (ID),
  ADD FOREIGN KEY (id_empleado) REFERENCES empleados (ID),
  ADD FOREIGN KEY (id_user) REFERENCES users (ID);

ALTER TABLE asignacion_accesorios
   ADD FOREIGN KEY (id_accesorio) REFERENCES accesorios (ID),
   ADD FOREIGN KEY (id_empleado) REFERENCES empleados (ID),
   ADD FOREIGN KEY (id_user) REFERENCES users (ID);