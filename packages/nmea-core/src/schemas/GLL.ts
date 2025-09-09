import type { NmeaSchema } from "../types";

export const GLL_SCHEMA: NmeaSchema = {
  type: "GLL",
  fields: [
    { key: "latitude", from: 0, parse: (v) => parseFloat(v) },
    { key: "latitudeHemisphere", from: 1 },
    { key: "longitude", from: 2, parse: (v) => parseFloat(v) },
    { key: "longitudeHemisphere", from: 3 },
    { key: "utcOfPosition", from: 4 },
    { key: "status", from: 5 },
    { key: "modeIndicator", from: 6 }
  ]
};


