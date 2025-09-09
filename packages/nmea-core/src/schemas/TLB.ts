import type { NmeaSchema } from "../types";

export const TLB_SCHEMA: NmeaSchema = {
  type: "TLB",
  fields: [
    { key: "targetNumber1", from: 0, parse: (v) => parseFloat(v) },
    { key: "targetLabel1", from: 1 },
    { key: "targetNumber2", from: 2, parse: (v) => parseFloat(v) },
    { key: "targetLabel2", from: 3 }
  ]
};


