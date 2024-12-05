import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);


app.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000");
})
