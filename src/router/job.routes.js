import { Router } from 'express';

import { getProfile } from '../middleware/getProfile.js';
import { getUnpaidJobs, payJob } from '../service/job.js';

const route = Router();
const path = '/jobs';

route.use(getProfile);

route.get(`${path}/unpaid`, async (req, res) => {
    const { id: profileId } = req.profile;
    const jobs = await getUnpaidJobs(profileId);
    if (!jobs) return res.status(404).send();
    res.send(jobs);
});

route.get(`${path}/:job_id/pay`, async (req, res) => {
    const { id: profileId } = req.profile;
    const { job_id: jobId } = req.params;
    const jobs = await payJob(profileId, jobId);
    if (!jobs) return res.status(404).send();
    res.send(jobs);
});

export default route;