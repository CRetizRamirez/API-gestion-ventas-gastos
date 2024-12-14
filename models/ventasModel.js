import db from '../database/db.js';

const VentasModel = {
    createVenta: () => { },

    readVentas: async (FechaVenta) => {
        const [rows] = await db.query('CALL sp_LeerVentas(?)', [FechaVenta]);
        return rows[0];
    },

    readVenta: async (id_Venta) => {
        const [row] = await db.query('CALL sp_LeerVenta(?)', [id_Venta]);
        return row[0];
    },

    updateVenta: async (id_Venta) => { },

    deleteVenta: async (id_Venta) => {
        await db.query('CALL sp_EliminarVenta(?)', [id_Venta])
    }
}

export default VentasModel;
