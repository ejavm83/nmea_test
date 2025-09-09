import type { NmeaSchema } from "../types";

export const ZDA_SCHEMA: NmeaSchema = {
  type: "ZDA",
  fields: [
    { key: "utcTime", from: 0 },
    { key: "day", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "month", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "year", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "localZoneHours", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "localZoneMinutes", from: 5, parse: (v) => parseInt(v, 10) }
  ]
};


