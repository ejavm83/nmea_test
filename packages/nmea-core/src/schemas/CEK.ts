import type { NmeaSchema } from "../types";

export const CEK_SCHEMA: NmeaSchema = {
  type: "CEK",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "aesEncryptionKey", from: 1 },
    { key: "sentenceStatusFlag", from: 2 }
  ]
};


