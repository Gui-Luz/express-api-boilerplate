import Sequelize from 'sequelize';
import { POSTGRES_STRING } from '../utils/env/env.js';

const sequelize = new Sequelize(
  POSTGRES_STRING,
  {
    dialect: 'postgres',
    underscored: true,
    define: {
      timestamps: true
    }
  }
)

export default sequelize
