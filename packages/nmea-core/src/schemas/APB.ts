import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const APB_SCHEMA: NmeaSchema = {
  type: "APB",
  fields: [
    { key: "statusA", from: 0, parse: (v) => v === "A" },
    { key: "statusB", from: 1, parse: (v) => v === "A" },
    { key: "xteMagnitude", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "xteSteerDirection", from: 3 },
    { key: "xteUnits", from: 4 },
    { key: "arrivalCircleStatus", from: 5, parse: (v) => v === "A" },
    { key: "perpendicularPassedStatus", from: 6, parse: (v) => v === "A" },
    { key: "bearingToDestinationTrue", from: 7, parse: (v) => parseFloatSafe(v) },
    { key: "bearingToDestinationTrueUnits", from: 8 },
    { key: "bearingToDestinationMagnetic", from: 9, parse: (v) => parseFloatSafe(v) },
    { key: "bearingToDestinationMagneticUnits", from: 10 },
    { key: "destinationWaypointId", from: 11 },
    { key: "modeIndicator", from: 12 }
  ]
};


