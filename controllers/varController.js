import { readCategorias, readMetodosPago, readRoles, readTiendas, readVendedores } from "../models/varModel.js";

const varController = {

    leerCategorias: async (req, res) => {
        try {
            const categorias = await readCategorias();
            res.status(201).json(categorias)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al leer Categorias' })
        }
    },

    leerMetodosPago: async (req, res) => {
        try {
            const metodosPago = await readMetodosPago();
            res.status(201).json(metodosPago);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al leer Metodos de Pago' })
        }
    },

    leerRoles: async (req, res) => {
        try {
            const roles = await readRoles();
            res.status(201).json(roles)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error al leer Roles' })
        }
    },

    leerTiendas: async (req, res) => {
        try {
            const tiendas = await readTiendas();
            res.status(201).json(tiendas);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error al leer Tiendas' })
        }
    },

    leerVendedores: async (req, res) => {
        try {
            const vendedores = await readVendedores();
            res.status(201).json(vendedores)
        } catch (error) {
            console.log(error);
            res.status(500).json({ messag: 'Error al leer Vendedores' });
        }
    }

}

export default varController;
