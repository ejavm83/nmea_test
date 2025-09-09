import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const MTW_SCHEMA: NmeaSchema = {
  type: "MTW",
  fields: [
    { key: "temperature", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "unit", from: 1 }
  ]
};


