import { connection } from ".";
import { ENV } from "../../config";

async function setupModels() {
  await connection.authenticate().then(console.log).catch(console.error);
  if (ENV === "DEV") {
    await connection.sync();
  }
}

export { setupModels };
