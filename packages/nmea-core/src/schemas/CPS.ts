import type { NmeaSchema } from "../types";

export const CPS_SCHEMA: NmeaSchema = {
  type: "CPS",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "sentenceStatusFlag", from: 1 },
    { key: "talkerSourceIdFunction", from: 2 },
    { key: "listenerSourceIdFunction", from: 3 }
  ]
};


