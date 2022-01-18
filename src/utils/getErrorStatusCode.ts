import { Authorization, Forbidden } from "../app/errors";

const INTERNAL_SERVER_ERROR = 500;

function getErrorStatusCode(error: Error): number {
  let output = INTERNAL_SERVER_ERROR;

  if (error instanceof Authorization) {
    output = 401;
  }
  if (error instanceof Forbidden) {
    output = 403;
  }

  return output;
}

export { getErrorStatusCode };
