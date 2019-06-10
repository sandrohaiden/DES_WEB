'use strict'

const express = require('express');
const router = express.Router();
const Usuario = require('../model/usuario')

const controller = require('../controller/usuario-controller');

router.get('/usuarios', controller.get);

router.post('/usuarios', controller.post);

router.patch('/usuarios/:id', controller.patch);

router.delete('/usuarios/:id', controller.delete);

module.exports = router;