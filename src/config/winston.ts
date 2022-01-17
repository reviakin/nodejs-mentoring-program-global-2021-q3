const defaultConfig = {
  COMBINE_LOG_FILE: "combine.log",
  ERROR_LOG_FILE: "errors.log",
};

const winston = {
  COMBINE_LOG_FILE:
    process.env.COMBINE_LOG_FILE || defaultConfig.COMBINE_LOG_FILE,
  ERROR_LOG_FILE: process.env.ERROR_LOG_FILE || defaultConfig.ERROR_LOG_FILE,
};

export { winston };
