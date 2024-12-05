import express from 'express';
import { registrarUsuario } from '../controllers/registerUserController.js';

const router = express.Router();

router.post("/registrar", registrarUsuario);


export default router;