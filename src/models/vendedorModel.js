import db from '../database/db.js';
import bcrypt from 'bcrypt';

const callProcedure = `CALL sp_VerificarVendedor(?)`;

// Verificar si un Vendedor existe
export const verificarVendedor = async (Vendedor) => {
    const [rows] = await db.query(callProcedure, [Vendedor]);
    return rows[0][0];
}

// Registrar un nevo Vendedor
export const registrarVendedor = async (Vendedor, Contrasena, id_Rol) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Contrasena, salt);  // Contraseña encriptada

    await db.query(
        'INSERT INTO Vendedores(Vendedor, Contrasena, id_Rol) VALUES(?, ?, ?)',
        [Vendedor, hashedPassword, id_Rol]
    );
};

// Validar contraseña del Vendedor al Logear
export const validarContrasena = async (Vendedor, Contrasena)=>{
    const [results] = await db.query(callProcedure, [Vendedor]);
    const output = results[0][0];
    
    if(!output){
        console.log("No existe el Vendedor");
        return {IsValid:0, mensaje:'No existe el Vendedor'}
    }
    
    // Comparar la contraseña con bcrypt
    const isPasswordValid = await bcrypt.compare(Contrasena, output.Contrasena);
    if(!isPasswordValid){
        console.log("Contraseña Incorrecta");
        return {IsValid:0, mensaje:'Contraseña Incorrecta'} 
    }
    return {
        IsValid: 1,
        id_Vendedor: output.id_Vendedor,
        vendedor: output.Vendedor,
        id_Rol: output.id_Rol
    }
}
