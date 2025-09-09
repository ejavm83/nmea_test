import type { NmeaSchema } from "../types";

export const MEB_SCHEMA: NmeaSchema = {
  type: "MEB",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "sequentialMessageIdentifier", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "aisChannelForBroadcast", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "mmsi", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "ituRM1371MessageId", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "messageIdIndex", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "broadcastBehaviour", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "destinationMmsi", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "binaryDataFlag", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 10 },
    { key: "encapsulatedData", from: 11 },
    { key: "fillBits", from: 12, parse: (v) => parseInt(v, 10) }
  ]
};


