import type { NmeaSchema } from "../types";
import { parseFloatSafe, combineWithHemisphere } from "../utils";

export const RMC_SCHEMA: NmeaSchema = {
  type: "RMC",
  fields: [
    { key: "time", from: 0 },
    { key: "status", from: 1 },
    {
      key: "latitude",
      from: 2,
      parse: (v, f) => combineWithHemisphere(v, f[3])
    },
    {
      key: "longitude",
      from: 4,
      parse: (v, f) => combineWithHemisphere(v, f[5])
    },
    { key: "speedKnots", from: 6, parse: (v) => parseFloatSafe(v) },
    { key: "course", from: 7 },
    { key: "date", from: 8 },
    {
      key: "magneticVariation",
      from: 9,
      parse: (v, f) => (v ? `${v} ${f[10] || ""}`.trim() : undefined)
    }
  ]
};
