const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 3000;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

app.post("/equipos", (req, res) => {
  //db.saveItem(req.body);
  console.log(req.body);
  res.status(200).send("Guardado");
});

app.get("/equipos", async (req, res) => {
  res.status(200).json({
    data: [
      {
        serial: "sas309304",
        tipoEquipo: "1",
        disco: "150",
        equipo_cpu: "i5",
        key_office: "skifjsai8r2023",
        key_so: "asjdsafafjsa",
        ram: "4",
        version_office: "39r838fdf",
        version_so: "dsa9dus9aduas9su0a",
      },
      {
        serial: "sas309304",
        tipoEquipo: "1",
        disco: "150",
        equipo_cpu: "i5",
        key_office: "skifjsai8r2023",
        key_so: "asjdsafafjsa",
        ram: "4",
        version_office: "39r838fdf",
        version_so: "dsa9dus9aduas9su0a",
      },
      {
        serial: "sas309304",
        tipoEquipo: "1",
        disco: "150",
        equipo_cpu: "i5",
        key_office: "skifjsai8r2023",
        key_so: "asjdsafafjsa",
        ram: "4",
        version_office: "39r838fdf",
        version_so: "dsa9dus9aduas9su0a",
      },
    ],
  });
});

app.get("/equipos/:id", async (req, res) => {
  res.status(200).json({
    data: {
      serial: "sas309304",
      tipoEquipo: "1",
      disco: "150",
      equipo_cpu: "i5",
      key_office: "skifjsai8r2023",
      key_so: "asjdsafafjsa",
      ram: "4",
      version_office: "39r838fdf",
      version_so: "dsa9dus9aduas9su0a",
    },
  });
});

app.put("/asignaciones", async (req, res) => {
  res.status(200).json(await db.updateItem(req.body));
});

app.delete("/asignaciones/:id", async (req, res) => {
  res.status(200).json(await db.deleteItem(req.params.id));
});

app.listen(port, () => {
  console.log(`Servidor on http://localhost:${port}`);
});
