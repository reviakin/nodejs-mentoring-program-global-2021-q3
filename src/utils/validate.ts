import { Schema } from "joi";

function validate<T>(data: T, schema: Schema) {
  return schema.validate(data, { abortEarly: false });
}

export { validate };
