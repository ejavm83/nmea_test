import type { NmeaSchema } from "../types";

export const ZFO_SCHEMA: NmeaSchema = {
  type: "ZFO",
  fields: [
    { key: "utcOfObservation", from: 0 },
    { key: "elapsedTime", from: 1 },
    { key: "originWaypointId", from: 2 }
  ]
};


