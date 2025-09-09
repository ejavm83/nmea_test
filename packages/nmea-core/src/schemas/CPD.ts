import type { NmeaSchema } from "../types";

export const CPD_SCHEMA: NmeaSchema = {
  type: "CPD",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "sentenceStatusFlag", from: 1 },
    { key: "talkerDestinationIdFunction", from: 2 },
    { key: "listenerDestinationIdFunction", from: 3 }
  ]
};


