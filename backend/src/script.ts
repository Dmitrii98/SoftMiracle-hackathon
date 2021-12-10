import express from 'express'
import dotEnv from 'dotenv'
import cors from 'cors'

import { router } from './routes/index';
import sequelize from "./db";

dotEnv.config();
const app = express();

app.use(express.json());
app.use('/api', router);
app.use(cors({
    credentials:true,
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}))

async function bootstrap(){
    await sequelize.authenticate();
    //await sequelize.sync();
    console.log("server was started on " + process.env.BACKEND_PORT);
}

app.listen(process.env.BACKEND_PORT, bootstrap);