import type { NmeaSchema } from "../types";

export const TUT_SCHEMA: NmeaSchema = {
  type: "TUT",
  fields: [
    { key: "sourceIdentifier", from: 0 },
    { key: "totalNumSentences", from: 1, parse: (v) => parseInt(v, 16) },
    { key: "sentenceNumber", from: 2, parse: (v) => parseInt(v, 16) },
    { key: "sequentialMessageIdentifier", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "translationCode", from: 4 },
    { key: "textBody", from: 5 },
  ]
};
