import {Router} from 'express'

import userController from '../controllers/user.controller';
import jwtVerify from '../middlewares/jwt.middleware';

export const userRoutes = Router();

userRoutes.post('/registration', userController.registration);
userRoutes.post('/login', userController.login);