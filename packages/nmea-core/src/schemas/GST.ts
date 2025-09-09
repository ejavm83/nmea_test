import type { NmeaSchema } from "../types";

export const GST_SCHEMA: NmeaSchema = {
  type: "GST",
  fields: [
    { key: "utcTime", from: 0 },
    { key: "rmsStdDevRangeInputs", from: 1, parse: (v) => parseFloat(v) },
    { key: "stdDevSemiMajorAxis", from: 2, parse: (v) => parseFloat(v) },
    { key: "stdDevSemiMinorAxis", from: 3, parse: (v) => parseFloat(v) },
    { key: "orientationSemiMajorAxis", from: 4, parse: (v) => parseFloat(v) },
    { key: "stdDevLatError", from: 5, parse: (v) => parseFloat(v) },
    { key: "stdDevLonError", from: 6, parse: (v) => parseFloat(v) },
    { key: "stdDevAltError", from: 7, parse: (v) => parseFloat(v) }
  ]
};


