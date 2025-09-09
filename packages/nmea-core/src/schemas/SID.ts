import type { NmeaSchema } from "../types";

export const SID_SCHEMA: NmeaSchema = {
  type: "SID",
  fields: [
    { key: "currentUniqueIdentifier", from: 0 },
    { key: "newUniqueIdentifier", from: 1 },
    { key: "currentMMSI", from: 2 },
    { key: "newMMSI", from: 3 },
    { key: "sentenceStatusFlag", from: 4 }
  ]
};


