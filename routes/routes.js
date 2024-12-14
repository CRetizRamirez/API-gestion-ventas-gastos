import express from 'express';
import { registrarVendedorController, loginController } from '../controllers/vendedorController.js';
import { refreshToken } from '../middlewares/refreshToken.js';
import { authToken } from '../middlewares/authToken.js';
import VentasController from '../controllers/ventasController.js';

const router = express.Router();

router.post("/auth/login", loginController);
router.post("/auth/register", registrarVendedorController);
router.post("/auth/refresh", refreshToken);
router.post("/protected", authToken, (req, res) => {
    res.json({
        mensaje: "Ruta protejida accesible",
        vendedor: req.user
    })
});

router.get("/ventas", VentasController.leerTodas);
router.get("/ventas/:id", VentasController.leerUna);
router.post("/ventas", VentasController.crear);
router.put("/ventas/:id", VentasController.actualizar);
router.delete("/ventas/:id", VentasController.eliminar);

router.get("/gastos");
router.get("/gastos/:id");
router.post("/gastos");
router.put("/gastos/:id");
router.delete("/gastos/:id");

router.get("/reportes/ventas");
router.get("/reportes/gastos");
router.get("/reportes/ganancia-neta");

// ******************* Ejemplo de rutas protegidas ****************
router.get("/protected/reportes", authToken, (req, res) => {
    // Aquí puedes definir la lógica para obtener los reportes
    // Ejemplo de datos simulados
    const reportes = [
        { id: 1, nombre: "Reporte A", fecha: "2024-11-01" },
        { id: 2, nombre: "Reporte B", fecha: "2024-11-02" },
    ];

    res.json({
        mensaje: "Reportes obtenidos exitosamente",
        usuario: req.user, // Información del usuario autenticado
        data: reportes,
    });
});

export default router;
