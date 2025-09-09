import type { NmeaSchema } from "../types";

export const TSR_SCHEMA: NmeaSchema = {
  type: "TSR",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "tspSequentialIdentifier", from: 1, parse: (v) => parseFloat(v) },
    { key: "tspChannelSelection", from: 2 },
    { key: "tspUtcOfRequestedBlocking", from: 3 },
    { key: "statusOfProhibitRequest", from: 4, parse: (v) => parseInt(v, 10) }
  ]
};


