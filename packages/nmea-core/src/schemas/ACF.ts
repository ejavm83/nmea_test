import type { NmeaSchema } from "../types";
import { combineWithHemisphere } from "../utils";

export const ACF_SCHEMA: NmeaSchema = {
  type: "ACF",
  fields: [
    { key: "mmsi", from: 0 },
    { key: "typeOfEpfs", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "chartedLatitude", from: 2, parse: (v, f) => combineWithHemisphere(v, f[3]) },
    { key: "chartedHemisphere", from: 3 },
    { key: "chartedLongitude", from: 4, parse: (v, f) => combineWithHemisphere(v, f[5]) },
    { key: "chartedEWIndicator", from: 5 },
    { key: "positionAccuracy", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "rxChannelA", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "txChannelA", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "rxChannelB", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "txChannelB", from: 10, parse: (v) => parseInt(v, 10) },
    { key: "powerLevel", from: 11, parse: (v) => parseInt(v, 10) },
    { key: "typeOfAton", from: 12, parse: (v) => parseInt(v, 10) },
    { key: "virtualFlag", from: 13, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 14 }
  ]
};


