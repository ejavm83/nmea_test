import type { NmeaSchema } from "../types";
import { combineWithHemisphere, parseFloatSafe } from "../utils";

export const BCL_SCHEMA: NmeaSchema = {
  type: "BCL",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "positionSource", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "latitude", from: 2, parse: (v, f) => combineWithHemisphere(v, f[3]) },
    { key: "latitudeHemisphere", from: 3 },
    { key: "longitude", from: 4, parse: (v, f) => combineWithHemisphere(v, f[5]) },
    { key: "longitudeEWIndicator", from: 5 },
    { key: "positionAccuracy", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "baseStationName", from: 7 },
    { key: "sentenceStatusFlag", from: 8 }
  ]
};


