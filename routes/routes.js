import express from 'express';
import { registrarUsuarioController } from '../controllers/usuarioController.js';
import { loginController } from '../controllers/LoginController.js';

const router = express.Router();

router.post("/registrar", registrarUsuarioController);
router.post("/login", loginController);


export default router;
