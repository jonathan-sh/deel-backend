import { Router } from 'express';

import { getProfile } from '../middleware/getProfile.js';
import { Contract } from '../model/index.js';

const route = Router();
const path = '/contracts';

route.use(getProfile);

route.get(`/${path}/:id'`, async (req, res) => {
    const { id } = req.params;
    const contract = await Contract.findOne({ where: { id } });
    if (!contract) return res.status(404).end();
    res.json(contract);
});

export default route;