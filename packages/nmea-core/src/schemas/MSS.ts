import type { NmeaSchema } from "../types";

export const MSS_SCHEMA: NmeaSchema = {
  type: "MSS",
  fields: [
    { key: "signalStrength", from: 0, parse: (v) => parseFloat(v) },
    { key: "signalToNoiseRatio", from: 1, parse: (v) => parseFloat(v) },
    { key: "beaconFrequency", from: 2, parse: (v) => parseFloat(v) },
    { key: "beaconBitRate", from: 3, parse: (v) => parseFloat(v) },
    { key: "channelNumber", from: 4, parse: (v) => parseInt(v, 10) }
  ]
};


