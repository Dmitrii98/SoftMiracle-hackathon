import bcrypt from 'bcrypt';

import loginDto from "../dtos/login.dto";
import userDto from "../dtos/user.dto";
import { User } from './../models/user.model';
import tokenService from './token.service';

export default new class UserSevice{
    
    async registration(user: userDto) {
        if(await User.findOne({where: {login: user.login}})){
            throw Error("login is exist");
        }
        if(await User.findOne({where: {login: user.mail}})){
            throw Error("mail is exist");
        }
        const password = bcrypt.hashSync(user.password, 1);
        const createdUser = await User.create({...user, password});
        return {token: `Bearer ${tokenService.getToken(createdUser)}`};
    }

    async login(user: loginDto) {
        const findUser = await User.findOne({where: {login: user.login}});
        if(!findUser) throw Error("user is not found");
        if(bcrypt.compareSync(user.password, findUser.get('password') as string)){
            return {token: `Bearer ${tokenService.getToken(findUser)}`};
        }
        throw Error("Password is wrong!");
    }
}