const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { autorizacion } = require("./autorizacion");
const auth = require("./modules/auth");
const generic = require("./modules/generic");
const {actions} = require("./modules/empleados/querys");

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", auth);

app.get("/api/asignaciones", async (req, res) => {
  res.json({ data: await actions.getAsignaciones()})
});

app.post("/api/asignaciones", async (req, res) => {
  res.json({ data: await actions.saveAsignacion(req.body)})
});


app.post("/api/*", async (req, res) => {
  res.json({ data: await actions.saveItem(req.originalUrl.split("/")[2],req.body) });
});

app.get("/api/*/:id", async (req, res) => {
  res.json({ data: await actions.getItem(req.originalUrl.split("/")[2],req.params.id)});
});
app.get("/api/*", async (req, res) => {
  res.json({ data: await actions.getAll(req.originalUrl.split("/")[2]) });
});
app.put("/api/*", async (req, res) => {
  res.json({ data: await actions.updateItem(req.originalUrl.split("/")[2],req.body) });
});
app.delete("/api/*/:id", async (req, res) => {
  res.json({ data: await actions.deleteItem(req.originalUrl.split("/")[2],req.params.id)});
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
