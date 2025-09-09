import type { NmeaSchema } from "../types";

export const TTM_SCHEMA: NmeaSchema = {
  type: "TTM",
  fields: [
    { key: "targetNumber", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "targetDistance", from: 1, parse: (v) => parseFloat(v) },
    { key: "bearingFromOwnShipDegrees", from: 2, parse: (v) => parseFloat(v) },
    { key: "bearingFromOwnShipType", from: 3 },
    { key: "targetSpeed", from: 4, parse: (v) => parseFloat(v) },
    { key: "targetCourseDegrees", from: 5, parse: (v) => parseFloat(v) },
    { key: "targetCourseType", from: 6 },
    { key: "distanceToCPA", from: 7, parse: (v) => parseFloat(v) },
    { key: "timeToCPA", from: 8, parse: (v) => parseFloat(v) },
    { key: "speedDistanceUnits", from: 9 },
    { key: "targetName", from: 10 },
    { key: "targetStatus", from: 11 },
    { key: "referenceTarget", from: 12 },
    { key: "utcOfData", from: 13 },
    { key: "typeOfAcquisition", from: 14 },
  ]
};
