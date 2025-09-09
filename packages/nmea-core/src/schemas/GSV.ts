import type { NmeaSchema } from "../types";

export const GSV_SCHEMA: NmeaSchema = {
  type: "GSV",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "totalNumSatellitesInView", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "satellite1Id", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "satellite1Elevation", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "satellite1Azimuth", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "satellite1Snr", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "satellite2Id", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "satellite2Elevation", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "satellite2Azimuth", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "satellite2Snr", from: 10, parse: (v) => parseInt(v, 10) },
    { key: "satellite3Id", from: 11, parse: (v) => parseInt(v, 10) },
    { key: "satellite3Elevation", from: 12, parse: (v) => parseInt(v, 10) },
    { key: "satellite3Azimuth", from: 13, parse: (v) => parseInt(v, 10) },
    { key: "satellite3Snr", from: 14, parse: (v) => parseInt(v, 10) },
    { key: "satellite4Id", from: 15, parse: (v) => parseInt(v, 10) },
    { key: "satellite4Elevation", from: 16, parse: (v) => parseInt(v, 10) },
    { key: "satellite4Azimuth", from: 17, parse: (v) => parseInt(v, 10) },
    { key: "satellite4Snr", from: 18, parse: (v) => parseInt(v, 10) }
  ]
};


