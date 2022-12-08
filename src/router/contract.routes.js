import { Router } from 'express';
import { Op } from 'sequelize';

import { getProfile } from '../middleware/getProfile.js';
import { Contract } from '../model/index.js';

const route = Router();
const path = '/contracts';

route.use(getProfile);

route.get(`${path}/:id`, async (req, res) => {
    const { id } = req.params;
    const { id: profileId } = req.profile;
    const where =  { id, [Op.or]:[{ContractorId: profileId}, {ClientId: profileId}] };
    const contract = await Contract.findOne({where});
    if (!contract) return res.status(404).send();
    res.send(contract);
});



export default route;