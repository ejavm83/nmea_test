import type { NmeaSchema } from "../types";

export const ACM_SCHEMA: NmeaSchema = {
  type: "ACM",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "sequenceNumber", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "destinationMmsi", from: 3 },
    { key: "channelA", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "channelABandwidth", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "channelB", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "channelBBandwidth", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "txRxMode", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "powerLevel", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "transitionZoneSize", from: 10, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 11 }
  ]
};


