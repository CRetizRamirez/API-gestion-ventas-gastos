import db from '../database/db.js';

export const readDetalleProducto = async (id) => { 
    const [rows]=await db.query('CALL sp_LeerDetalleproducto(?)',[id])
    return rows[0];
}

export const readDetalleProductos = async () => { 
   const [rows]= await db.query('CALL sp_LeerDetalleProductos');
   return rows[0];
}
