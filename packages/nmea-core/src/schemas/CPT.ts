import type { NmeaSchema } from "../types";

export const CPT_SCHEMA: NmeaSchema = {
  type: "CPT",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "sentenceStatusFlag", from: 1 },
    { key: "talkerTextStringFunction", from: 2 },
    { key: "listenerTextStringFunction", from: 3 }
  ]
};


