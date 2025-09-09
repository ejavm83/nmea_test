import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const AAM_SCHEMA: NmeaSchema = {
  type: "AAM",
  fields: [
    { key: "arrivalStatus", from: 0, parse: (v) => v === "A" },
    { key: "perpendicularPassedStatus", from: 1, parse: (v) => v === "A" },
    { key: "arrivalCircleRadius", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "radiusUnits", from: 3 },
    { key: "waypointId", from: 4 }
  ]
};


