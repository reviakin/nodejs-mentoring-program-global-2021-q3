import { connection } from ".";
import { ENV } from "../../config";

async function setupModels() {
  await connection.authenticate();
  if (ENV === "DEV") {
    await connection.sync();
  }
}

export { setupModels };
