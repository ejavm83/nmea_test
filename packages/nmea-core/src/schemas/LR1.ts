import type { NmeaSchema } from "../types";

export const LR1_SCHEMA: NmeaSchema = {
  type: "LR1",
  fields: [
    { key: "sequenceNumber", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "mmsiOfResponder", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "mmsiOfRequestor", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "shipName", from: 3 },
    { key: "callSign", from: 4 },
    { key: "imoNumber", from: 5, parse: (v) => parseInt(v, 10) }
  ]
};


