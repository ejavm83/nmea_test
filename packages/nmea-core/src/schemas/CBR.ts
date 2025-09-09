import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const CBR_SCHEMA: NmeaSchema = {
  type: "CBR",
  fields: [
    { key: "mmsi", from: 0 },
    { key: "messageId", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "messageIdIndex", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "startUtcHourA", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "startUtcMinuteA", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "startSlotA", from: 5, parse: (v) => parseFloatSafe(v) },
    { key: "slotIntervalA", from: 6, parse: (v) => parseFloatSafe(v) },
    { key: "startUtcHourB", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "startUtcMinuteB", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "startSlotB", from: 9, parse: (v) => parseFloatSafe(v) },
    { key: "slotIntervalB", from: 10, parse: (v) => parseFloatSafe(v) },
    { key: "accessScheme", from: 11, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 12 }
  ]
};


