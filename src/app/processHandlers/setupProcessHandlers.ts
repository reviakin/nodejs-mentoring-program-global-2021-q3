import { createLogger } from "../../utils";

const uncaughtExceptionLogger = createLogger("UNCAUGHT EXCEPTION");
const unhandledRejectionLogger = createLogger("UNHANDLED REJECTION");

function setupProcessHandlers() {
  process.on("uncaughtException", uncaughtExceptionLogger.error);
  process.on("unhandledRejection", unhandledRejectionLogger.error);
}

export { setupProcessHandlers };
