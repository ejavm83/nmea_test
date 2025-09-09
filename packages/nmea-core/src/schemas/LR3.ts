import type { NmeaSchema } from "../types";

export const LR3_SCHEMA: NmeaSchema = {
  type: "LR3",
  fields: [
    { key: "sequenceNumber", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "mmsiOfResponder", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "voyageDestination", from: 2 },
    { key: "etaDate", from: 3 },
    { key: "etaTime", from: 4 },
    { key: "draught", from: 5, parse: (v) => parseFloat(v) },
    { key: "shipCargoType", from: 6, parse: (v) => parseFloat(v) },
    { key: "shipLength", from: 7, parse: (v) => parseFloat(v) },
    { key: "shipBreadth", from: 8, parse: (v) => parseFloat(v) },
    { key: "shipType", from: 9, parse: (v) => parseFloat(v) },
    { key: "personsOnBoard", from: 10, parse: (v) => parseFloat(v) }
  ]
};


