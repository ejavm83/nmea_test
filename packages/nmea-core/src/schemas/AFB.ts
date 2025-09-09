import type { NmeaSchema } from "../types";

export const AFB_SCHEMA: NmeaSchema = {
  type: "AFB",
  fields: [
    { key: "mmsi", from: 0 },
    { key: "messageId", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "messageIdIndex", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "txRxMode", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "powerLevel", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "txChannel", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 6 }
  ]
};


