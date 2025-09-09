import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const CPN_SCHEMA: NmeaSchema = {
  type: "CPN",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "sentenceStatusFlag", from: 1 },
    { key: "talkerLineCountFunction", from: 2 },
    { key: "listenerLineCountFunction", from: 3 },
    { key: "resetEvent", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "initialLineNumber", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "incrementValue", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "lineCountLimit", from: 7, parse: (v) => parseFloatSafe(v) },
    { key: "eventOffset", from: 8, parse: (v) => parseFloatSafe(v) }
  ]
};


