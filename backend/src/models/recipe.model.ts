import sequelize from '../db';
import {DataTypes} from 'sequelize';

export const Recipe = sequelize.define('recipes',
{
    title: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    text:{
        type: DataTypes.JSON,
        allowNull:false
    },
    picture: {
        type: DataTypes.STRING,
        allowNull:false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    time: {
        type: DataTypes.INTEGER
    },
    subscription: {
        type: DataTypes.JSON
    }
})