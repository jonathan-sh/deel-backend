import { Job} from './Job.js';
import { Profile } from './Profile.js';
import { Contract } from './Contract.js';

Profile.hasMany(Contract, {as: 'Contractor', foreignKey: 'ContractorId'});
Contract.belongsTo(Profile, {as: 'Contractor'});
Profile.hasMany(Contract, {as: 'Client', foreignKey: 'ClientId'});
Contract.belongsTo(Profile, {as: 'Client'});
Contract.hasMany(Job);
Job.belongsTo(Contract);

export {
    Profile,
    Contract,
    Job,
};
