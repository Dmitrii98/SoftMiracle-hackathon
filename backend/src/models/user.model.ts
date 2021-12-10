import sequelize from '../db';
import {DataTypes} from 'sequelize';

export const User = sequelize.define('users',
{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    login:{
        type:DataTypes.STRING(50),
        unique:true,
        allowNull:false
    },
    mail:{
        type:DataTypes.STRING(50),
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fio:{
        type:DataTypes.STRING(100),
        unique:false,
        allowNull:false
    }
})