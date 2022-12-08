import { getContract, getNotFinishedContracts } from '../src/service/contract.js';

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


describe('Getting not finished contracts', () => {
    test('It should response the contracts', async () => {
        const contracts = await getNotFinishedContracts(7);
        expect(Array.isArray(contracts)).toBeTruthy();
        expect(contracts).toHaveLength(3);
    });

    test('It should not response the contracts', async () => {
        const contracts = await getNotFinishedContracts(-1);
        expect(Array.isArray(contracts)).toBeTruthy();
        expect(contracts.length).toBeFalsy();
    });
});
