import {Router} from 'express'

import orderController from '../controllers/orders.controller';

export const orderRoutes = Router();

orderRoutes.get('/getTopProducts', orderController.getTopProducts);
orderRoutes.get('/getTopMarkets', orderController.getTopProducts);
orderRoutes.get('/getRecepts', orderController.getRecepts);