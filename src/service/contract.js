import { Op } from 'sequelize';
import { Contract } from '../model/index.js';

const getContract = async  (contractId, profileId) => {
    const where = { 
        id: contractId, 
        [Op.or]: [{ ContractorId: profileId }, { ClientId: profileId }] 
    };
    return Contract.findOne({ where });
};

const getNotFinishedContracts = async  (profileId) => {
    const where = { 
        [Op.or]: [{ ContractorId: profileId }, { ClientId: profileId }],
        [Op.not]: [{status:'terminated'}]
    };
    return Contract.findAll({ where });
};

export { getContract, getNotFinishedContracts };