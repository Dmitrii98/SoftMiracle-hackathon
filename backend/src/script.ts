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
    await sequelize.sync();

    //  const order1 = await Orders.create({
    //     user_id: 12,
    //     check_id: 43,
    //     product_name: "Тесто слоёное",
    //     product_cost: 120,
    //     merchant_name: 'Пятёрочка',
    //     mcc: 2343
    //  });
    //  const order2 = await Orders.create({
    //     user_id: 12,
    //     check_id: 43,
    //     product_name: "Тесто слоёное",
    //     product_cost: 120,
    //     merchant_name: 'Пятёрочка',
    //     mcc: 2343
    //  });
    //  const order3 = await Orders.create({
    //     user_id: 12,
    //     check_id: 43,
    //     product_name: "Яйца",
    //     product_cost: 70,
    //     merchant_name: 'Магнит',
    //     mcc: 2343
    //  });
    //  const order4 = await Orders.create({
    //     user_id: 12,
    //     check_id: 43,
    //     product_name: "Молоко",
    //     product_cost: 48,
    //     merchant_name: 'Перекрёсток',
    //     mcc: 2343
    //  });
    //  const order5 = await Orders.create({
    //     user_id: 12,
    //     check_id: 43,
    //     product_name: "Мука",
    //     product_cost: 52,
    //     merchant_name: 'Аида',
    //     mcc: 2343
    //  });

    // const zavtrak = await Category.create({
    //     title: "Завтрак",
    //     picture: ""
    // });
    // const uzin = await Category.create({
    //     title: "Ужин",
    //     picture: ""
    // });
    // const obed = await Category.create({
    //     title: "Обед",
    //     picture: ""
    // });
    // const fastfood = await Category.create({
    //     title: "Фаст фуд",
    //     picture: ""
    // });
    // const slad = await Category.create({
    //     title: "Сладости",
    //     picture: ""
    // });

    //  const pomidor = await Products.create({
    //       title: "Слоёное тесто"
    //   });
    //   const onion = await Products.create({
    //       title: "Яйца"
    //   });

    //   const curica = await Products.create({
    //       title: "Молоко"
    //   });

    //   const morkovka = await Products.create({
    //       title: "Мука"
    //   });

    //   const cup:any = await Recipe.create({
    //       title: "Торт Наполеон",
    //       picture: "",
    //       text: "Сначала необходимо приготовить заварной крем. Для этого вам необходимо смешать муку с яйцами. Следующим шагом нужно добавить полученную смесь в молоко и заварить крем. После приготовления кремя необходимо осуществить сборку торта",
    //       category_id: 5
    //   });

    //   cup.addProducts(morkovka);
    //   cup.addProducts(curica);
    //   cup.addProducts(onion);
    //   cup.addProducts(pomidor);
    //const recepts = await Recipe.findAll({include: Category});
    //console.log(recepts);
    console.log("server was started on " + process.env.BACKEND_PORT);
}

app.listen(process.env.BACKEND_PORT, bootstrap);