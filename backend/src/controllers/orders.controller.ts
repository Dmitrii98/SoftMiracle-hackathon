import { Request, Response } from 'express';

import orderService from '../services/order.service';

export default new class OrderController{
    async getTopProducts(req: any, res: Response){
        return res.json(await orderService.getTopProducts());
    }

    async getTopMarkets(req: any, res: Response){
        return res.json(await orderService.getTopMarkets());
    }

    async getReceptsByCategory(req: any, res: Response){
        return res.json(await orderService.getReceptsByCategoryes(req.query.id));
    }

    async getCategoryes(req: any, res: Response){
        return res.json(await orderService.getCategoryes());
    }
}