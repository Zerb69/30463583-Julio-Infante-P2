var express = require('express');
const db = require('../database');
var router = express.Router();

router.post('/', function(req, res, next) {
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let cedula = req.body.cedula;
  let correo = req.body.correo;

  db.insert(nombre, apellido, cedula, correo);

  res.redirect('/');
});

module.exports = router;