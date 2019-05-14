// SQLite3 
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./gestion.sqlite3');


// this function is used to get all or a single product
exports.getPedido = function (id = undefined) {

    let data = [];

    let sql;

    id == undefined ? sql = 'SELECT * FROM pedidos' : sql = 'SELECT * FROM pedidos WHERE id=' + id;

    db.serialize(function () {
        db.each(sql, function (err, row) {
            data.push(row);
        });
    });

    return data;
}

exports.getPedidoDetalle = function (id = undefined) {

    let data = [];

    let sql;

    id == undefined ? sql = 'SELECT * FROM pedidos_detalle' : sql = 'SELECT * FROM pedidos_detalle WHERE id=' + id;

    db.serialize(function () {
        db.each(sql, function (err, row) {
            data.push(row);
        });
    });

    return data;
}

exports.addPedido = function (id_pedido, producto, cliente, fecha, id, cantidad) {

    let pedido = {
        id_pedido: id_pedido, 
        producto: producto,
        cliente: cliente,
        fecha: fecha,

        // parte de pedido detalle
        id: id,
        // comparte el producto
        cantidad: cantidad
    }

    db.run("INSERT INTO pedidos (id_pedido, producto" +
        ", cliente, fecha) VALUES ($id_pedido, $producto, $cliente" +
        ", $fecha); ", {
            $id_pedido: pedido.id_pedido,
            $producto: pedido.producto,
            $cliente: pedido.cliente,
            $fecha: pedido.fecha
    });

    db.run("INSERT INTO pedidos_detalle " + 
    "(id, id_pedido, producto, cantidad) " + 
    "VALUES (null, $id_pedido, $producto, $cantidad); ",
     {
            $id_pedido: pedido.id_pedido,
            $producto: pedido.producto,
            $cantidad: pedido.cantidad
    });
}

