import type { NmeaSchema } from "../types";

export const LRI_SCHEMA: NmeaSchema = {
  type: "LRI",
  fields: [
    { key: "sequenceNumber", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "controlFlag", from: 1 },
    { key: "mmsiOfRequestor", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "mmsiOfDestination", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "latitudeSwCorner", from: 4, parse: (v) => parseFloat(v) },
    { key: "latitudeHemisphereSw", from: 5 },
    { key: "longitudeSwCorner", from: 6, parse: (v) => parseFloat(v) },
    { key: "longitudeHemisphereSw", from: 7 },
    { key: "latitudeNeCorner", from: 8, parse: (v) => parseFloat(v) },
    { key: "latitudeHemisphereNe", from: 9 },
    { key: "longitudeNeCorner", from: 10, parse: (v) => parseFloat(v) },
    { key: "longitudeHemisphereNe", from: 11 }
  ]
};


