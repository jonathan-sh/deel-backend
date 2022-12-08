import { Op } from 'sequelize';
import { Job, Contract } from '../model/index.js';

const getUnpaidJobs = async  (profileId) => {
    const contractsFilter = { 
        [Op.or]: [{ ContractorId: profileId }, { ClientId: profileId }],
        status:'in_progress'
    };
    const contracts = await Contract.findAll({ where: contractsFilter });
    const contractIds = contracts.map( it => it.id);
    console.log('contractIds', contractIds);
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



export { getUnpaidJobs };