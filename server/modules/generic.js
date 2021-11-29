var express = require("express");
var router = express.Router();

const { querys } = require("../db/querys/querys");
const { commands } = require("../db/commands/commands");


router.get(`/get*`, async (req,res)=>{
  console.log(req.originalUrl);
    res.status(200).json({
        data: await querys.getView(req.originalUrl.split("/")[2]),
    });
  });

router.get(`/Asignacion_Accesorio/:id`, async (req, res) => {
    res.status(200).json({
        data: await querys.getItem(req.originalUrl.split("/")[2], req.params.id),
    });
});

router.get(`/Asignacion_Equipo/:id`, async (req, res) => {
    res.status(200).json({
        data: await querys.getItem(req.originalUrl.split("/")[2], req.params.id),
    });
});

router.get(`/*/:id`, async (req, res) => {
    res.status(200).json({
        data: await querys.getItem(req.originalUrl.split("/")[2].slice(0, -1), req.params.id),
    });
});


router.post(`/*`, (req, res) => {
    commands.saveItem(req.originalUrl.split("/")[2], req.body);
    res.status(200).send("Guardado");
});

router.put(`/*`, (req, res) => {
    commands.updateItem(req.originalUrl.split("/")[2], req.body);
    res.status(200).send("Guardado");
  });


router.delete(`/*/:id`, async (req, res) => {
    commands.deleteItem(req.originalUrl.split("/")[2], req.params.id);
    res.status(200).json({
      data: {msg:"Borrado"},
    });
  });


module.exports = router;
