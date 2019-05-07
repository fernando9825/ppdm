const express = require('express')
const consultarProducto = require('./gestion/consultarProducto');

const app = express()
const port = process.env.PORT || 5000;

// cargar productos al iniciar el servidor
let productos = consultarProducto.getProduct();

/**
 * obtener todos los productos
 * ejemplo:
 * http://localhost:3000 
 */
app.get('/', (req, res) => {
    res.send(productos);

    //refrescar productos
    //productos = consultarProducto.getProduct();
});

/**
 * Para realizar la busqueda por id:
 * http://localhost:3000/producto?id=id_producto, 
 * 
 * por barcode:
 * http://localhost:3000/producto?barcode=barcode_producto
 * 
 * por precio: 
 * http://localhost:3000/producto?precio=precio_producto, 
 * 
 * donde:
 *  id_producto, barcode_producto, precio_producto es el valor que se le 
 *  pasa al servidor para que realice la busqueda 
 */
app.get('/producto', (req, res) => {

    let productoEncontrado = [];
    productos.forEach(producto => {
        // buscar id de elemento en la base de datos

        if (req.query.id != undefined && producto.id_producto == req.query.id) {
            productoEncontrado.push(producto);
        }

        if (req.query.barcode != undefined && producto.barcode == req.query.barcode) {

            productoEncontrado.push(producto);
        }

        if (req.query.precio != undefined && producto.precio == req.query.precio) {
            productoEncontrado.push(producto);
        }

        console.log(req.query.barcode);
    });

    if (productoEncontrado.length == 0 || productoEncontrado == undefined)
        productoEncontrado.push("No se ha encontado ningun producto que coincida con ese criterio.");

    res.send(productoEncontrado);
});


/**
 * No es necesario proporcionar el id del producto ya que es autoincrementable, ejemplo:
 * http://localhost:3000/agregar-producto?barcode=123&descripcion=producto%20magico&precio=394&imagen=/c/usersdsd_
 * 
 * Si se desea se puede omitir la imagen, ejemplo:
 * http://localhost:3000/agregar-producto?barcode=123&descripcion=producto%20magico&precio=394
 * 
 * el servidor considera que no se le quizo proporcionar ninguna y asigna una ruta predeterminada para
 * la imagen
 */
app.get('/agregar-producto', (req, res) => {
    let producto = {
        barcode: req.query.barcode,
        descripcion: req.query.descripcion,
        precio: req.query.precio,
        imagen: req.query.imagen
    }

    if (!(producto.barcode == undefined) != 0 && !(producto.precio != undefined)) {
        if (producto.imagen == undefined)
            producto.imagen = "/img/productos/producto-no-disponible.jpg";

        // agregar producto a BD SQLite
        consultarProducto.addProduct(
            producto.barcode,
            producto.descripcion,
            producto.precio,
            producto.imagen
        );

        res.send("Producto agregado.");

        // actualizar lista de productos
        productos = consultarProducto.getProduct();
    } else {
        res.send("Campos incompletos, revise y corrija.");
    }
});

/**
 * Para eliminar productos, solo mediante id, ejemplo: 
 * http://localhost:3000/eliminar-producto?id=2675
 */
app.get('/eliminar-producto', (req, res) => {
    let id = req.query.id;

    res.send(consultarProducto.deleteProduct(id));

    productos = consultarProducto.getProduct();
});

app.listen(port, () => console.log(`Servidor a la escucha en el puerto: ${port}`))