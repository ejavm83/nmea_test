import type { NmeaSchema } from "../types";

export const THS_SCHEMA: NmeaSchema = {
  type: "THS",
  fields: [
    { key: "headingTrue", from: 0, parse: (v) => parseFloat(v) },
    { key: "modeIndicator", from: 1 }
  ]
};


