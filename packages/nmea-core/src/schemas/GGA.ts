import type { NmeaSchema } from "../types";
import { parseNumber, parseFloatSafe, combineWithHemisphere } from "../utils";

export const GGA_SCHEMA: NmeaSchema = {
  type: "GGA",
  fields: [
    { key: "time", from: 0 },
    {
      key: "latitude",
      from: 1,
      parse: (v, f) => combineWithHemisphere(v, f[2])
    },
    {
      key: "longitude",
      from: 3,
      parse: (v, f) => combineWithHemisphere(v, f[4])
    },
    { key: "fixQuality", from: 5 },
    { key: "numSatellites", from: 6, parse: (v) => parseNumber(v) },
    { key: "hdop", from: 7, parse: (v) => parseFloatSafe(v) },
    {
      key: "altitude",
      from: 8,
      parse: (v, f) => (v ? `${v} ${f[9] || ""}`.trim() : undefined)
    }
  ]
};
