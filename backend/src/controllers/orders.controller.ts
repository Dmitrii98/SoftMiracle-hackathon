import { Request, Response } from 'express';

import { httpStatus } from './../http-status';
import orderService from '../services/order.service';

export default new class OrderController {
    async getTopProducts(req: any, res: Response) {
        return res.status(httpStatus.OK).json(await orderService.getTopProducts());
    }

    async getTopMarkets(req: any, res: Response) {
        return res.status(httpStatus.OK).json(await orderService.getTopMarkets());
    }

    async getReceptsByCategory(req: any, res: Response) {
        try {
            return res.status(httpStatus.OK).json(await orderService.getReceptsByCategoryes(req.query.id));
        } catch(e) {
            return res.status(httpStatus.NOT_FOUND).json({message: "Recept was not found"});
        }
    }

    async getRecepts(req: any, res: Response) {
        try {
            return res.status(httpStatus.OK).json(await orderService.getRecepts());
        } catch(e) {
            return res.status(httpStatus.NOT_FOUND).json({message: "Recept was not found"});
        }
    }

    async getCategoryes(req: any, res: Response) {
        return res.status(httpStatus.OK).json(await orderService.getCategoryes());
    }
}