const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//Importando rutas modulos
var accesorios = require("./modules/accesorios");
var asignaciones = require("./modules/asignaciones");
var empleados = require("./modules/empleados");
var equipos = require("./modules/equipos");

const app = express();
const port = 3000;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/accesorios", accesorios);
app.use("/asignaciones", asignaciones);
app.use("/empleados", empleados);
app.use("/equipos", equipos);

app.listen(port, () => {
  console.log(`Servidor on http://localhost:${port}`);
});
