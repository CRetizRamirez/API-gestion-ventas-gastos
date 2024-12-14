import db from '../database/db.js';

const GastosModel = {
    createGasto: () => { },
    readGastos: () => { },
    readGasto: () => { },
    updateGasto: () => { },
    
    deleteGasto: async (id_Gasto) => {
        await db.promisse().query('CALL sp_EliminarGasto', [id_Gasto]);
    }
}

export default GastosModel;
