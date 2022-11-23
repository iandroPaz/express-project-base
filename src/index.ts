import './core/db/database';
import './core/mechanisms/requests';
import * as express from 'express';
import * as cors from 'cors';
import bodyParser = require("body-parser");
import routers from './core/controllers';

const app: express.Application = express();

// support application/json type post data
app.use(bodyParser.json());

//support cors on all requests
app.use(cors());

//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3019;
app.listen(port, () => console.log(`Listenning on port ${port}`));

app.use('/api', routers)

export default app;