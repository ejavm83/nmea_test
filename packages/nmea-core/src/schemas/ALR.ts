import type { NmeaSchema } from "../types";

export const ALR_SCHEMA: NmeaSchema = {
  type: "ALR",
  fields: [
    { key: "utcTime", from: 0 },
    { key: "alarmId", from: 1 },
    { key: "alarmCondition", from: 2, parse: (v) => v === "A" },
    { key: "acknowledgmentState", from: 3, parse: (v) => v === "A" },
    { key: "descriptionText", from: 4 }
  ]
};


