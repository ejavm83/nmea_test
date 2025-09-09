import type { NmeaSchema } from "../types";

export const NRM_SCHEMA: NmeaSchema = {
  type: "NRM",
  fields: [
    { key: "functionCode", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "frequencyIndex", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "transmitterCoverageAreaMask", from: 2 },
    { key: "messageTypeMask", from: 3 },
    { key: "sentenceStatusFlag", from: 4 }
  ]
};


