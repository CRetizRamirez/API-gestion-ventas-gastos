import express from 'express';
import { registrarUsuarioController, loginController } from '../controllers/usuarioController.js';
import { refreshTokenController } from '../controllers/tokenController.js';

const router = express.Router();

router.post("/registrar", registrarUsuarioController);
router.post("/login", loginController);
router.post("/refrescar", refreshTokenController);


export default router;
