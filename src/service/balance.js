import { Op, Transaction } from 'sequelize';

import { Job, Contract, Profile } from '../model/index.js';
import { sequelize } from '../config/sequelize.js';

/**
 * The limit percentage to make deposits.
 * 1 = 100%
 */
const LIMIT_PERCENTAGE = new Number(0.25);


const deposit = async (profileId, amountToDeposit) => {
    const lock = Transaction.LOCK.UPDATE;
    const transaction = await sequelize.transaction();

    try {

        const contractFilter = {
            ClientId: profileId
        };
        const contracts = await Contract.findAll({
            where: contractFilter,
            lock,
            transaction
        });
        const contractIds = contracts.map(it => it.id);

        const jobFilter = {
            ContractId: {
                [Op.in]: contractIds,
            },
            paid:{ [Op.not]: true }
        };
        const jobs = await Job.findAll({
            where: jobFilter,
            lock,
            transaction
        });
        const jobsTotalPrice = jobs.map(it => new Number(it['price'] || 0)).reduce((total, item) => total + item, 0);

        const limitAllow = jobsTotalPrice * LIMIT_PERCENTAGE;
        if (amountToDeposit <= limitAllow) {
            const profileFilter = { id : profileId };
            const profile = await Profile.findOne({where: profileFilter, lock, transaction});
            const balance = profile['balance'] + amountToDeposit;
            await Profile.update({balance}, {where: profileFilter, lock, transaction});

            await transaction.commit();
            return { deposited: true, current_balance: balance, limitAllow };
        }

        await transaction.commit();
        return { deposited: false, cause: 'limit exceeded', limitAllow };
    } catch (error) {
        await transaction.rollback();
        await deposit(profileId, amountToDeposit);
    }

};

export { deposit };
