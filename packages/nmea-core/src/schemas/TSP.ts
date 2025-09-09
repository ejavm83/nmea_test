import type { NmeaSchema } from "../types";

export const TSP_SCHEMA: NmeaSchema = {
  type: "TSP",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "sequentialIdentifier", from: 1, parse: (v) => parseFloat(v) },
    { key: "channelSelection", from: 2 },
    { key: "utcOfRequestedBlocking", from: 3 },
    { key: "referenceSlot", from: 4, parse: (v) => parseFloat(v) },
    { key: "slotOffsetFirstBlock", from: 5, parse: (v) => parseFloat(v) },
    { key: "consecutiveTimeSlotsFirstBlock", from: 6, parse: (v) => parseFloat(v) },
    { key: "slotOffsetSecondBlock", from: 7, parse: (v) => parseFloat(v) },
    { key: "consecutiveTimeSlotsSecondBlock", from: 8, parse: (v) => parseFloat(v) },
    { key: "slotOffsetThirdBlock", from: 9, parse: (v) => parseFloat(v) },
    { key: "consecutiveTimeSlotsThirdBlock", from: 10, parse: (v) => parseFloat(v) }
  ]
};


