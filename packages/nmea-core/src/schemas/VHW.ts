import type { NmeaSchema } from "../types";

export const VHW_SCHEMA: NmeaSchema = {
  type: "VHW",
  fields: [
    { key: "headingTrue", from: 0, parse: (v) => parseFloat(v) },
    { key: "headingTrueUnit", from: 1 },
    { key: "headingMagnetic", from: 2, parse: (v) => parseFloat(v) },
    { key: "headingMagneticUnit", from: 3 },
    { key: "waterSpeedKnots", from: 4, parse: (v) => parseFloat(v) },
    { key: "waterSpeedKnotsUnit", from: 5 },
    { key: "waterSpeedKmPerHour", from: 6, parse: (v) => parseFloat(v) },
    { key: "waterSpeedKmPerHourUnit", from: 7 }
  ]
};


