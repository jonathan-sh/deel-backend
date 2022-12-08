import { Router } from 'express';

import { getProfile } from '../middleware/getProfile.js';
import { getContract, getNotFinishedContracts } from '../service/contract.js';

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

route.get(`${path}`, async (req, res) => {
    const { id: profileId } = req.profile;
    const contracts = await getNotFinishedContracts(profileId);
    if (!contracts) return res.status(404).send();
    res.send(contracts);
});





export default route;