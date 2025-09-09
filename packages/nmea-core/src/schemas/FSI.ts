import type { NmeaSchema } from "../types";

export const FSI_SCHEMA: NmeaSchema = {
  type: "FSI",
  fields: [
    { key: "transmittingFrequency", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "receivingFrequency", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "modeOfOperation", from: 2 },
    { key: "powerLevel", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 4 }
  ]
};


