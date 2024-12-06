import db from '../database/db.js';
import bcrypt from 'bcrypt';

const callProcedure = `CALL sp_Login(?)`;

// Verificar si un usuario existe
export const verificarUsuario = async (Usuario) => {
    const [rows] = await db.query(callProcedure, [Usuario]);
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

// Validar contraseña del Usuario al Logear
export const validarContrasena = async (Usuario, Contrasena)=>{
    const [results] = await db.query(callProcedure, [Usuario]);
    const output = results[0][0];

    if(!output){
        console.log("No existe el Usuario");
        return {IsValid:0, mensaje:'No existe el Usuario'}
    }

    // Validamos la contraseña con bcrypt
    const isPasswordValid = await bcrypt.compare(Contrasena, output.Contrasena);
    if(!isPasswordValid){
        console.log("Contraseña Incorrecta");
        return {IsValid:0, mensaje:'Contraseña Incorrecta'} 
    }
    return {
        IsValid: 1,
        UsuarioId: output.UsuarioId,
        Usuario: output.Usuario,
        Rol: output.Rol
    }
}
