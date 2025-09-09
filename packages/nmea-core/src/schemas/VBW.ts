import type { NmeaSchema } from "../types";

export const VBW_SCHEMA: NmeaSchema = {
  type: "VBW",
  fields: [
    { key: "longitudinalWaterSpeed", from: 0, parse: (v) => parseFloat(v) },
    { key: "transverseWaterSpeed", from: 1, parse: (v) => parseFloat(v) },
    { key: "waterSpeedStatus", from: 2 },
    { key: "longitudinalGroundSpeed", from: 3, parse: (v) => parseFloat(v) },
    { key: "transverseGroundSpeed", from: 4, parse: (v) => parseFloat(v) },
    { key: "groundSpeedStatus", from: 5 },
    { key: "sternTransverseWaterSpeed", from: 6, parse: (v) => parseFloat(v) },
    { key: "sternWaterSpeedStatus", from: 7 },
    { key: "sternTransverseGroundSpeed", from: 8, parse: (v) => parseFloat(v) },
    { key: "sternGroundSpeedStatus", from: 9 }
  ]
};


