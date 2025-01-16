import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Iniciar el servidor
const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT,()=>{
    console.log(`Servidor corriendo en el puerto: ${SERVER_PORT}`);
})
