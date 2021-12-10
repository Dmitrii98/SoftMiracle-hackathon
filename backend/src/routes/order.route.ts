import {Router} from 'express'

import orderService from '../services/order.service';

export const orderRoutes = Router();

orderRoutes.get('/getTopProducts', orderService.getTopProducts);
orderRoutes.get('/getTopMarkets', orderService.getTopProducts);