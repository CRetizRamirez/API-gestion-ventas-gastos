import { verificarUsuario, registrarUsuario } from "../models/usuarioModel.js"

export const registrarUsuarioController = async (req, res) => {
    const {Usuario, Contrasena, Rol} = req.body;

    try {
        // Verifica si el usuario existe
        const user = await verificarUsuario(Usuario);
        if(user){
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
