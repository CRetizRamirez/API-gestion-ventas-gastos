import db from '../database/db.js';

const VentasModel = {
    createVenta: () => { },
    readVentas: () => { },
    readVenta: () => { },
    updateVenta: async (id_Venta) => { },

    deleteVenta: async (id_Venta) => {
        await db.query('CALL sp_EliminarVenta(?)', [id_Venta])
    }
}

export default VentasModel;
