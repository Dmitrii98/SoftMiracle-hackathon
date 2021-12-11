import { Category } from './models/categories.model';
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
    Category.hasOne(Recipe,{
        foreignKey: 'category_id'
    });
    Recipe.belongsTo(Category);

    await sequelize.authenticate();
    //await sequelize.sync();
         
    console.log("server was started on " + process.env.BACKEND_PORT);
}

app.listen(process.env.BACKEND_PORT, bootstrap);