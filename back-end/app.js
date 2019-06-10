'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const usuarioRoute = require('./routes/usuario-route');

mongoose.connect('mongodb://127.0.0.1:27017/web', { useNewUrlParser: true });

app.use(bodyParser.json())

app.use(cors())

app.use('/', usuarioRoute);

app.listen(3000);