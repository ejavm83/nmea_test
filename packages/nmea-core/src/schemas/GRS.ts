import type { NmeaSchema } from "../types";

export const GRS_SCHEMA: NmeaSchema = {
  type: "GRS",
  fields: [
    { key: "utcTime", from: 0 },
    { key: "mode", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "rangeResidual1", from: 2, parse: (v) => parseFloat(v) },
    { key: "rangeResidual2", from: 3, parse: (v) => parseFloat(v) },
    { key: "rangeResidual3", from: 4, parse: (v) => parseFloat(v) },
    { key: "rangeResidual4", from: 5, parse: (v) => parseFloat(v) },
    { key: "rangeResidual5", from: 6, parse: (v) => parseFloat(v) },
    { key: "rangeResidual6", from: 7, parse: (v) => parseFloat(v) },
    { key: "rangeResidual7", from: 8, parse: (v) => parseFloat(v) },
    { key: "rangeResidual8", from: 9, parse: (v) => parseFloat(v) },
    { key: "rangeResidual9", from: 10, parse: (v) => parseFloat(v) },
    { key: "rangeResidual10", from: 11, parse: (v) => parseFloat(v) },
    { key: "rangeResidual11", from: 12, parse: (v) => parseFloat(v) },
    { key: "rangeResidual12", from: 13, parse: (v) => parseFloat(v) }
  ]
};


