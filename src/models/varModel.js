import db from '../database/db.js';

export const readCategorias = async () => {
    const [rows] = await db.query('SELECT * FROM Categorias')
    return rows;
};

export const readMetodosPago = async () => {
    const [rows] = await db.query('SELECT * FROM MetodosPago');
    return rows;
};

export const readRoles = async () => {
    const [rows] = await db.query('SELECT * FROM Roles');
    return rows;
};

export const readTiendas = async () => {
    const [rows] = await db.query('SELECT * FROM Tiendas');    
    return rows;
};

export const readVendedores = async () => {
    const [rows] = await db.query('SELECT id_Vendedor, Vendedor, id_Rol FROM Vendedores');
    return rows;
};
