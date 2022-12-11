import { QueryTypes } from 'sequelize';

import { GET_BEST_CLIENT_SQL, GET_BEST_PROFESSION_SQL } from './sql/index.js';
import { sequelize } from '../config/sequelize.js';

const runRwaSql = async (sql, dateTimeStart, dateTimeEnd, limit = 1) => {

    try {
        const result = await sequelize.query(sql, {
            type: QueryTypes.SELECT,
            replacements: {
                start: dateTimeStart,
                end: dateTimeEnd
            }
        });
        
        if(Array.isArray(result)) {
            if(limit ===1) return result[0];
            return result.slice(0, limit);
        }
        
        return result;
    } catch (error) {
        console.log('error', error);
        return { msg: 'please implements', dateTimeStart, dateTimeEnd, error};

    }
};

const getBestProfession = async (dateTimeStart, dateTimeEnd) => {
    return runRwaSql(GET_BEST_PROFESSION_SQL, dateTimeStart, dateTimeEnd);
};


const getBestClients = async (dateTimeStart, dateTimeEnd, limit = 2) => {
    return runRwaSql(GET_BEST_CLIENT_SQL, dateTimeStart, dateTimeEnd, limit);
}

export { getBestProfession, getBestClients };