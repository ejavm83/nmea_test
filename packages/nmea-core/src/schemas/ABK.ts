import type { NmeaSchema } from "../types";

export const ABK_SCHEMA: NmeaSchema = {
  type: "ABK",
  fields: [
    { key: "destinationMmsi", from: 0 },
    { key: "sequentialMessageId", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "acknowledgement", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "messageId", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "aisChannel", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 5 }
  ]
};


