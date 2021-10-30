-- 1 Consultar todos empleados con nombre y codigo de area.
--- SELECT * FROM vista_empleados_areas;
CREATE VIEW 
vista_empleados_areas AS 
SELECT 
empleados.ID, empleados.nombre, empleados.cedula, areas.nombre AS area, areas.code 
FROM empleados
INNER JOIN areas
ON empleados.id_area = areas.ID;

-- 2 Consultar areas registradas por usuarios.
---SELECT * FROM vista_users_areas;
CREATE VIEW 
vista_users_areas AS 
SELECT 
users.email, areas.nombre AS area, areas.code 
FROM areas
INNER JOIN users
ON areas.id_user = users.ID;

-- 3 Areas donde estan los equipos, imprime tipo de equipo.
---SELECT * FROM vista_equipos_in_areas;
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

-- 4 Consultar equipos por empleados.
---SELECT * FROM vista_equipos_empleados;
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


-- 5 Cual usuario asigno equipos a empleado.
---SELECT * FROM vista_user_asigna_equipos_empleado;


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
