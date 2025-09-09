import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const ASN_SCHEMA: NmeaSchema = {
  type: "ASN",
  fields: [
    { key: "mmsi1", from: 0 },
    { key: "increment1", from: 1, parse: (v) => parseFloatSafe(v) },
    { key: "offset1", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "numSlots1", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "mmsi2", from: 4 },
    { key: "increment2", from: 5, parse: (v) => parseFloatSafe(v) },
    { key: "offset2", from: 6, parse: (v) => parseFloatSafe(v) },
    { key: "numSlots2", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "channel", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 9 }
  ]
};


