import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Configuracion de la conexion a MySql
const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

export default db;
