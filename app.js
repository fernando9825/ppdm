const express = require('express')
const consultarProducto = require('./gestion/consultarProducto');

const app = express()
const port = 3000

// cargar productos al iniciar el servidor
let productos = consultarProducto.getProduct();

/*
    obtener todos los productos
    ejemplo:
    localhost:3000
*/

app.get('/', (req, res) => {
    res.send(productos);

    //refrescar productos
    productos = consultarProducto.getProduct();
});

app.get('/producto', (req, res) => {

    let productoEncontrado = [];
    productos.forEach(producto => {
        // buscar id de elemento en la base de datos
        if (producto.id_producto == req.query.id) {
            productoEncontrado.push(producto);
        }
    });

    res.send(productoEncontrado);

    // refrescar productos
    productos = consultarProducto.getProduct();
});


/* ejemplo:
    http://localhost:3000/agregar-producto?barcode=123&descripcion=producto%20magico&porcentaje_utilidad1=394&imagen=/c/usersdsd_
*/
app.get('/agregar-producto', (req, res) => {
    const producto = {
        barcode: req.query.barcode,
        descripcion: req.query.descripcion,
        porcentaje_utilidad1: req.query.porcentaje_utilidad1,
        imagen: req.query.imagen
    }

    consultarProducto.agregarProducto(
        producto.barcode, 
        producto.descripcion, 
        producto.porcentaje_utilidad1, 
        producto.imagen
    );
        
    res.send("Producto agregado: " + JSON.stringify(producto));
    // refrescar productos
    productos = consultarProducto.getProduct();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))