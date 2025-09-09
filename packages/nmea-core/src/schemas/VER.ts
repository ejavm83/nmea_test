import type { NmeaSchema } from "../types";

export const VER_SCHEMA: NmeaSchema = {
  type: "VER",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "deviceType", from: 2 },
    { key: "vendorID", from: 3 },
    { key: "uniqueIdentifier", from: 4 },
    { key: "manufacturerSerialNumber", from: 5 },
    { key: "modelCode", from: 6 },
    { key: "softwareRevision", from: 7 },
    { key: "hardwareRevision", from: 8 },
    { key: "sequentialMessageIdentifier", from: 9, parse: (v) => parseInt(v, 10) }
  ]
};


