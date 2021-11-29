const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { autorizacion } = require("./autorizacion");
const auth = require("./modules/auth");
const generic = require("./modules/generic");
const {empleados} = require("./modules/empleados/querys");

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/empleados/:id", async (req, res) => {
  console.log(req.params.id);
  res.json({ data: await empleados.getItem("s",req.params.id) });
});
app.use("/auth", auth);
app.use("/api", generic);

app.use("/api/empleados", async (req, res) => {
  res.json({ data: await empleados.getAll() });
});

/*
app.use("/auth", auth);
/* app.use("/accesorios", accesorios);


app.use("/asignaciones", asignaciones);
app.use("/empleados", empleados);
app.use("/equipos", autorizacion.middelwareAuth, equipos);
 */
app.listen(port, () => {
  console.log(`Servidor on http://localhost:${port}`);
});
