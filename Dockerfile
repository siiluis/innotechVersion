FROM mysql:8.0.27


ENV MYSQL_DATABASE innotech_db
ENV MYSQL_ROOT_PASSWORD test


COPY ./sql-scripts/ /docker-entrypoint-initdb.d/
