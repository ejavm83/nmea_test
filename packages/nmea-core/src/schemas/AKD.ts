import type { NmeaSchema } from "../types";

export const AKD_SCHEMA: NmeaSchema = {
  type: "AKD",
  fields: [
    { key: "eventTime", from: 0 },
    { key: "systemIndicator", from: 1 },
    { key: "subsystemIndicator", from: 2 },
    { key: "instanceNumber", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "typeOfAlarm", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "alarmCondition", from: 5 },
    { key: "acknowledgedState", from: 6 },
    { key: "descriptionText", from: 7 }
  ]
};


