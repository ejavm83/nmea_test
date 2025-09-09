import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const PRC_SCHEMA: NmeaSchema = {
  type: "PRC",
  fields: [
    { key: "engineShaftNumber", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "operationState", from: 1 },
    { key: "rpmDemandValue", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "rpmModeIndicator", from: 3 },
    { key: "pitchDemandValue", from: 4, parse: (v) => parseFloatSafe(v) },
    { key: "pitchModeIndicator", from: 5 },
    { key: "commandSourceLocation", from: 6 },
    { key: "propellerShaftNumber", from: 7, parse: (v) => parseInt(v, 10) }
  ]
};


