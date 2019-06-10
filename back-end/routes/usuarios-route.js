'use strict'

const express = require('express');
const router = express.Router();
const Usuario = require('../model/usuario')

const controller = require('../controller/usuarios-controller');

router.get('/usuarios', controller.get);

router.post('/usuarios', controller.post);

router.put('/usuarios/:id', controller.put);

router.delete('/usuarios/:id', controller.delete);

module.exports = router;