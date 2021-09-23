CREATE DATABASE innotech_db;
use innotech_db;

DROP TABLE IF exists equipos;
CREATE TABLE equipos(
    ID INT NOT NULL AUTO_INCREMENT,
    tipo_equipo INT(1) NOT NULL ,
    equipo_serial VARCHAR(15) NOT NULL  ,
    version_so varchar (80) ,
    key_so varchar (80) ,
    version_office varchar (80) ,
    key_office varchar (80) ,
    ram VARCHAR(3) NOT NULL ,
    disco VARCHAR(3) NOT NULL ,
    equipo_cpu varchar(10) NOT NULL ,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);


DROP TABLE IF exists empleados;
CREATE TABLE empleados (
    ID INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL ,
    cedula VARCHAR(30),
    email VARCHAR(80) NOT NULL ,
    telefono tinyint,
    area VARCHAR(30) NOT NULL ,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    PRIMARY KEY (ID)
);

DROP TABLE IF exists accesorios;
CREATE TABLE accesorios (
    ID INT NOT NULL AUTO_INCREMENT ,
    serial_accesorio varchar(80) ,
    descripcion VARCHAR(50) NOT NULL ,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    id_equipo INT ,
    PRIMARY KEY (ID) ,
    FOREIGN KEY (id_equipo) REFERENCES equipos (id_equipo)
);

DROP TABLE IF exists asignaciones;
CREATE TABLE asignaciones (
    ID INT NOT NULL AUTO_INCREMENT,
    id_empleado INT,
    id_equipo INT,
    id_accesorio INT,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID),
    FOREIGN KEY (id_equipo) REFERENCES equipos (id_equipo),
    FOREIGN KEY (id_empleado) REFERENCES empleados (id_empleado),
    FOREIGN KEY (id_accesorio) REFERENCES accesorios (id_accesorio)
);


DROP TABLE IF exists users;
CREATE TABLE users (
    ID INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(100),
    password VARCHAR(100),
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);
