import {Table, Column, Model, PrimaryKey, IsUUID, DataType} from 'sequelize-typescript';
import sequelize from '../database';
export const MovieN = 'Not a model';
export const NMovie = 'Not a model';

const Movie = sequelize.define('Movie', {
    id: {
        primaryKey: true,
        type: DataType.STRING,
        allowNull: false
    },
    title: {
        type: DataType.STRING
    },
    original_title: {
        type: DataType.STRING
    },
    description: {
        type: DataType.TEXT
    },
    release_date: {
        type: DataType.INTEGER
    },
    rt_score: {
        type: DataType.INTEGER
    },

  }, 
  {
    tableName: 'tb_movie',
    timestamps: true,
  }
);

export default Movie;
