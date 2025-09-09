import type { NmeaSchema } from "../types";

export const TRC_SCHEMA: NmeaSchema = {
  type: "TRC",
  fields: [
    { key: "numberOfThruster", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "rpmDemandValue", from: 1, parse: (v) => parseFloat(v) },
    { key: "rpmModeIndicator", from: 2 },
    { key: "pitchDemandValue", from: 3, parse: (v) => parseFloat(v) },
    { key: "pitchModeIndicator", from: 4 },
    { key: "azimuthDemand", from: 5, parse: (v) => parseFloat(v) },
    { key: "operatingLocationIndicator", from: 6 },
    { key: "sentenceStatusFlag", from: 7 }
  ]
};


