import { Products } from './models/products.model';
import express from 'express'
import dotEnv from 'dotenv'
import cors from 'cors'

import { router } from './routes/index';
import sequelize from "./db";
import { Orders } from './models/orders.model';
import { Recipe } from './models/recipe.model';
import { RecipesProducts } from './models/recipes-orders';

dotEnv.config();
const app = express();

app.use(express.json());
app.use('/api', router);
app.use(cors({
    credentials:true,
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}))

async function bootstrap(){
    Recipe.belongsToMany(Products, {through: RecipesProducts});
    Products.belongsToMany(Recipe, {through: RecipesProducts});
    await sequelize.authenticate();
    await sequelize.sync();
    // const pomidor = await Products.create({
    //     title: "Помидоры"
    // });
    // const onion = await Products.create({
    //     title: "Лук"
    // });

    // const curica = await Products.create({
    //     title: "Курица"
    // });

    // const morkovka = await Products.create({
    //     title: "Морковка"
    // });

    // const cup:any = await Recipe.create({
    //     title: "Суп",
    //     picture: "",
    //     text: "Сначала необходимо сварить курицу. Через 20 минут добавить нарезанную картошку. Варить в течение ещё 20 минут, после чего добавить укроп, лаврушку и лапшу."
    // });

    // cup.addProducts(morkovka);
    // cup.addProducts(curica);
    // cup.addProducts(onion);
    // cup.addProducts(pomidor);

    console.log("server was started on " + process.env.BACKEND_PORT);
}

app.listen(process.env.BACKEND_PORT, bootstrap);