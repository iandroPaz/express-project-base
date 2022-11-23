import * as express from 'express';

const routers = express.Router();

routers.use('/', require('./movie').default);

export default routers;