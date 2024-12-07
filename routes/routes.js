import express from 'express';
import { registrarUsuarioController, loginController } from '../controllers/usuarioController.js';
import { refreshToken } from '../middlewares/refreshToken.js';
import { authToken } from '../middlewares/authToken.js';

const router = express.Router();

router.post("/login", loginController);
router.post("/registrar", registrarUsuarioController);
router.post("/refrescar", refreshToken);
router.post("/protected", authToken, (req, res) => {
    res.json({
        mensaje: "Ruta protejida accesible",
        usuario: req.user
    })
});

export default router;
