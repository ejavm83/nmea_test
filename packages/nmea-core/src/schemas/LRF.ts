import type { NmeaSchema } from "../types";

export const LRF_SCHEMA: NmeaSchema = {
  type: "LRF",
  fields: [
    { key: "sequenceNumber", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "mmsiOfRequestor", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "nameOfRequestor", from: 2 },
    { key: "functionRequest", from: 3 },
    { key: "functionReplyStatus", from: 4 }
  ]
};


