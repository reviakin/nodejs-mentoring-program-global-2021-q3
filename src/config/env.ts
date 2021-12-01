const DEFAULT_ENV = "DEV";

const ENV = process.env.ENV ? process.env.ENV : DEFAULT_ENV;

export { ENV };
