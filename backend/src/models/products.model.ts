import sequelize from '../db';
import {DataTypes} from 'sequelize';

export const Products = sequelize.define('products',
{
    id:{
        autoIncrement:true,
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull:false
    }
})