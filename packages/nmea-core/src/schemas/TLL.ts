import type { NmeaSchema } from "../types";

export const TLL_SCHEMA: NmeaSchema = {
  type: "TLL",
  fields: [
    { key: "targetNumber", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "latitude", from: 1, parse: (v) => parseFloat(v) },
    { key: "latitudeHemisphere", from: 2 },
    { key: "longitude", from: 3, parse: (v) => parseFloat(v) },
    { key: "longitudeHemisphere", from: 4 },
    { key: "targetName", from: 5 },
    { key: "utcOfData", from: 6 },
    { key: "targetStatus", from: 7 },
    { key: "referenceTarget", from: 8 }
  ]
};


