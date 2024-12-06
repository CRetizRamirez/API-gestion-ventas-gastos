import jwt from 'jsonwebtoken';
import { verificarUsuario, registrarUsuario, validarContrasena } from "../models/usuarioModel.js"

export const registrarUsuarioController = async (req, res) => {
    const { Usuario, Contrasena, Rol } = req.body;

    try {
        // Verifica si el usuario existe
        const user = await verificarUsuario(Usuario);
        if (user) {
            return res.status(401).send('Ya existe este nombre de Usuario');
        }

        // Registrar al nuevo usuario
        await registrarUsuario(Usuario, Contrasena, Rol);

        return res.status(201).send('Usuario registrado con éxito');

    } catch (error) {
        console.error('Error al registrar al Usuario', error);
        return res.status(500).send('Error al registrar usuario')
    }
}

export const loginController = async (req, res) => {
    const { Usuario, Contrasena } = req.body;

    if (!Usuario || !Contrasena) {
        return res.status(400).json({ mensaje: 'Usuario y contraseña son requeridos' });
    };
    try {
        const result = await validarContrasena(Usuario, Contrasena);
        const { IsValid, UsuarioId, UsuarioOutput, Rol } = result
        if(IsValid == 1){  //Si es valido firmamos un Token
            const token = jwt.sign(
                {UsuarioId, UsuarioOutput, Rol},
                process.env.SECRET_KEY,
                {expiresIn: '1h'}
            );
            return res.json({token, messaje:'Autenticación exitosa'})
        }
        return res.status(401).json({messaje:"Credenciales Incorrectas"})
    } catch (error) {
        return res.status(500).json({messaje:'Error interno del servidor'})
    }
}
