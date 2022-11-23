import MovieRepository from "../db/repositories/movie"
import { IMovie } from "../utils/types"

export const createMovie = async (movie:IMovie) =>{
    return MovieRepository.create(movie);
}

export const findOneMovieById = async (movieId:String) => {
    return MovieRepository.selectOne({ where: { id: movieId } })
}

export const findAllWithPagination =async (limitReq:Number, offsetReq:Number) => {
    if (limitReq !== 0 && offsetReq !== 0){
        return MovieRepository.selectWithPagination({ limit: limitReq, offset: offsetReq, order: [['release_date', 'DESC']] });
    }
    if (limitReq !== 0){
        return MovieRepository.selectWithPagination({ limit: limitReq, order: [['release_date', 'DESC']] });
    }
    return MovieRepository.selectWithPagination({ order: [['release_date', 'DESC']] });
}