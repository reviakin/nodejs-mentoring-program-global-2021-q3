import { Sequelize, Options } from "sequelize";

const createConnection = (options: Options) => {
  return new Sequelize(options);
};

const connectOptions = {};
const connection = createConnection(connectOptions);

export { connection };
