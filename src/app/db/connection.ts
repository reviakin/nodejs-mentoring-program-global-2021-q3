import { Sequelize } from "sequelize";
import { db as dbConfig } from "../../config";

const createConnection = () => {
  const output = new Sequelize(
    dbConfig.PG_DATABASE,
    dbConfig.PG_USER,
    dbConfig.PG_PASSWORD,
    {
      host: dbConfig.PG_HOST,
      dialect: "postgres",
    }
  );

  return output;
};

const connection = createConnection();

export { connection };
