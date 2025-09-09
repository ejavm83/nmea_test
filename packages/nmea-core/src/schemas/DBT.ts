import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const DBT_SCHEMA: NmeaSchema = {
  type: "DBT",
  fields: [
    { key: "waterDepthFeet", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "feetUnits", from: 1 },
    { key: "waterDepthMeters", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "metersUnits", from: 3 },
    { key: "waterDepthFathoms", from: 4, parse: (v) => parseFloatSafe(v) },
    { key: "fathomsUnits", from: 5 }
  ]
};


