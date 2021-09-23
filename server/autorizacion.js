const express = require("express");
const jwt = require("jsonwebtoken");
const middelwareAuth = express.Router();

const key = "4546199cd28425b99f4dc623fcab4dc5abeea55e";

middelwareAuth.use((req, res, next) => {
  console.log(req.headers);
  const token = req.headers["access-token"];
  if (token) {
    jwt.verify(token, key, (err, decoded) => {
      if (err) {
        return res.json({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({
      mensaje: "Token no proveída.",
    });
  }
});

const payload = {
  loggin: true,
};
const getToken = jwt.sign(payload, key, {
  expiresIn: 1440,
});

module.exports.autorizacion = {
  getToken,
  middelwareAuth,
};
