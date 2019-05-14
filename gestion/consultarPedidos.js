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

/*exports.getPedidoDetalle = function (id = undefined) {

    let data = [];

    let sql;

    id == undefined ? sql = 'SELECT * FROM pedidos_detalle' : sql = 'SELECT * FROM pedidos_detalle WHERE id=' + id;

    db.serialize(function () {
        db.each(sql, function (err, row) {
            data.push(row);
        });
    });

    return data;
}*/

exports.addPedido = function (id_pedido, producto, cliente, fecha, cantidad, precio, total) {

    let pedido = {                   
        id_pedido: id_pedido, 
        producto: producto,
        cliente: cliente,
        fecha: fecha,
        cantidad: cantidad,
        precio: precio,
        total: total
    }

    db.run("INSERT INTO pedidos (id_pedido, cliente, producto, precio, cantidad, total, fecha)" + 
        "VALUES ($id_pedido, $cliente, $producto, $precio, $cantidad, $total, $fecha); ", {
            $id_pedido: pedido.id_pedido,
            $cliente: pedido.cliente,
            $producto: pedido.producto,
            $precio: pedido.precio,
            $cantidad: pedido.cantidad,
            $total: pedido.total,
            $fecha: pedido.fecha
    });

}

