import { getContract } from '../src/service/contract.js';

describe('Getting one contract', () => {
    test('It should response the contract', async () => {
        const contract = await getContract(3,2);
        expect(contract['id']).toBe(3);
    });

    test('It should not response the contract', async () => {
        const contract = await getContract(3,7);
        expect(contract).toBeNull();
    });
});

