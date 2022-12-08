import { getUnpaidJobs, payJob } from '../src/service/job.js';

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

describe('Paying a jobs', () => {
    test('It should pay the job', async () => {
        const paid = await payJob(1, 2);
        expect(paid).toBe('paid');
    });


    test('It should not even found the job', async () => {
        const paid = await payJob(8, 2);
        expect(paid).toBe('job paid or not found');
    });

    test('It should not pay the job', async () => {
        const paid = await payJob(4, 5);
        expect(paid).toBe('insufficient balance :(');
    });
});