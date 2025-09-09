import type { NmeaSchema } from "../types";

export const HDT_SCHEMA: NmeaSchema = {
  type: "HDT",
  fields: [
    { key: "headingTrue", from: 0, parse: (v) => parseFloat(v) },
    { key: "unit", from: 1 }
  ]
};


