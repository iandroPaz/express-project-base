import { IMovie } from '../utils/types';

export async function checkMovie(movie: any):Promise<IMovie> {
  let response:IMovie;
  response.id = (movie.id !== null && movie.id !== '') && movie.id;
  response.title = (movie.title !== null && movie.title !== '') && movie.title;
  response.original_title = (movie.original_title !== null && movie.original_title !== '') && movie.original_title;
  response.description = (movie.description !== null && movie.description !== '') && movie.description;
  response.release_date = (movie.release_date !== null && movie.release_date !== '') && movie.release_date;
  response.rt_score = (movie.rt_score !== null && movie.rt_score !== '') && movie.rt_score;
  
  return instanceOfMovie(response) && response;
} 

function instanceOfMovie(data: any): data is IMovie {
  return true;
}