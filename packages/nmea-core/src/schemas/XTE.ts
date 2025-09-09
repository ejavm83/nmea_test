import type { NmeaSchema } from "../types";

export const XTE_SCHEMA: NmeaSchema = {
  type: "XTE",
  fields: [
    { key: "dataStatusLoranCWarnings", from: 0 },
    { key: "dataStatusLoranCCycleLock", from: 1 },
    { key: "magnitudeOfXTE", from: 2, parse: (v) => parseFloat(v) },
    { key: "directionToSteer", from: 3 },
    { key: "xteUnits", from: 4 },
    { key: "modeIndicator", from: 5 },
  ]
};
