const defaultConfig = {
  PG_DATABASE: "rest_dev",
  PG_USER: "root",
  PG_PASSWORD: "11111111",
  PG_HOST: "127.0.0.1",
  PG_PORT: 5432,
};

const db = {
  PG_HOST: process.env.PG_HOST || defaultConfig.PG_HOST,
  PG_USER: process.env.PG_USER || defaultConfig.PG_USER,
  PG_PASSWORD: process.env.PG_PASSWORD || defaultConfig.PG_PASSWORD,
  PG_DATABASE: process.env.PG_DATABASE || defaultConfig.PG_DATABASE,
  PG_PORT: process.env.PG_PORT || defaultConfig.PG_PORT,
};

export { db };
