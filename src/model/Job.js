import { Sequelize } from 'sequelize';
import { sequelize } from '../config/sequelize.js';

class Job extends Sequelize.Model {}
Job.init(
    {
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        price: {
            type: Sequelize.DECIMAL(12, 2),
            allowNull: false,
        },
        paid: {
            type: Sequelize.BOOLEAN,
            default: false,
        },
        paymentDate: {
            type: Sequelize.DATE,
        },
    },
    {
        sequelize,
        modelName: 'Job',
    },
);

export { Job };