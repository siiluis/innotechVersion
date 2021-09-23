var express = require("express");
var router = express.Router();
const { querys } = require("../db/querys/querys");
const { commands } = require("../db/commands/commands");
const { autorizacion } = require("../autorizacion");
const Response = require("../models/response");

const APP = "users";
const SUCCESS = "SUCCESS";
// Save
router.post(`/register`, (req, res) => {
  commands.saveItem(APP, req.body);
  res.status(200).json(new Response(SUCCESS, "Guardado"));
});

router.post(`/login`, async (req, res) => {
  const user = await querys.findUser(req.body.email, req.body.password);
  if (user) {
    res
      .status(200)
      .json(new Response(SUCCESS, "Encontrado", autorizacion.getToken));
  } else {
    res.status(404).json(new Response(SUCCESS, "Usuario no existe"));
  }
});

module.exports = router;
