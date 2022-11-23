import * as express from 'express';
import { checkMovie } from "../schemas/checkMovie";
import { createMovie, findOneMovieById } from "../services/movie";

const routes = express.Router();

routes.post('/', async (req, res) =>{
    const movie = req.body;
    const response = await checkMovie(movie);
    if (response === null || response === undefined)
        return res.sendStatus(400).send('Type Error, verify request body')
    try{
        return res.status(200).send(await createMovie(response))
    }catch(err){
        console.log('ERROR:', err);
        return res.sendStatus(500)
    }
})

routes.get('/:id', async (req, res) =>{
    const movieId = req.params.id;
    console.log('id:', movieId);
    let response = null;
    try{
        response = await findOneMovieById(movieId)
        return response !== null ? res.status(200).send(response) : res.status(400).send('Not found movie');
    }catch(err){
        console.log('ERROR:', err);
        return res.sendStatus(500)
    }
});

export default routes;
