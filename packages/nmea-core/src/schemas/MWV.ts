import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const MWV_SCHEMA: NmeaSchema = {
  type: "MWV",
  fields: [
    { key: "windAngle", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "reference", from: 1 },
    { key: "windSpeed", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "windSpeedUnit", from: 3 },
    { key: "status", from: 4 }
  ]
};


