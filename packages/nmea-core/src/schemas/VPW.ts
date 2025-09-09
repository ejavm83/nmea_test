import type { NmeaSchema } from "../types";

export const VPW_SCHEMA: NmeaSchema = {
  type: "VPW",
  fields: [
    { key: "speedKnots", from: 0, parse: (v) => parseFloat(v) },
    { key: "speedKnotsUnit", from: 1 },
    { key: "speedMetersPerSecond", from: 2, parse: (v) => parseFloat(v) },
    { key: "speedMetersPerSecondUnit", from: 3 }
  ]
};


