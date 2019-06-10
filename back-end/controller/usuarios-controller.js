const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.get = (req, res, next) => {
    Usuario.find(function (err, docs) {
        res.send(docs);
    });
}

exports.post = (req, res, next) => {
    var usuario = new Usuario(req.body);
    usuario.save();
    res.send('ok');
}

exports.put = (req, res, next) => {
    var usuario = new Usuario();
    Usuario.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
        if (err) return res.status(500).send(err);
        return res.send(todo);
    })
}

exports.delete = (req, res, next) => {
    Usuario.findByIdAndDelete(req.params.id, (err, todo) => {
        if (err) return res.status(500).send(err);
        return res.send(todo);
    })
}