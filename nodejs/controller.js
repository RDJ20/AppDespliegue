const db = require('./db.js');

exports.create = function(req, res) {
    let user = {id: req.body.id, nombre: req.body.nombre, apellido: req.body.apellido, email: req.body.email};
    db.query('INSERT INTO usuarios SET ?', user, function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};

exports.read = function(req, res) {
    db.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id], function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};

exports.update = function(req, res) {
    let user = {nombre: req.body.nombre, apellido: req.body.apellido, email: req.body.email};
    db.query('UPDATE usuarios SET ? WHERE id = ?', [user, req.params.id], function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};

exports.delete = function(req, res) {
    db.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};