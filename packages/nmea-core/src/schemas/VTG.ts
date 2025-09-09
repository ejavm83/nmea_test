import type { NmeaSchema } from "../types";

export const VTG_SCHEMA: NmeaSchema = {
  type: "VTG",
  fields: [
    { key: "courseOverGroundTrue", from: 0, parse: (v) => parseFloat(v) },
    { key: "courseOverGroundTrueUnit", from: 1 },
    { key: "courseOverGroundMagnetic", from: 2, parse: (v) => parseFloat(v) },
    { key: "courseOverGroundMagneticUnit", from: 3 },
    { key: "speedOverGroundKnots", from: 4, parse: (v) => parseFloat(v) },
    { key: "speedOverGroundKnotsUnit", from: 5 },
    { key: "speedOverGroundKmPerHour", from: 6, parse: (v) => parseFloat(v) },
    { key: "speedOverGroundKmPerHourUnit", from: 7 },
    { key: "modeIndicator", from: 8 }
  ]
};


