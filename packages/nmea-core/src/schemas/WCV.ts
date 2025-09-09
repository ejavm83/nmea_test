import type { NmeaSchema } from "../types";

export const WCV_SCHEMA: NmeaSchema = {
  type: "WCV",
  fields: [
    { key: "velocityComponent", from: 0, parse: (v) => parseFloat(v) },
    { key: "velocityComponentUnit", from: 1 },
    { key: "waypointIdentifier", from: 2 },
    { key: "modeIndicator", from: 3 }
  ]
};


