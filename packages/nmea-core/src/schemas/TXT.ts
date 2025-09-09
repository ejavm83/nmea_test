import type { NmeaSchema } from "../types";

export const TXT_SCHEMA: NmeaSchema = {
  type: "TXT",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "textIdentifier", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "textMessage", from: 3 }
  ]
};


