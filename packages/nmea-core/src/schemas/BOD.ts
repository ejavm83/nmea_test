import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const BOD_SCHEMA: NmeaSchema = {
  type: "BOD",
  fields: [
    { key: "bearingTrue", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "bearingTrueUnits", from: 1 },
    { key: "bearingMagnetic", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "bearingMagneticUnits", from: 3 },
    { key: "destinationWaypointId", from: 4 },
    { key: "originWaypointId", from: 5 }
  ]
};


