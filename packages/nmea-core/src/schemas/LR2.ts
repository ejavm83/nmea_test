import type { NmeaSchema } from "../types";

export const LR2_SCHEMA: NmeaSchema = {
  type: "LR2",
  fields: [
    { key: "sequenceNumber", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "mmsiOfResponder", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "date", from: 2 },
    { key: "utcOfPosition", from: 3 },
    { key: "latitude", from: 4, parse: (v) => parseFloat(v) },
    { key: "latitudeHemisphere", from: 5 },
    { key: "longitude", from: 6, parse: (v) => parseFloat(v) },
    { key: "longitudeHemisphere", from: 7 },
    { key: "courseOverGround", from: 8, parse: (v) => parseFloat(v) },
    { key: "cogUnits", from: 9 },
    { key: "speedOverGround", from: 10, parse: (v) => parseFloat(v) },
    { key: "sogUnits", from: 11 }
  ]
};


