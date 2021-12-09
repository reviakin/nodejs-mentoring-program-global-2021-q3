import { Sequelize } from "sequelize";
import { db as dbConfig } from "../../config";

const createConnection = () => {
  return new Sequelize(dbConfig.DATABASE_URL);
};

const connection = createConnection();

export { connection };
