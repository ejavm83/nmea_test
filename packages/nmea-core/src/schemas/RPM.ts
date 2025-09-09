import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const RPM_SCHEMA: NmeaSchema = {
  type: "RPM",
  fields: [
    { key: "source", from: 0 },
    { key: "engineShaftNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "speedRPM", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "propellerPitch", from: 3, parse: (v) => parseFloatSafe(v) },
    { key: "status", from: 4 }
  ]
};


