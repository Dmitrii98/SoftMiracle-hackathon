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
    //await sequelize.sync();
    
    // const pomidor = await Products.create({
    //      title: "Слоёное тесто"
    //  });
    //  const onion = await Products.create({
    //      title: "Яйца"
    //  });

    //  const curica = await Products.create({
    //      title: "Молоко"
    //  });

    //  const morkovka = await Products.create({
    //      title: "Мука"
    //  });

    //  const cup:any = await Recipe.create({
    //      title: "Торт Наполеон",
    //      picture: "",
    //      text: "Сначала необходимо приготовить заварной крем. Для этого вам необходимо смешать муку с яйцами. Следующим шагом нужно добавить полученную смесь в молоко и заварить крем. После приготовления кремя необходимо осуществить сборку торта"
    //  });

    //  cup.addProducts(morkovka);
    //  cup.addProducts(curica);
    //  cup.addProducts(onion);
    //  cup.addProducts(pomidor);

    console.log("server was started on " + process.env.BACKEND_PORT);
}

app.listen(process.env.BACKEND_PORT, bootstrap);