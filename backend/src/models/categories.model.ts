import sequelize from '../db';
import {DataTypes} from 'sequelize';

export const Category = sequelize.define('categoryes',
{
    category_id:{
        autoIncrement:true,
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    picture: {
        type: DataTypes.STRING,
        allowNull:false
    }
})