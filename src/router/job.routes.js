import { Router } from 'express';

import { getProfile } from '../middleware/getProfile.js';
import { getUnpaidJobs } from '../service/job.js';

const route = Router();
const path = '/jobs';

route.use(getProfile);

route.get(`${path}/unpaid`, async (req, res) => {
    const { id: profileId } = req.profile;
    const jobs = await getUnpaidJobs(profileId);
    if (!jobs) return res.status(404).send();
    res.send(jobs);
});

export default route;