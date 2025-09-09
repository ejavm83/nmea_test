import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const ROT_SCHEMA: NmeaSchema = {
  type: "ROT",
  fields: [
    { key: "rateOfTurn", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "status", from: 1 }
  ]
};


