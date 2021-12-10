import { Model } from 'sequelize';
import dotEnv from 'dotenv'

import { User } from './../models/user.model';
import jwt from 'jsonwebtoken';

dotEnv.config();

export default new class TokenService{
    getToken(user: Model<typeof User>) {
        return jwt.sign({
            id: user.get('id'),
            login: user.get('mail'),
            mail: user.get('login'),
        }, process.env.SECRET_KEY || "secret", {expiresIn:'48h'});
    }
}