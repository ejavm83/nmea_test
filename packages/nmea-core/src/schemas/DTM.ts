import type { NmeaSchema } from "../types";

export const DTM_SCHEMA: NmeaSchema = {
  type: "DTM",
  fields: [
    { key: "localDatumCode", from: 0 },
    { key: "localDatumSubdivisionCode", from: 1 },
    { key: "latOffset", from: 2, parse: (v) => parseFloat(v) },
    { key: "latOffsetHemisphere", from: 3 },
    { key: "lonOffset", from: 4, parse: (v) => parseFloat(v) },
    { key: "lonOffsetHemisphere", from: 5 },
    { key: "altitudeOffset", from: 6, parse: (v) => parseFloat(v) },
    { key: "referenceDatumCode", from: 7 }
  ]
};


