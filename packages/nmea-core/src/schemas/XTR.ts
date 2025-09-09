import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const XTR_SCHEMA: NmeaSchema = {
  type: "XTR",
  fields: [
    { key: "crossTrackErrorMagnitude", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "directionToSteer", from: 1 },
    { key: "units", from: 2 }
  ]
};


