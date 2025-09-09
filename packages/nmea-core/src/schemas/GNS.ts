import type { NmeaSchema } from "../types";

export const GNS_SCHEMA: NmeaSchema = {
  type: "GNS",
  fields: [
    { key: "utcOfPosition", from: 0 },
    { key: "latitude", from: 1, parse: (v) => parseFloat(v) },
    { key: "latitudeHemisphere", from: 2 },
    { key: "longitude", from: 3, parse: (v) => parseFloat(v) },
    { key: "longitudeHemisphere", from: 4 },
    { key: "modeIndicator", from: 5 },
    { key: "totalNumSatellites", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "hdop", from: 7, parse: (v) => parseFloat(v) },
    { key: "antennaAltitude", from: 8, parse: (v) => parseFloat(v) },
    { key: "geoidalSeparation", from: 9, parse: (v) => parseFloat(v) },
    { key: "ageOfDifferentialData", from: 10, parse: (v) => parseFloat(v) },
    { key: "differentialRefStationId", from: 11, parse: (v) => parseFloat(v) }
  ]
};


