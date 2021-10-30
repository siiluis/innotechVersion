use innotech_db;

DROP PROCEDURE IF EXISTS contar_total_ver_so;
DELIMITER $$
CREATE PROCEDURE contar_total_ver_so()
    BEGIN
	SELECT COUNT(version_so) as veee, version_so as Version
	FROM equipos
	GROUP BY version_so;
    END$$


DROP PROCEDURE IF EXISTS equiposOrdenadosDiscoDuroTamaño;
DELIMITER $$
CREATE PROCEDURE equiposOrdenadosDiscoDuroTamaño()
    BEGIN
    SELECT *
	FROM equipos
	ORDER BY disco;
    END$$


DROP PROCEDURE IF EXISTS TotalEmpleados_x_area;
DELIMITER $$
CREATE PROCEDURE TotalEmpleados_x_area()
    BEGIN
    SELECT areas.nombre AS 'Nombre Area', COUNT(empleados.ID) AS "Total Empleados" FROM empleados
	LEFT JOIN areas ON empleados.id_area = areas.ID
	GROUP BY areas.nombre;
    END$$


DROP PROCEDURE IF EXISTS filtrarentreTamañoDisco;
DELIMITER $$
CREATE PROCEDURE buscarEntreTamañoDisco(IN minimo INT, IN maximo INT)
    SELECT * FROM equipos
	WHERE disco BETWEEN minimo AND maximo;
END$$

