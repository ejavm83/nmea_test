import type { NmeaSchema } from "../types";

export const TTD_SCHEMA: NmeaSchema = {
  type: "TTD",
  fields: [
    { key: "totalSentences", from: 0, parse: (v) => parseInt(v, 16) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 16) },
    { key: "sequentialMessageIdentifier", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "encapsulatedTrackedTargetData", from: 3 },
    { key: "numberOfFillBits", from: 4, parse: (v) => parseInt(v, 10) }
  ]
};


