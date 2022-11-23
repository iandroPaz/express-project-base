import { Op } from "sequelize";
import MovieRepository from "../db/repositories/movie"
import { IMovie } from "../utils/types"

export const createMovie = async (movie:IMovie) =>{
    return MovieRepository.create(movie, null);
}

export const findOneMovieById =async (movieId:String) => {
    return MovieRepository.selectOne({ where: { id: movieId } })
}