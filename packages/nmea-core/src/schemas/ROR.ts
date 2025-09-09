import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const ROR_SCHEMA: NmeaSchema = {
  type: "ROR",
  fields: [
    { key: "starboardRudderOrder", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "starboardRudderStatus", from: 1 },
    { key: "portRudderOrder", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "portRudderStatus", from: 3 },
    { key: "commandSourceLocation", from: 4 }
  ]
};


