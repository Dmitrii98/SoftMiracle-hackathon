import {Router} from 'express'

import orderController from '../controllers/orders.controller';

export const orderRoutes = Router();

orderRoutes.get('/getTopProducts', orderController.getTopProducts);
orderRoutes.get('/getTopMarkets', orderController.getTopProducts);
orderRoutes.get('/getReceptsByCategory', orderController.getReceptsByCategory);
orderRoutes.get('/getCategoryes', orderController.getCategoryes);