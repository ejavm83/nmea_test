import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const CPG_SCHEMA: NmeaSchema = {
  type: "CPG",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "sentenceStatusFlag", from: 1 },
    { key: "talkerSentenceGroupingFunction", from: 2 },
    { key: "listenerSentenceGroupingFunction", from: 3 },
    { key: "resetEvent", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "initialGroupCode", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "groupCodeIncrement", from: 6, parse: (v) => parseFloatSafe(v) },
    { key: "groupCodeLimit", from: 7, parse: (v) => parseFloatSafe(v) },
    { key: "eventOffset", from: 8, parse: (v) => parseFloatSafe(v) }
  ]
};


