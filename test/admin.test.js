import { getBestProfession, getBestClients } from '../src/service/admin.js';

describe('Getting best profession', () => {
    test('It should response the profession', async () => {
        const { profession } = await getBestProfession('2019-12-10 13:17:36.088 +00:00', '2022-12-11 13:18:36.088 +00:00');
        expect(profession).toBe('Programmer');
    });

    test('It should not response the profession', async () => {
        const contract = await getBestProfession(3, 7);
        expect(contract).toBeUndefined();
    });
});


describe('Getting the best clients', () => {
    test('It should response the two clients', async () => {
        const clients = await getBestClients('2000-12-10 13:17:36.088 +00:00', '2022-12-10 13:17:36.088 +00:00');
        expect(Array.isArray(clients)).toBeTruthy();
        expect(clients).toHaveLength(2);
    });

    test('It should response the three clients', async () => {
        const clients = await getBestClients('2000-12-10 13:17:36.088 +00:00', '2022-12-10 13:17:36.088 +00:00', 3);
        expect(Array.isArray(clients)).toBeTruthy();
        expect(clients).toHaveLength(3);
    });

    test('It should not response the clients', async () => {
        const contracts = await getBestClients('2000-12-10 13:17:36.088 +00:00', '2000-12-10 13:17:36.088 +00:00');
        expect(Array.isArray(contracts)).toBeTruthy();
        expect(contracts).toHaveLength(0);
    });
});
