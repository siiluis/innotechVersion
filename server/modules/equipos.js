var express = require("express");
var router = express.Router();
const { querys } = require("../db/querys/querys");
const { commands } = require("../db/commands/commands");
const Response = require("../models/response");
const APP = "equipos";
const SUCCESS = "SUCCESS";
// Save
router.post(`/`, (req, res) => {
  commands.saveItem(APP, req.body);
  res.status(200).json(new Response(SUCCESS, "Guardado"));
});

// get all
router.get(`/`, async (req, res) => {
  res.status(200).json({
    data: await querys.getAll(APP),
  });
});

// get one
router.get(`/:id`, async (req, res) => {
  console.log(req.params);
  res.status(200).json({
    data: await querys.getItem(APP, req.params.id),
  });
});

// update
router.put(`/`, (req, res) => {
  commands.updateItem(APP, req.body);
  res.status(200).json(new Response(SUCCESS, "Actualizado"));
});

// delete
router.delete(`/:id`, async (req, res) => {
  commands.deleteItem(APP, req.params.id);
  res.status(200).json({
    data: {},
  });
});

module.exports = router;