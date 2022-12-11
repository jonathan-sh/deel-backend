import {jest} from '@jest/globals';

import { deposit } from '../src/service/balance';

jest.useFakeTimers();
describe('Depositing amounts', () => {
    test('It should deposit the value', async () => {
        const { deposited } = await deposit(1, 100.25);
        expect(deposited).toBeTruthy();
    });

    test('It should not deposit the value', async () => {
        const { deposited } = await deposit(1, 100.26);
        expect(deposited).toBeFalsy();
    });
});
