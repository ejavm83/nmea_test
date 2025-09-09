import type { NmeaSchema } from "../types";

export const ZTG_SCHEMA: NmeaSchema = {
  type: "ZTG",
  fields: [
    { key: "utcOfObservation", from: 0 },
    { key: "timeToGo", from: 1 },
    { key: "destinationWaypointId", from: 2 }
  ]
};


