import VentasModel from "../models/ventasModel.js";

const VentasController = {
    crear: (req, res) => { },
    leerTodos: (req, res) => { },
    leerUno: (req, res) => { },
    actualizar: (req, res) => { },
    eliminar: async (req, res) => {
        const { id } = req.params;
        try {
            await VentasModel.deleteVenta(id);
            res.json({message:'Venta eliminada correctamente', id_Venta:id})
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al eliminar la venta' })
        }
    }
}

export default VentasController;
