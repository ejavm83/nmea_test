import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const BWW_SCHEMA: NmeaSchema = {
  type: "BWW",
  fields: [
    { key: "bearingTrue", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "bearingTrueUnits", from: 1 },
    { key: "bearingMagnetic", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "bearingMagneticUnits", from: 3 },
    { key: "toWaypointId", from: 4 },
    { key: "fromWaypointId", from: 5 }
  ]
};


