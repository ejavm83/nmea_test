import type { NmeaSchema } from "../types";

export const VDO_SCHEMA: NmeaSchema = {
  type: "VDO",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "sequentialMessageIdentifier", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "aisChannel", from: 3 },
    { key: "encapsulatedData", from: 4 },
    { key: "fillBits", from: 5, parse: (v) => parseInt(v, 10) }
  ]
};


