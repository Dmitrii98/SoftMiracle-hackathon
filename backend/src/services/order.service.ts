import bcrypt from 'bcrypt';

import { Orders } from '../models/orders.model';
import sequelize from "../db";
import { Recipe } from './../models/recipe.model';
import { Products } from './../models/products.model';

export default new class OrderSevice{
    
    async getTopProducts() {
        return await Orders.findAll({
            attributes: ["product_name", [sequelize.fn('COUNT', sequelize.col("product_name")), 'count']],
            group: ["product_name"],
            order: [["count", "DESC"]]
        })
    }

    async getTopMarkets() {
        return await Orders.findAll({
            attributes: ["merchant_name", [sequelize.fn('COUNT', sequelize.col("merchant_name")), 'count']],
            group: ["merchant_name"],
            order: [["count", "DESC"]]
        })
    }

    async getRecepts(){
        return await Recipe.findAll({include: Products});
    }
}