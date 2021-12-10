import bcrypt from 'bcrypt';

import { Orders } from '../models/orders.model';
import sequelize from "../db";

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
}