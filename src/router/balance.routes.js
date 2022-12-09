import { Router } from 'express';

import { deposit } from '../service/balance.js';

const route = Router();
const path = '/balances';

route.post(`${path}/deposit/:user_id`, async (req, res) => {
    const { user_id: profileId } = req.params;
    const { value } = req.body;
    const deposited = await deposit(profileId,value);
    if (!deposited) return res.status(404).send();
    res.send(deposited);
});

export default route;