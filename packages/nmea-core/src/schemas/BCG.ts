import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const BCG_SCHEMA: NmeaSchema = {
  type: "BCG",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "vhfChannelA", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "vhfChannelB", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "vhfChannelD", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "vhfChannelE", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "powerLevel", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "numRetries", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "repeatIndicator", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "ratdmaAccess", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "utcSyncSource", from: 9 },
    { key: "adsInterval", from: 10, parse: (v) => parseFloatSafe(v) },
    { key: "assignedTalkerId", from: 11 },
    { key: "sentenceStatusFlag", from: 12 }
  ]
};


