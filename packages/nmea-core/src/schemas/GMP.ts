import type { NmeaSchema } from "../types";

export const GMP_SCHEMA: NmeaSchema = {
  type: "GMP",
  fields: [
    { key: "utcOfPosition", from: 0 },
    { key: "mapProjectionId", from: 1 },
    { key: "mapZone", from: 2 },
    { key: "xComponent", from: 3, parse: (v) => parseFloat(v) },
    { key: "yComponent", from: 4, parse: (v) => parseFloat(v) },
    { key: "modeIndicator", from: 5 },
    { key: "totalNumSatellites", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "hdop", from: 7, parse: (v) => parseFloat(v) },
    { key: "antennaAltitude", from: 8, parse: (v) => parseFloat(v) },
    { key: "geoidalSeparation", from: 9, parse: (v) => parseFloat(v) },
    { key: "ageOfDifferentialData", from: 10, parse: (v) => parseFloat(v) },
    { key: "differentialRefStationId", from: 11, parse: (v) => parseFloat(v) }
  ]
};


