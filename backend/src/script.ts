import { Category } from './models/categories.model';
import { Products } from './models/products.model';
import express from 'express'
import dotEnv from 'dotenv'
import cors from 'cors'

import { router } from './routes/index';
import sequelize from "./db";
import { Recipe } from './models/recipe.model';
import { RecipesProducts } from './models/recipes-orders';

dotEnv.config();
const app = express();

app.use(express.json());
app.use(express.static('files'));
app.use('/api', router);

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

app.listen(process.env.BACKEND_PORT || 5000, bootstrap);