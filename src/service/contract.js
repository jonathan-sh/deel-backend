import { Op } from 'sequelize';
import { Contract } from '../model/index.js';

const getContract = async  (contractId, profileId) => {
    const where = { 
        id: contractId, 
        [Op.or]: [{ ContractorId: profileId }, { ClientId: profileId }] 
    };
    return Contract.findOne({ where });
};

export { getContract };