import type { NmeaSchema } from "../types";
import { parseFloatSafe, combineWithHemisphere } from "../utils";

export const RMA_SCHEMA: NmeaSchema = {
  type: "RMA",
  fields: [
    { key: "status", from: 0 },
    { key: "latitude", from: 1, parse: (v, f) => combineWithHemisphere(v, f[2]) },
    { key: "latitudeHemisphere", from: 2 },
    { key: "longitude", from: 3, parse: (v, f) => combineWithHemisphere(v, f[4]) },
    { key: "longitudeHemisphere", from: 4 },
    { key: "timeDifferenceA", from: 5, parse: (v) => parseFloatSafe(v) },
    { key: "timeDifferenceB", from: 6, parse: (v) => parseFloatSafe(v) },
    { key: "speedOverGroundKnots", from: 7, parse: (v) => parseFloatSafe(v) },
    { key: "courseOverGroundTrue", from: 8, parse: (v) => parseFloatSafe(v) },
    { key: "magneticVariationDegrees", from: 9, parse: (v) => parseFloatSafe(v) },
    { key: "magneticVariationEW", from: 10 },
    { key: "modeIndicator", from: 11 }
  ]
};


