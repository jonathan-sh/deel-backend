import { Op, Transaction } from 'sequelize';
import { Job, Contract, Profile } from '../model/index.js';

import { sequelize } from '../config/sequelize.js';

const getUnpaidJobs = async  (profileId) => {
    const contractsFilter = { 
        [Op.or]: [{ ContractorId: profileId }, { ClientId: profileId }],
        status:'in_progress'
    };
    const contracts = await Contract.findAll({ where: contractsFilter });
    const contractIds = contracts.map( it => it.id);
    const jobsFiler = { 
        ContractId:{
            [Op.in]: contractIds,
        },
        paid:{
            [Op.is]: null
        }
    };

    return Job.findAll({ where: jobsFiler });
};


const payJob = async  (profileId, jobId) => {
    const lock = Transaction.LOCK.UPDATE;
    const transaction = await sequelize.transaction();

    try {
        const jobFilter = {
            id: jobId, 
            paid:{ [Op.not]: true }
        };
        const job = await Job.findOne({where: jobFilter, lock, transaction});
        if(!job){
            await transaction.commit();
            
            return 'job paid or not found';
        }
    
        const profileFilter = { id: profileId };
        const profile = await Profile.findOne({ where: profileFilter, lock, transaction});
        const profileBalance = profile['balance'];
        const jobPrice =job['price'];
    
        if(profileBalance>jobPrice){
            await Job.update({paid: true}, { where: jobFilter, lock, transaction});
            await Profile.update({balance: profileBalance-jobPrice}, { where: profileFilter, lock, transaction});
            await transaction.commit();
            
            return 'paid';
        }

        await transaction.commit();
        
        return 'insufficient balance :(';
    } catch (error) {
        await transaction.rollback();
        await payJob(profileId, jobId);
    }

};

export { getUnpaidJobs, payJob };