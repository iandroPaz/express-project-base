import { IMovie } from '../../utils/types';
import Movie from '../models/movie.models';

export const MovieEntity = Movie;

export default class MovieRepository {
  static async create(movie:IMovie) {
    let movieResponse = null;
    try {
      movieResponse = MovieEntity.create({ 
       id: movie.id,
       title: movie.title,
       original_title: movie.original_title,
       description: movie.description,
       release_date: movie.release_date,
       rt_score: movie.rt_score
      },
      {
        returning:true
      }
      );
    } catch (err) {
        console.log('DB ERROR:', err);
    }
    return movieResponse;
  }
  
  static async selectOne(options) {
    let response = null;
    try {
      options = {
        ...options,
        attributes: options.attributes,
      };
      response = await MovieEntity.findOne(options);
    } catch (err) {
        console.log('DB ERROR:', err);
    }
    return response;
  }

  static async selectAll(options) {
    let response = null;
    try {
      options = {
        ...options,
        attributes: options.attributes
      };
      response = await MovieEntity.findAll(options);
    } catch (err) {
      console.log('DB ERROR:', err);
    }
    return response;
  }

  static async selectWithPagination(options) {
    let response = null;
    try {
      options = {
        ...options,
        distinct: true,
        attributes: options.attributes
      };
      response = await MovieEntity.findAndCountAll(options);
    } catch (err) {
        console.log('DB ERROR:', err);
    }
    return response;
  }

  static async updateById(id, movie, options) {
    let response = null;
    try {
      response = await MovieEntity.update(movie, {
        where: { id },
        transaction: options ? options.transaction : null,
        returning: true,
      });
      [, [response]] = response;
    } catch (err) {
      console.log('DB ERROR:', err);
    }
    return response;
  }
}
