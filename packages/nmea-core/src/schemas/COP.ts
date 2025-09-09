import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const COP_SCHEMA: NmeaSchema = {
  type: "COP",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "operationalMode", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "startTime", from: 2 },
    { key: "timeInterval", from: 3, parse: (v) => parseFloatSafe(v) },
    { key: "periodDuration", from: 4, parse: (v) => parseFloatSafe(v) },
    { key: "sentenceStatusFlag", from: 5 }
  ]
};


