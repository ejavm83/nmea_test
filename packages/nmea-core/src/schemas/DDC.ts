import type { NmeaSchema } from "../types";

export const DDC_SCHEMA: NmeaSchema = {
  type: "DDC",
  fields: [
    { key: "displayDimmingPreset", from: 0 },
    { key: "brightnessPercentage", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "colorPalette", from: 2 },
    { key: "sentenceStatusFlag", from: 3 }
  ]
};


