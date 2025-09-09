import type { NmeaSchema } from "../types";
import { combineWithHemisphere } from "../utils";

export const ACA_SCHEMA: NmeaSchema = {
  type: "ACA",
  fields: [
    { key: "sequenceNumber", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "regionSWLatitude", from: 1, parse: (v, f) => combineWithHemisphere(v, f[2]) },
    { key: "regionSWHemisphere", from: 2 },
    { key: "regionSWLongitude", from: 3, parse: (v, f) => combineWithHemisphere(v, f[4]) },
    { key: "regionSWEWIndicator", from: 4 },
    { key: "regionNELatitude", from: 5, parse: (v, f) => combineWithHemisphere(v, f[6]) },
    { key: "regionNEHemisphere", from: 6 },
    { key: "regionNELongitude", from: 7, parse: (v, f) => combineWithHemisphere(v, f[8]) },
    { key: "regionNEEWIndicator", from: 8 },
    { key: "transitionZoneSize", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "channelA", from: 10, parse: (v) => parseInt(v, 10) },
    { key: "channelABandwidth", from: 11, parse: (v) => parseInt(v, 10) },
    { key: "channelB", from: 12, parse: (v) => parseInt(v, 10) },
    { key: "channelBBandwidth", from: 13, parse: (v) => parseInt(v, 10) },
    { key: "txRxMode", from: 14, parse: (v) => parseInt(v, 10) },
    { key: "powerLevel", from: 15, parse: (v) => parseInt(v, 10) },
    { key: "informationSource", from: 16 },
    { key: "inUseFlag", from: 17, parse: (v) => parseInt(v, 10) },
    { key: "timeInUseChange", from: 18 }
  ]
};


