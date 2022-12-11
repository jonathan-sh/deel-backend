import { Router } from 'express';
import { getBestClients, getBestProfession } from '../service/admin.js';

const route = Router();
const path = '/admin';
//start=<date>&end=<date>
route.get(`${path}/best-profession`, async (req, res) => {
    const { start, end } = req.query;
    const profession = await getBestProfession(start, end);
    if (!profession) return res.status(404).send();
    res.send(profession);
});

route.get(`${path}/best-clients`, async (req, res) => {
    const { start, end, limit } = req.query;
    const clients = await getBestClients(start, end, limit);
    if (!clients) return res.status(404).send();
    res.send(clients);
});

export default route;