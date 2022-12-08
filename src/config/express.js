import express from 'express';
import bodyParser from 'body-parser';

import routes from '../router/routes.js';

const app = express();
app.use(bodyParser.json());
app.use(routes);

export { app };