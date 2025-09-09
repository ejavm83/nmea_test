import type { NmeaSchema } from "../types";
import { parseFloatSafe, combineWithHemisphere } from "../utils";

export const RMB_SCHEMA: NmeaSchema = {
  type: "RMB",
  fields: [
    { key: "dataStatus", from: 0 },
    { key: "crossTrackError", from: 1, parse: (v) => parseFloatSafe(v) },
    { key: "directionToSteer", from: 2 },
    { key: "originWaypointId", from: 3 },
    { key: "destinationWaypointId", from: 4 },
    { key: "destinationLatitude", from: 5, parse: (v, f) => combineWithHemisphere(v, f[6]) },
    { key: "destinationLatitudeHemisphere", from: 6 },
    { key: "destinationLongitude", from: 7, parse: (v, f) => combineWithHemisphere(v, f[8]) },
    { key: "destinationLongitudeHemisphere", from: 8 },
    { key: "rangeToDestination", from: 9, parse: (v) => parseFloatSafe(v) },
    { key: "bearingToDestinationTrue", from: 10, parse: (v) => parseFloatSafe(v) },
    { key: "destinationClosingVelocity", from: 11, parse: (v) => parseFloatSafe(v) },
    { key: "arrivalStatus", from: 12 },
    { key: "modeIndicator", from: 13 }
  ]
};


