import express from 'express';
import { registrarUsuarioController, loginController } from '../controllers/usuarioController.js';

const router = express.Router();

router.post("/registrar", registrarUsuarioController);
router.post("/login", loginController);


export default router;
