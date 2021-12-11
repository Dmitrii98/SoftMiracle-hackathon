import {Sequelize} from 'sequelize'
import dotEnv from 'dotenv'

dotEnv.config();

export default new Sequelize(
    process.env.BASE_NAME || "test",
    process.env.BASE_USER_NAME || "postgres",
    process.env.BASE_USER_PASSWORD || "root",
    {
        dialect: 'postgres',
        host: 'localhost',
        port: Number(process.env.BASE_PORT) || 5432
    }
)