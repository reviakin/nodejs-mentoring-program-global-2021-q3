const DEFAULT_PORT = 3000;

const PORT = process.env.PORT ? Number(process.env.PORT) : DEFAULT_PORT;

export { PORT };
