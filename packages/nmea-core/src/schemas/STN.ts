import type { NmeaSchema } from "../types";

export const STN_SCHEMA: NmeaSchema = {
  type: "STN",
  fields: [
    { key: "talkerIdNumber", from: 0, parse: (v) => parseInt(v, 10) }
  ]
};


