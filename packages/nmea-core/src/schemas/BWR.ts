import type { NmeaSchema } from "../types";
import { parseFloatSafe, combineWithHemisphere } from "../utils";

export const BWR_SCHEMA: NmeaSchema = {
  type: "BWR",
  fields: [
    { key: "utcOfObservation", from: 0 },
    { key: "waypointLatitude", from: 1, parse: (v, f) => combineWithHemisphere(v, f[2]) },
    { key: "waypointLatitudeHemisphere", from: 2 },
    { key: "waypointLongitude", from: 3, parse: (v, f) => combineWithHemisphere(v, f[4]) },
    { key: "waypointLongitudeEWIndicator", from: 4 },
    { key: "bearingToDestinationTrue", from: 5, parse: (v) => parseFloatSafe(v) },
    { key: "bearingToDestinationTrueUnits", from: 6 },
    { key: "bearingToDestinationMagnetic", from: 7, parse: (v) => parseFloatSafe(v) },
    { key: "bearingToDestinationMagneticUnits", from: 8 },
    { key: "distanceToDestination", from: 9, parse: (v) => parseFloatSafe(v) },
    { key: "distanceToDestinationUnits", from: 10 },
    { key: "waypointId", from: 11 },
    { key: "modeIndicator", from: 12 }
  ]
};


