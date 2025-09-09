import type { NmeaSchema } from "../types";

export const EVE_SCHEMA: NmeaSchema = {
  type: "EVE",
  fields: [
    { key: "eventTime", from: 0 },
    { key: "tagCode", from: 1 },
    { key: "eventDescription", from: 2 }
  ]
};


