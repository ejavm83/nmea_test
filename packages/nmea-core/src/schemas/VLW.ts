import type { NmeaSchema } from "../types";

export const VLW_SCHEMA: NmeaSchema = {
  type: "VLW",
  fields: [
    { key: "totalCumulativeWaterDistance", from: 0, parse: (v) => parseFloat(v) },
    { key: "totalCumulativeWaterDistanceUnit", from: 1 },
    { key: "waterDistanceSinceReset", from: 2, parse: (v) => parseFloat(v) },
    { key: "waterDistanceSinceResetUnit", from: 3 },
    { key: "totalCumulativeGroundDistance", from: 4, parse: (v) => parseFloat(v) },
    { key: "totalCumulativeGroundDistanceUnit", from: 5 },
    { key: "groundDistanceSinceReset", from: 6, parse: (v) => parseFloat(v) },
    { key: "groundDistanceSinceResetUnit", from: 7 }
  ]
};


