import db from '../database/db.js';
import bcrypt from 'bcrypt';

// Verificar si un usuario existe
export const verificarUsuario = async (Usuario) => {
    const [rows] = await db.query('CALL sp_Login(?)', [Usuario]);
    return rows[0][0];
}

// Registrar un nevo Usuario
export const registrarUsuario = async (Usuario, Contrasena, Rol) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Contrasena, salt);  // Contraseña encriptada

    await db.query(
        'INSERT INTO Usuarios(Usuario, Contrasena, Rol) VALUES(?, ?, ?)',
        [Usuario, hashedPassword, Rol]
    );
};
