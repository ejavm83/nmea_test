import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const CPR_SCHEMA: NmeaSchema = {
  type: "CPR",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "sentenceStatusFlag", from: 1 },
    { key: "talkerRelativeTimeFunction", from: 2 },
    { key: "listenerRelativeTimeFunction", from: 3 },
    { key: "timePrecisionFormat", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "relativeTimeEpochControl", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "initialRelativeTime", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "relativeTimeLimit", from: 7, parse: (v) => parseFloatSafe(v) }
  ]
};


