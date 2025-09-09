import type { NmeaSchema } from "../types";

export const AID_SCHEMA: NmeaSchema = {
  type: "AID",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "createDeleteMmsi", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "mmsi", from: 2 },
    { key: "virtualRealChained", from: 3 },
    { key: "sentenceStatusFlag", from: 4 }
  ]
};


