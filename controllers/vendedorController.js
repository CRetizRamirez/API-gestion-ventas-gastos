import jwt from 'jsonwebtoken';
import { verificarVendedor, registrarVendedor, validarContrasena } from "../models/vendedorModel.js"

export const registrarVendedorController = async (req, res) => {
    const { Vendedor, Contrasena, id_Rol } = req.body;

    try {
        // Verifica si el Vendedor existe
        const user = await verificarVendedor(Vendedor);
        if (user) {
            return res.status(401).send('Ya existe este nombre de Vendedor');
        }

        // Registrar al nuevo Vendedor
        await registrarVendedor(Vendedor, Contrasena, id_Rol);

        return res.status(201).send('Vendedor registrado con éxito');

    } catch (error) {
        console.error('Error al registrar al Vendedor', error);
        return res.status(500).send('Error al registrar Vendedor')
    }
}

export const loginController = async (req, res) => {
    const { Vendedor, Contrasena } = req.body;

    if (!Vendedor || !Contrasena) {
        return res.status(400).json({ mensaje: 'Vendedor y Contrasena son requeridos' });
    };
    try {
        const result = await validarContrasena(Vendedor, Contrasena);
        const { IsValid, id_Vendedor, vendedor, id_Rol } = result
        if(IsValid == 1){  //Si es valido firmamos un Token
            const token = jwt.sign(
                {id_Vendedor, vendedor, id_Rol},
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
