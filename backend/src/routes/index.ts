import {Router} from 'express'

import jwtVerify from '../middlewares/jwt.middleware';
import { orderRoutes } from './order.route';
import { userRoutes } from './user.route';

export const router = Router();

router.use(userRoutes);
router.use(orderRoutes);