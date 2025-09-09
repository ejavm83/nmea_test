import type { NmeaSchema } from "../types";

export const ACG_SCHEMA: NmeaSchema = {
  type: "ACG",
  fields: [
    { key: "mmsi1", from: 0 },
    { key: "mmsi2", from: 1 },
    { key: "channelA", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "channelABandwidth", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "channelB", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "channelBBandwidth", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "txRxMode", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "powerLevel", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "broadcastChannel", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "transitionZoneSize", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 10 }
  ]
};


