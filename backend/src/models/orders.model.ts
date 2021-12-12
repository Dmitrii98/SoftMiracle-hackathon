import sequelize from '../db';
import {DataTypes} from 'sequelize';

export const Orders = sequelize.define('orders',
{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    check_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    product_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    product_cost:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    merchant_name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    weight: {
        type: DataTypes.INTEGER,
    },
    mcc:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    picture: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    vendor: {
        type: DataTypes.TEXT,
        allowNull:false
    }
})