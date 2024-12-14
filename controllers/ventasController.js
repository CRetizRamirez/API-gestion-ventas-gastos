import VentasModel from "../models/ventasModel.js";

const VentasController = {
    crear: (req, res) => { },

    leerTodas: async (req, res) => {
        const { FechaVenta } = req.body;
        try {
            const ventas = await VentasModel.readVentas(FechaVenta);
            res.json(ventas)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener las Ventas' })
        }
    },

    leerUna: async (req, res) => {
        const { id } = req.params;
        try {
            const venta = await VentasModel.readVenta(id)
            res.json(venta)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al obtener la Venta' })
        }
    },

    actualizar: (req, res) => { },

    eliminar: async (req, res) => {
        const { id } = req.params;
        try {
            await VentasModel.deleteVenta(id);
            res.json({ message: 'Venta eliminada correctamente', id_Venta: id })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al eliminar la venta' })
        }
    }
}

export default VentasController;
