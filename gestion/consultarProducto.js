const mysql = require('mysql');

const host = 'localhost',
      user = 'root',
      password = '',
      database = 'gestion';


exports.getProduct = function (id = undefined) {

    const connection = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });

    let data = [];
    connection.connect();

    let query;
    id == undefined ? query = "SELECT p.id_producto, p.descripcion, p.barcode," + 
    " s.costo_promedio, p.porcentaje_utilidad1, p.imagen FROM producto AS p " + 
    "JOIN stock AS s ON(p.id_producto=s.id_producto) GROUP BY p.id_producto" + 
    " ORDER BY p.id_producto" : query = 'SELECT * from producto where id=' + id;

    connection.query(query, function (err, rows, fields) {
        if (err) throw err

        rows.forEach(element => {
            //data.push(JSON.stringify(element));
            //console.log(element)
            //console.log()
            data.push({
                id_producto : element.id_producto,
                descripcion : element.descripcion,
                barcode : element.barcode,
                costo: element.costo_promedio,
                precio : element.porcentaje_utilidad1,
                imagen: element.imagen
            })
        });
    })


    //connection.end();
    //console.log(data);
    return data;
}

exports.agregarProducto = function (barcode, descripcion, porcentaje_utilidad1, imagen) {
    const connection = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });

    connection.connect();

    let sql = "INSERT INTO producto (barcode, descripcion, porcentaje_utilidad1, imagen) " +
        "VALUES ('" + barcode + "', '" + descripcion + "' ," + porcentaje_utilidad1 + ",'" + imagen + "')";
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) throw err;

        console.log("1 record inserted");
    });

}
