import type { NmeaSchema } from "../types";
import { combineWithHemisphere } from "../utils";

export const AGA_SCHEMA: NmeaSchema = {
  type: "AGA",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "stationType", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "shipCargoType", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "latitude1", from: 3, parse: (v, f) => combineWithHemisphere(v, f[4]) },
    { key: "hemisphere1", from: 4 },
    { key: "longitude1", from: 5, parse: (v, f) => combineWithHemisphere(v, f[6]) },
    { key: "ewIndicator1", from: 6 },
    { key: "latitude2", from: 7, parse: (v, f) => combineWithHemisphere(v, f[8]) },
    { key: "hemisphere2", from: 8 },
    { key: "longitude2", from: 9, parse: (v, f) => combineWithHemisphere(v, f[10]) },
    { key: "ewIndicator2", from: 10 },
    { key: "reportingInterval", from: 11, parse: (v) => parseInt(v, 10) },
    { key: "txRxMode", from: 12, parse: (v) => parseInt(v, 10) },
    { key: "quietTime", from: 13, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 14 }
  ]
};


