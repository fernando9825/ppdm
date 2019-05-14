// SQLite3 
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./gestion.sqlite3');


// this function is used to get all or a single product
exports.getProduct = function (id = undefined) {

    let data = [];

    let sql;

    id == undefined ? sql = 'SELECT * FROM producto' : sql = 'SELECT * FROM producto WHERE id_producto=' + id;

    db.serialize(function () {
        db.each(sql, function (err, row) {
            data.push(row);
        });
    });

    return data;
}

exports.addProduct = function (barcode, descripcion, precio, imagen) {

    db.run("INSERT INTO producto (barcode, descripcion" +
        ", precio, imagen) VALUES ($barcode, $descripcion, $precio" +
        ", $imagen)", {
            $barcode: barcode,
            $descripcion: descripcion,
            $precio: precio,
            $imagen: imagen
        });
}

exports.deleteProduct = function (id) {

    db.run("DELETE FROM producto WHERE id_producto=" + id, function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Row(s) deleted ${this.changes}`);
        return `Fila(s) borradas ${this.changes}`;
    });

}
