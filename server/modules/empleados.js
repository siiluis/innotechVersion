var express = require("express");
var router = express.Router();

const { querys } = require("../db/querys/querys");
const { commands } = require("../db/commands/commands");


const SUCCESS = "SUCCESS";
const Response = require("../models/response");

const APP = "empleados";
const TABLA_NAME = "empleados";

// Save
router.post(`/`, (req, res) => {
  commands.saveItem(TABLA_NAME, req.body);
  res.status(200).json(new Response(SUCCESS, "Guardado"));
});

// get all
router.get(`/`, async (req, res) => {
  res.status(200).json({
    data: await querys.getAll(TABLA_NAME),
  });
});

// get one
router.get(`/:id`, async (req, res) => {
  res.status(200).json({
    data: await querys.getItem(TABLA_NAME, req.params.id),
  });
});

// update
router.put(`/`, (req, res) => {
  commands.updateItem(TABLA_NAME, req.body);
  res.status(200).json(new Response(SUCCESS, "Actualizado"));
});

// delete
router.delete(`/:id`, async (req, res) => {
  commands.deleteItem(TABLA_NAME, req.params.id);
  res.status(200).json({
    data: {},
  });
});

module.exports = router;
