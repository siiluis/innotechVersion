var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');

const { connection } = require("../db/connection");
const { commands } = require("../db/commands/commands");
const { autorizacion } = require("../autorizacion");


const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const Response = require("../models/response");

const APP = "users";
const SUCCESS = "SUCCESS";
// Save
router.post(`/register`, async (req, res) => {
  if (await findEmail(req.body.email)) {
    res.status(400).json(new Response(SUCCESS, "El email ya se encuentra registado"));
  } else {
    req.body.password = encodePassword(req.body.password);
    commands.saveItem(APP, req.body);
    res.status(200).json(new Response(SUCCESS, "Guardado"));
  }

});

router.post(`/login`, async (req, res) => {
  const loginSuccess = await login(req.body.email, req.body.password);
  if (loginSuccess) {
    res
      .status(200)
      .json(new Response(SUCCESS, "loginSuccess", {
        token: autorizacion.getToken,
        email: loginSuccess
      }));
  } else {
    res.status(404).json(new Response(SUCCESS, "Credenciales Incorrectas..."));
  }
});

function findEmail(email) {
  return new Promise(function (myResolve, myReject) {
    connection.query(
      `SELECT ID,email,password FROM users WHERE email = ?`,
      [email],
      function (error, results, fields) {
        if (error) throw error;
        myResolve(results[0]);
      }
    );
  });
}

function login(email, pass) {
  return new Promise(async function (myResolve, myReject) {
    const user = await findEmail(email);
    if (!user) {
      myReject(false)
    } else {
      if (!decodePassword(pass, user.password)) {
        myResolve(false)
      } else {
        myResolve(email)
      }
    }
  });
};


function encodePassword(password) {
  return bcrypt.hashSync(password, salt);
}

function decodePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}


module.exports = router;
