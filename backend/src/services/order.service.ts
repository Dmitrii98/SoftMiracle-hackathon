import { Orders } from '../models/orders.model';
import sequelize from "../db";
import { Recipe } from './../models/recipe.model';
import { Products } from './../models/products.model';
import IRecept from '../dtos/recept.interface';
import { Category } from '../models/categories.model';

export default new class OrderSevice {
    
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

    async getTopProductsAsName(name: string) {
        return await Orders.findOne({where: {product_name: name},
            attributes: ["product_name", "merchant_name", "product_cost", "weight", "picture", "vendor", [sequelize.fn('COUNT', sequelize.col("product_name")), 'count']],
            group: ["product_name", "merchant_name", "product_cost", "weight", "picture", "vendor"],
            order: [["count", "DESC"]]
        }).catch(e => console.log(e));
    }

    async getProducts(products: any) {
      const filtered =  await Promise.all(products.map((product:any) =>{
           return this.getTopProductsAsName(product.title)
       }))
       
       return filtered;
    }

    async getRecepts() {
        let recept: any = await Recipe.findAll({include: Products}).catch(e => console.log(e));

        const responses = Promise.all(recept.map(async (element: any, i: number) => {
            const products = await recept[i].products;

            recept[i].products = await this.getProducts(products);

            const response: IRecept = {
                id: recept[i].id,
                title: recept[i].title,
                text: recept[i].text,
                time: recept[i].time,
                picture: recept[i].picture,
                products: recept[i].products,
                subscription: recept[i].subscription,
            }

            return response;
        }));

        return responses;
    }

    async getReceptsByCategoryes(category: number) {
        let recept: any = await Recipe.findAll({include: Products, where: {category_id: category}}).catch(e => console.log(e));

        const responses = Promise.all(recept.map(async (element: any, i: number) => {
            const products = await recept[i].products;

            recept[i].products = await this.getProducts(products);

            const response: IRecept = {
                id: recept[i].id,
                title: recept[i].title,
                text: recept[i].text,
                time: recept[i].time,
                picture: recept[i].picture,
                products: recept[i].products,
                subscription: recept[i].subscription,
            }

            return response;
        }));

        return responses;
    }

    async getCategoryes() {
        return await Category.findAll();
    }
}