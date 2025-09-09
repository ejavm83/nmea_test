import type { NmeaSchema } from "../types";

export const ADS_SCHEMA: NmeaSchema = {
  type: "ADS",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "utcTime", from: 1 },
    { key: "positionSource", from: 2 },
    { key: "timeSyncMethod", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "generalAlarmState", from: 4, parse: (v) => v === "A" },
    { key: "alarmStatus", from: 5, parse: (v) => v === "A" }
  ]
};


