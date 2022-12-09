import { deposit } from '../src/service/balance';

describe('Depositing amounts', () => {
    test('It should deposit the value', async () => {
        const { deposited } = await deposit(1, 50);
        expect(deposited).toBeTruthy();
    });

    test('It should not deposit the value', async () => {
        const { deposited } = await deposit(1, 50.1);
        expect(deposited).toBeFalsy();
    });
});
