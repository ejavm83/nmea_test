import type { NmeaSchema } from "../types";

export const GBS_SCHEMA: NmeaSchema = {
  type: "GBS",
  fields: [
    { key: "utcTime", from: 0 },
    { key: "expectedErrorLat", from: 1, parse: (v) => parseFloat(v) },
    { key: "expectedErrorLon", from: 2, parse: (v) => parseFloat(v) },
    { key: "expectedErrorAlt", from: 3, parse: (v) => parseFloat(v) },
    { key: "failedSatelliteId", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "probMissedDetection", from: 5, parse: (v) => parseFloat(v) },
    { key: "biasEstimate", from: 6, parse: (v) => parseFloat(v) },
    { key: "stdDevBiasEstimate", from: 7, parse: (v) => parseFloat(v) }
  ]
};


