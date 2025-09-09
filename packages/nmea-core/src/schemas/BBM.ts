import type { NmeaSchema } from "../types";

export const BBM_SCHEMA: NmeaSchema = {
  type: "BBM",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "sequentialMessageId", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "aisChannel", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "messageId", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "encapsulatedData", from: 5 },
    { key: "numFillBits", from: 6, parse: (v) => parseInt(v, 10) }
  ]
};


