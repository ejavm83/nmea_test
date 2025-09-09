import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const ZDL_SCHEMA: NmeaSchema = {
  type: "ZDL",
  fields: [
    { key: "timeToPoint", from: 0 },
    { key: "distanceToPoint", from: 1, parse: (v) => parseFloatSafe(v) },
    { key: "pointType", from: 2 }
  ]
};


