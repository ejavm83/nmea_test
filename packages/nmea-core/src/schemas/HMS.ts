import type { NmeaSchema } from "../types";

export const HMS_SCHEMA: NmeaSchema = {
  type: "HMS",
  fields: [
    { key: "headingSensor1Id", from: 0 },
    { key: "headingSensor2Id", from: 1 },
    { key: "maximumDifference", from: 2, parse: (v) => parseFloat(v) }
  ]
};


