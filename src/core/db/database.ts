import { Sequelize } from 'sequelize-typescript';
import { database, timezone } from '../utils/constants';

const sequelize = new Sequelize(
    database.database,
    database.user,
    database.password, {
    host: database.host,
    dialect: 'postgres',
    timezone: timezone
  },
);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    // eslint-disable-next-line no-console
    console.log('Database connection has been established successfully.');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`Unable to connect to the database: ${err}`);
  }
})();

export default sequelize;
