import type { NmeaSchema } from "../types";

export const TBS_SCHEMA: NmeaSchema = {
  type: "TBS",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "sentenceStatusFlag", from: 1 },
    { key: "recognizedSourceIdentificationValue", from: 2 },
    { key: "action", from: 3 }
  ]
};


