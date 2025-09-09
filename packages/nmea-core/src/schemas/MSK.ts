import type { NmeaSchema } from "../types";

export const MSK_SCHEMA: NmeaSchema = {
  type: "MSK",
  fields: [
    { key: "beaconFrequency", from: 0, parse: (v) => parseFloat(v) },
    { key: "autoManualFrequency", from: 1 },
    { key: "beaconBitRate", from: 2, parse: (v) => parseFloat(v) },
    { key: "autoManualBitRate", from: 3 },
    { key: "mssStatusInterval", from: 4, parse: (v) => parseFloat(v) },
    { key: "channelNumber", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 6 }
  ]
};


