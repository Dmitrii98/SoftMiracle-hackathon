import { Request, Response } from 'express';

import loginDto from '../dtos/login.dto';
import { httpStatus } from '../http-status';
import userDto from '../dtos/user.dto';
import userService from '../services/user.service';

export default new class UserController{
    async registration(req: any, res: Response){
        try{
            const user: userDto = req.body;
            return res.status(httpStatus.OK).json(await userService.registration(user));
        }catch(e){
            return res.status(httpStatus.BAD_REQUEST).json({message: e});
        }
    }

    async login(req: any, res: Response){
        try{
            const user: loginDto = req.body;
            return res.status(httpStatus.OK).json(await userService.login(user));
        }catch(e){
            return res.status(httpStatus.NOT_FOUND).json({message: e});
        }
    }
}