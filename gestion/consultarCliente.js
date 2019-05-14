// SQLite3 
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./gestion.sqlite3');


// this function is used to get all or a single product
exports.getClient = function (id = undefined) {

    let data = [];

    let sql;

    id == undefined ? sql = 'SELECT * FROM cliente' : sql = 'SELECT FROM * producto WHERE id=' + id;

    db.serialize(function () {
        db.each(sql, function (err, row) {
            data.push(row);
        });
    });

    return data;
}

exports.addClient = function (id, nombre, direccion, telefono) {

    db.run("INSERT INTO cliente (id, nombre" +
        ", direccion, telefono) VALUES ($id, $nombre, $direccion" +
        ", $telefono)", {
            $id: id,
            $nombre: nombre,
            $direccion: direccion,
            $telefono: telefono
        });
}

exports.deleteClient = function (id) {

    db.run("DELETE FROM cliente WHERE id=" + id, function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Row(s) deleted ${this.changes}`);
        return `Fila(s) borradas ${this.changes}`;
    });

}