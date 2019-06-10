'use strict';

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type: String,
        required: true,
        unique: true
    },
    senha:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Usuario', schema, 'usuario');