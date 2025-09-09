import type { NmeaSchema } from "../types";

export const ABM_SCHEMA: NmeaSchema = {
  type: "ABM",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "sequentialMessageId", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "destinationMmsi", from: 3 },
    { key: "aisChannel", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "messageId", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "encapsulatedData", from: 6 },
    { key: "numFillBits", from: 7, parse: (v) => parseInt(v, 10) }
  ]
};


