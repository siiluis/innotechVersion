
# USERS
CREATE TABLE users (
    ID INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (100),
    email VARCHAR(100),
    password VARCHAR(100),
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);

# AREAS
CREATE TABLE areas (
    ID INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    code VARCHAR(5),
    id_user INT,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);

# EMPLEADOS
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
CREATE TABLE accesorios (
    ID INT NOT NULL AUTO_INCREMENT,
    serial_accesorio varchar(20),
    descripcion VARCHAR(50) NOT NULL,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_user INT,
    PRIMARY KEY (ID)
);

# ASIGNACIONES DE EQUIPOS
CREATE TABLE asignacion_equipos (
    ID INT NOT NULL AUTO_INCREMENT,
    id_empleado INT,
    id_equipo INT,
    id_user INT,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);

#  ASIGNACIONES DE ACCESORIOS
CREATE TABLE asignacion_accesorios (
    ID INT NOT NULL AUTO_INCREMENT,
    id_empleado INT,
    id_accesorio INT,
    id_user INT,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);



DELIMITER $$
CREATE PROCEDURE addUser(
        IN _email VARCHAR(100),
        IN _password VARCHAR(100)
        )
    BEGIN
        INSERT INTO users
        (email, password)
        VALUES
        (_email,_password);
    END$$

DELIMITER $$
CREATE PROCEDURE User(IN _ID INT)
    BEGIN
        SELECT *
        FROM users
        WHERE ID = _ID;
    END$$

DELIMITER $$
CREATE PROCEDURE Users()
    BEGIN
        SELECT *
        FROM users;
    END$$

DELIMITER $$
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
CREATE PROCEDURE deleteUser(IN _ID INT)
    BEGIN
        DELETE FROM users
        WHERE ID = _ID;
    END$$

DELIMITER $$
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
CREATE PROCEDURE Area(IN _ID INT)
    BEGIN
        SELECT *
        FROM areas
        WHERE ID = _ID;
    END$$

DELIMITER $$
CREATE PROCEDURE Areas()
    BEGIN
        SELECT *
        FROM areas;
    END$$

DELIMITER $$
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
CREATE PROCEDURE deleteArea(IN _ID INT)
    BEGIN
        DELETE FROM areas
        WHERE ID = _ID;
    END$$

DELIMITER $$
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
CREATE PROCEDURE Empleado(IN _ID INT)
    BEGIN
        SELECT * ,
        (SELECT areas.nombre FROM areas WHERE areas.ID = empleados.id_area ) AS "nombreea"
        FROM empleados
        WHERE ID = _ID;
    END$$

DELIMITER $$
CREATE PROCEDURE Empleados()
    BEGIN
        SELECT * ,
        (SELECT areas.nombre FROM areas WHERE areas.ID = empleados.id_area ) AS "nombresArea"
        FROM empleados;
    END$$

DELIMITER $$
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
CREATE PROCEDURE deleteEmpleado(IN _ID INT)
    BEGIN
        DELETE FROM empleados
        WHERE ID = _ID;
    END$$

DELIMITER $$
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
CREATE PROCEDURE Equipo(IN _ID INT)
    BEGIN
        SELECT * ,
        IF(tipo_equipo>"1", "LAPTOP", "DESKTOP") AS "Equipo Tipo"
        FROM equipos
        WHERE ID = _ID;
    END$$

DELIMITER $$
CREATE PROCEDURE Equipos()
    BEGIN
        SELECT * ,
        IF(tipo_equipo>"1", "LAPTOP", "DESKTOP") AS "Equipo Tipo"
        FROM equipos;
    END$$

DELIMITER $$
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
CREATE PROCEDURE deleteEquipo(IN _ID INT)
    BEGIN
        DELETE FROM equipos
        WHERE ID = _ID;
    END$$

DELIMITER $$
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
CREATE PROCEDURE Accesorio(IN _ID INT)
    BEGIN
        SELECT *
        FROM accesorios
        WHERE ID = _ID;
    END$$

DELIMITER $$
CREATE PROCEDURE Accesorios()
    BEGIN
        SELECT *
        FROM accesorios;
    END$$

DELIMITER $$
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
CREATE PROCEDURE deleteAccesorio(IN _ID INT)
    BEGIN
        DELETE FROM accesorios
        WHERE ID = _ID;
    END$$

DELIMITER $$
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
        WHERE asignacion_equipos.ID = _ID;
    END$$

DELIMITER $$
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
CREATE PROCEDURE deleteAsignacion_Equipo(IN _ID INT)
    BEGIN
        DELETE FROM asignacion_equipos
        WHERE ID = _ID;
    END$$

DELIMITER $$
CREATE PROCEDURE Asignacion_Accesorio(IN _ID INT)
    BEGIN
        SELECT
        asignacion_accesorios.ID,
        empleados.nombre AS "nombreEmpleado",
        accesorios.descripcion AS "Descripcion",
        accesorios.serial_accesorio AS "Serial"
        FROM asignacion_accesorios
        INNER JOIN accesorios ON asignacion_accesorios.id_accesorio = accesorios.ID
        INNER JOIN empleados ON asignacion_accesorios.id_empleado = empleados.ID
        WHERE asignacion_accesorios.ID = _ID;
    END$$

DELIMITER $$
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
CREATE PROCEDURE deleteAsignacion_Accesorio(IN _ID INT)
    BEGIN
        DELETE FROM asignacion_accesorios
        WHERE ID = _ID;
    END$$


DELIMITER ;

# 1 Consultar todos empleados con nombre y codigo de area.
# SELECT * FROM vista_empleados_areas;
CREATE VIEW
vista_empleados_areas AS
SELECT
empleados.ID, empleados.nombre, empleados.cedula, areas.nombre AS area, areas.code
FROM empleados
INNER JOIN areas
ON empleados.id_area = areas.ID;

# 2 Consultar areas registradas por usuarios.
# SELECT * FROM vista_users_areas;
CREATE VIEW
vista_users_areas AS
SELECT
users.email, areas.nombre AS area, areas.code
FROM areas
INNER JOIN users
ON areas.id_user = users.ID;

# 3 Areas donde estan los equipos, imprime tipo de equipo.
# SELECT * FROM vista_equipos_in_areas;
CREATE VIEW
vista_equipos_in_areas AS
SELECT equipos.equipo_serial AS Serial,
IF(equipos.tipo_equipo>"1", "LAPTOP", "DESKTOP") AS "Equipo Tipo",
empleados.nombre, (SELECT areas.nombre FROM areas WHERE ID = empleados.id_area ) AS "Area"
FROM ((asignacion_equipos
INNER JOIN equipos
ON asignacion_equipos.id_equipo = equipos.ID)
INNER JOIN empleados
ON asignacion_equipos.id_empleado = empleados.ID);

# 4 Consultar equipos por empleados.
# SELECT * FROM vista_equipos_empleados;
CREATE VIEW
vista_equipos_empleados AS
SELECT
IF(equipos.tipo_equipo>"1", "LAPTOP", "DESKTOP") AS "Equipo Tipo",
equipos.equipo_serial AS "Serial",
empleados.nombre,
empleados.telefono,
DATE_FORMAT(asignacion_equipos.fecha_creacion,"%M %e %Y") AS "Fecha Asignado"
FROM asignacion_equipos
INNER JOIN equipos ON asignacion_equipos.id_equipo = equipos.ID
INNER JOIN empleados ON asignacion_equipos.id_empleado = empleados.ID;

# 5 Cual usuario asigno equipos a empleado.
# SELECT * FROM vista_user_asigna_equipos_empleado;

CREATE VIEW
vista_user_asigna_equipos_empleado AS
SELECT
users.email AS "User",
IF(equipos.tipo_equipo>"1", "LAPTOP", "DESKTOP") AS "Equipo Tipo",
equipos.equipo_serial AS Serial,
empleados.cedula AS "Cedula Empleado",
empleados.nombre AS "Nombre Empleado"
FROM asignacion_equipos
INNER JOIN users ON asignacion_equipos.id_user = users.ID
INNER JOIN equipos ON asignacion_equipos.id_equipo = equipos.ID
INNER JOIN empleados ON asignacion_equipos.id_empleado = empleados.ID;


# SELECT * FROM vista_asigna_accesorios_empleado;
CREATE VIEW
vista_asigna_accesorios_empleado AS
        SELECT
        asignacion_accesorios.ID,
        empleados.nombre AS "nombreEmpleado",
        accesorios.descripcion AS "Descripcion",
        accesorios.serial_accesorio AS "Serial"
        FROM asignacion_accesorios
        INNER JOIN accesorios ON asignacion_accesorios.id_accesorio = accesorios.ID
        INNER JOIN empleados ON asignacion_accesorios.id_empleado = empleados.ID;

# SELECT * FROM vista_asigna_equipos_empleado;
CREATE VIEW
vista_asigna_equipos_empleado AS
        SELECT
        asignacion_equipos.ID,
        empleados.nombre AS "nombreEmpleado",
        equipos.equipo_serial AS "equipoSerial",
        IF(equipos.tipo_equipo>"1", "LAPTOP", "DESKTOP") AS "Equipo Tipo"
        FROM asignacion_equipos
        INNER JOIN equipos ON asignacion_equipos.id_equipo = equipos.ID
        INNER JOIN empleados ON asignacion_equipos.id_empleado = empleados.ID;




INSERT INTO `users` (`email`,`password`)
VALUES
  ("proin.velit@dolorfusce.ca","JIF91TDR2LB"),
  ("mattis.cras@nuncullamcorper.edu","UHP74IDI8YT"),
  ("eu.neque@vestibulumnequesed.edu","AKN28GGY1WA"),
  ("nec.euismod.in@liberonec.co.uk","RGT52QEF1LO"),
  ("pede.nec@metusaliquamerat.ca","PSY77NOC7KF"),
  ("lorem.eget@scelerisquescelerisque.edu","BEH54XGH1LX"),
  ("vestibulum.ut.eros@nascetur.co.uk","GJC76JOP8OK"),
  ("et.lacinia@mauriselit.org","CKE14SZW0LS"),
  ("consectetuer.adipiscing@euturpisnulla.org","WLV17HRR1BW"),
  ("aliquam.iaculis@necmetusfacilisis.edu","LJT14IKP2UZ");


INSERT INTO areas (nombre,code,id_user)
VALUES
  ("sistemas","sis",8),
  ("contabiliadd","con",2),
  ("rhhh","rhh",7),
  ("seguridad","seg",8),
  ("servicios generales","sgs",3),
  ("gerencia","ger",9),
  ("logistica","log",3);

INSERT INTO empleados (nombre,cedula,email,telefono,id_area,id_user)
VALUES
  ("Jescie Tucker","311021516","urna@semper.org","033-812-6677",4,2),
  ("Clarke Morales","37451185","odio.semper@convallisligula.ca","044-916-6173",6,8),
  ("Alvin Stokes","42988537K","mauris.blandit.mattis@mauris.net","077-264-0188",4,8),
  ("Ruth Waters","278193691","quisque.nonummy.ipsum@consequatauctor.com","084-437-7037",3,2),
  ("Nola Coleman","85403362","massa.suspendisse@euligula.co.uk","041-741-2494",6,8),
  ("Joan Dyer","4977629","luctus.sit@libero.co.uk","082-907-5358",4,5),
  ("Cherokee Riggs","158992647","nullam.lobortis@ipsumphasellus.ca","020-570-4645",4,6),
  ("Kirk Wilcox","113023511","velit.egestas.lacinia@nunc.ca","028-872-2748",2,1),
  ("Rhiannon Wong","111281858","sed.consequat.auctor@dolor.org","053-714-8274",4,4),
  ("Steel Sparks","77603174","eu.nibh.vulputate@elitnulla.ca","079-411-1230",2,5),
  ("Blake Curtis","219767102","ac@ac.org","062-339-8693",1,7),
  ("Ishmael Meyers","242711769","gravida.non.sollicitudin@integerin.co.uk","062-717-6883",6,4),
  ("Mannix Arnold","462815182","at.auctor@eterosproin.ca","078-523-5058",1,8),
  ("Ahmed Flynn","383421667","nunc.risus.varius@rhoncusproinnisl.co.uk","024-078-2164",6,2),
  ("Hashim Bryan","45607321","augue@sem.com","020-474-6583",2,6);

INSERT INTO equipos (tipo_equipo,equipo_serial,version_so,key_so,version_office,key_office,ram,disco,id_user,equipo_cpu)
VALUES
  ("1","NLQ62GSY4IV","windows 10","OCP07XNB8JT","Office 2013","D2411CA8-F200-B967-02EA-E978FD9BE5C2","4",80,9,"i5 3470"),
  ("1","EVM93IRS1WO","windows 10","UQJ41TUB8TP","Office 2013","FE1463D9-B24D-7A7C-F344-662581B1B1C2","9",80,4,"i5 3470"),
  ("1","WKF58YTQ6KF","Windows 7","WSW12XLC2KY","Office 2020","9290FB7B-B675-E760-AA8D-A6FB48150E95","1",80,2,"i7 3470"),
  ("2","AUN53KTK6LS","Windows 7","KNM35KWE7VS","Office 2020","9FA93084-EBF5-34ED-0915-800B2D81E82E","0",120,3,"i7 3470"),
  ("1","EIV01YET2CP","wdinws server 2012","RSO71EPP9KI","Office 2016","7B5EC645-7613-8E86-5852-CAD284886089","5",120,4,"celeron"),
  ("1","ZNO36QCF8XF","wdinws server 2012","UHP37PML6AW","Office 2016","386C65B6-B9AD-65EB-AC36-A08AFCC6D023","6",120,4,"celeron"),
  ("2","XGP87FIS0SP","windos xp","OMD65WRI3HH","Offie 2019","64B2F37C-5C2F-7571-92A1-52D933BDC3E9","5",250,5,"dual core"),
  ("1","XPQ23GZG8JX","windos xp","GBL31TGE2RR","Offie 2019","55C923D6-1B41-9AD6-F397-6041514AE7B7","7",250,3,"dual core"),
  ("2","SLQ66ESL2AH","linux","YOK96FQL3KP","Office 2000","C73772D4-3F27-16A1-DB33-2B938F71CD43","5",250,6,"i5 3470"),
  ("1","XAW93EHJ3FG","linux","JWO11TPJ7YT","Office 2000","3549AECF-539E-2452-C674-95CA9FF9B1B7","3",500,10,"i5 3470"),
  ("1","XWP57PIV2LG","windows 10","YNR00SAY7LR","Office 2013","AC61ED75-EE71-3137-6EA2-D4E88CDAB46C","1",500,5,"i7 3470"),
  ("2","PMW92SLE7LN","windows 10","OVX76KDQ6DJ","Office 2013","1E0C7515-B3C5-2C21-27C7-B50A43C6972D","7",500,10,"i7 3470"),
  ("2","JSX70UVY8WQ","Windows 7","OIT15YWS2RH","Office 2020","A6417DBA-3943-596C-6169-AC7682E1F28D","2",1000,7,"celeron"),
  ("1","DON36PYU2HG","Windows 7","MLB05HCL4TW","Office 2020","CEFB8D82-F8D3-8FC5-3117-805F34BBCBB2","4",1000,9,"celeron"),
  ("1","YVD72LSF3PQ","wdinws server 2012","OKP42XIJ1IL","Office 2016","F56FAE49-7662-9C13-5B85-813B4B7B2D52","0",1000,1,"dual core");

INSERT INTO accesorios (serial_accesorio,descripcion,id_user)
VALUES
  ("LOO76CHF0AJ","mouse",6),
  ("QRJ43NPZ1DI","teclado",7),
  ("LBU07LVG1WE","pantalla",6),
  ("SXK88RZT0YP","base",2),
  ("XNQ44ELR5XH","diadema",3);


INSERT INTO asignacion_equipos (id_empleado,id_equipo,id_user)
VALUES
  (1,1,3),
  (2,2,1),
  (3,3,5),
  (4,4,7),
  (5,5,8),
  (6,6,7),
  (7,7,3),
  (8,8,5),
  (9,9,5),
  (10,10,7);

INSERT INTO asignacion_accesorios (id_empleado,id_accesorio,id_user)
VALUES
  (4,2,7),
  (11,3,7),
  (11,2,6),
  (3,2,5),
  (5,1,2),
  (5,2,2),
  (14,2,10),
  (7,4,6),
  (11,4,7),
  (11,2,2),
  (11,1,8),
  (11,2,2),
  (12,3,6),
  (14,3,6),
  (12,5,8);
