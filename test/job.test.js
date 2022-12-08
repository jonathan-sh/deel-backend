import { getUnpaidJobs } from '../src/service/job.js';

describe('Getting unpaid jobs', () => {
    test('It should response the jobs', async () => {
        const jobs = await getUnpaidJobs(7);
        expect(Array.isArray(jobs)).toBeTruthy();
        expect(jobs).toHaveLength(2);
    });

    test('It should not response the jobs', async () => {
        const jobs = await getUnpaidJobs(5);
        expect(Array.isArray(jobs)).toBeTruthy();
        expect(jobs).toHaveLength(0);
    });
});