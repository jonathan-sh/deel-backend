import { Router } from 'express';

import { getProfile } from '../middleware/getProfile.js';
import { getContract } from '../service/contract.js';

const route = Router();
const path = '/contracts';

route.use(getProfile);

route.get(`${path}/:id`, async (req, res) => {
    const { id: contractId } = req.params;
    const { id: profileId } = req.profile;
    const contract = await getContract(contractId, profileId);
    if (!contract) return res.status(404).send();
    res.send(contract);
});



export default route;