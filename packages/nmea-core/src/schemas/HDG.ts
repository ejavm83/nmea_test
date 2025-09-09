import type { NmeaSchema } from "../types";

export const HDG_SCHEMA: NmeaSchema = {
  type: "HDG",
  fields: [
    { key: "magneticSensorHeading", from: 0, parse: (v) => parseFloat(v) },
    { key: "magneticDeviation", from: 1, parse: (v) => parseFloat(v) },
    { key: "magneticDeviationDirection", from: 2 },
    { key: "magneticVariation", from: 3, parse: (v) => parseFloat(v) },
    { key: "magneticVariationDirection", from: 4 }
  ]
};


