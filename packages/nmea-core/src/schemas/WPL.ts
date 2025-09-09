import type { NmeaSchema } from "../types";

export const WPL_SCHEMA: NmeaSchema = {
  type: "WPL",
  fields: [
    { key: "latitude", from: 0, parse: (v) => parseFloat(v) },
    { key: "latitudeHemisphere", from: 1 },
    { key: "longitude", from: 2, parse: (v) => parseFloat(v) },
    { key: "longitudeHemisphere", from: 3 },
    { key: "waypointIdentifier", from: 4 }
  ]
};


