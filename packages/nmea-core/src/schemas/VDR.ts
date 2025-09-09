import type { NmeaSchema } from "../types";

export const VDR_SCHEMA: NmeaSchema = {
  type: "VDR",
  fields: [
    { key: "directionTrue", from: 0, parse: (v) => parseFloat(v) },
    { key: "directionTrueUnit", from: 1 },
    { key: "directionMagnetic", from: 2, parse: (v) => parseFloat(v) },
    { key: "directionMagneticUnit", from: 3 },
    { key: "currentSpeed", from: 4, parse: (v) => parseFloat(v) },
    { key: "currentSpeedUnit", from: 5 }
  ]
};


