import { readDetalleProducto, readDetalleProductos } from "../models/detalleProductosModel.js";

const detalleProductos = {

    leerProducto: async (req, res) => {
        const { id } = req.params;
        try {
            const producto= await readDetalleProducto(id);
            res.status(201).json(producto)
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Error al leer el Producto'})
        }
    },

    leerProductos: async (req, res) => {
        try {
            const productos = await readDetalleProductos();
            res.status(201).json(productos);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error al leer Productos' })
        }
    }
}

export default detalleProductos;
