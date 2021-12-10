import { Request } from 'express';
import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken'
import dotEnv from 'dotenv'

dotEnv.config();

const secretKey = process.env.SECRET || "secret";

export default function jwtVerify(req: any,res: Response,next: NextFunction){
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(401).json({message:"Пользователь не зарегистрирован!"})
        }
        req.user = jwt.verify(token, secretKey);
        next();
    }catch(e){
        return res.status(401).json({message:"Пользователь не зарегистрирован!"})
    }
}