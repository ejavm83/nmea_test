import type { NmeaSchema } from "../types";

export const RST_SCHEMA: NmeaSchema = {
  type: "RST",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "equipmentResetCommand", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "equipmentStatus", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 3 }
  ]
};


