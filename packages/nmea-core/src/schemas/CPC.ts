import type { NmeaSchema } from "../types";

export const CPC_SCHEMA: NmeaSchema = {
  type: "CPC",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "sentenceStatusFlag", from: 1 },
    { key: "talkerUnixTimeFunction", from: 2 },
    { key: "listenerUnixTimeFunction", from: 3 },
    { key: "timePrecisionFormat", from: 4, parse: (v) => parseInt(v, 10) }
  ]
};


