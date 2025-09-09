import type { NmeaSchema } from "../types";

export const DPT_SCHEMA: NmeaSchema = {
  type: "DPT",
  fields: [
    { key: "waterDepth", from: 0, parse: (v) => parseFloat(v) },
    { key: "offset", from: 1, parse: (v) => parseFloat(v) },
    { key: "maximumRangeScale", from: 2, parse: (v) => parseFloat(v) }
  ]
};


