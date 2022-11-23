import './core/db/database';
import * as express from 'express';
import * as cors from 'cors';
import bodyParser = require("body-parser");
import { checkMovie } from './core/schemas/checkMovie';
import { createMovie, findOneMovieById } from './core/services/movie';

const app: express.Application = express();

// support application/json type post data
app.use(bodyParser.json());

//support cors on all requests
app.use(cors());

//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3019;
app.listen(port, () => console.log(`Listenning on port ${port}`));

app.post('/api/movie/', async (req, res) =>{
    const movie = req.body;
    console.log('id:', movie.id);
    const response = await checkMovie(movie);
    if (response === null || response === undefined)
        return res.sendStatus(400)
    try{
        return res.status(200).send(await createMovie(response))
    }catch(err){
        console.log('ERROR:', err);
        return res.sendStatus(400)
    }
})

app.get('/api/movie/:id', async (req, res) =>{
    const movieId = req.params.id;
    console.log('id:', movieId);
    try{
        return res.status(200).send(await findOneMovieById(movieId))
    }catch(err){
        console.log('ERROR:', err);
        return res.sendStatus(400)
    }
})