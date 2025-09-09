import type { NmeaSchema } from "../types";

export const ECB_SCHEMA: NmeaSchema = {
  type: "ECB",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "messageType", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "refUtcMinuteChannelA", from: 2, parse: (v) => parseFloat(v) },
    { key: "refSlotChannelA", from: 3, parse: (v) => parseFloat(v) },
    { key: "slotIntervalChannelA", from: 4, parse: (v) => parseFloat(v) },
    { key: "numSlotsChannelA", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "refUtcMinuteChannelB", from: 6, parse: (v) => parseFloat(v) },
    { key: "refSlotChannelB", from: 7, parse: (v) => parseFloat(v) },
    { key: "slotIntervalChannelB", from: 8, parse: (v) => parseFloat(v) },
    { key: "numSlotsChannelB", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 10 }
  ]
};


