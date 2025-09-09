import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const RSD_SCHEMA: NmeaSchema = {
  type: "RSD",
  fields: [
    { key: "origin1Range", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "origin1Bearing", from: 1, parse: (v) => parseFloatSafe(v) },
    { key: "vrm1Range", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "ebl1Degrees", from: 3, parse: (v) => parseFloatSafe(v) },
    { key: "origin2Range", from: 4, parse: (v) => parseFloatSafe(v) },
    { key: "origin2Bearing", from: 5, parse: (v) => parseFloatSafe(v) },
    { key: "vrm2Range", from: 6, parse: (v) => parseFloatSafe(v) },
    { key: "ebl2Degrees", from: 7, parse: (v) => parseFloatSafe(v) },
    { key: "cursorRange", from: 8, parse: (v) => parseFloatSafe(v) },
    { key: "cursorBearing", from: 9, parse: (v) => parseFloatSafe(v) },
    { key: "rangeScaleInUse", from: 10, parse: (v) => parseFloatSafe(v) },
    { key: "rangeUnits", from: 11 },
    { key: "displayRotation", from: 12 }
  ]
};


