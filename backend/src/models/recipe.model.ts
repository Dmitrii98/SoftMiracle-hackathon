import sequelize from '../db';
import {DataTypes} from 'sequelize';

export const Recipe = sequelize.define('recipes',
{
    id:{
        autoIncrement:true,
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    text:{
        type: DataTypes.STRING,
        allowNull:false
    },
    picture: {
        type: DataTypes.STRING,
        allowNull:false
    }
})