import { createMovie } from '../services/movie';
import { instance } from '../utils/api';
import { IMovie } from '../utils/types';

(async () => {
  let movies = []
  const params = {
    fields: `id,title,original_title,description,release_date,rt_score`,
    limit: 200
  };

  try {
    const response = await instance.get('/films', { params });
    movies = response.data;
  } catch (e) {
    console.log('ERROR GET FILMS:', e);
  }

  movies.forEach(async (movie:IMovie) => {
    try{
     await createMovie(movie);
    }catch (err){
      console.log('DB ERROR:', err);
    }
  });

  console.log("Quantity movies from API:", movies.length);

})();