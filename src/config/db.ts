const defaultConfig = {
  POSTGRES_DB: "database",
  POSTGRES_USER: "user",
  POSTGRES_PASSWORD: "password",
  POSTGRES_HOST: "127.0.0.1",
  POSTGRES_PORT: 5432,
  DATABASE_URL: "postgres://username:pgpassword@127.0.0.1:5432/mydatabase",
};

const db = {
  POSTGRES_HOST: process.env.POSTGRES_HOST || defaultConfig.POSTGRES_HOST,
  POSTGRES_USER: process.env.POSTGRES_USER || defaultConfig.POSTGRES_USER,
  POSTGRES_PASSWORD:
    process.env.POSTGRES_PASSWORD || defaultConfig.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB || defaultConfig.POSTGRES_DB,
  POSTGRES_PORT: process.env.POSTGRES_PORT
    ? Number(process.env.POSTGRES_PORT)
    : defaultConfig.POSTGRES_PORT,
  DATABASE_URL: process.env.DATABASE_URL || defaultConfig.DATABASE_URL,
};

export { db };
