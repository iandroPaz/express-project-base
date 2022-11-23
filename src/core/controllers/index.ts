import * as express from 'express';

const routers = express.Router();

routers.use('/movie', require('./movie').default);

export default routers;