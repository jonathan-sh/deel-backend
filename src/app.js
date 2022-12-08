import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './config/sequelize.js';
import { getProfile } from './middleware/getProfile.js';

import {Contract} from './model/index.js';

const app = express();
app.use(bodyParser.json());
app.set('sequelize', sequelize);
app.set('models', sequelize.models);

/**
 * FIX ME!
 * @returns contract by id
 */
app.get('/contracts/:id', getProfile, async (req, res) => {
    const { id } = req.params;
    const contract = await Contract.findOne({ where: { id } });
    if (!contract) return res.status(404).end();
    res.json(contract);
});

export { app };
