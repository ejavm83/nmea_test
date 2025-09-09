import type { NmeaSchema } from "../types";

export const WAT_SCHEMA: NmeaSchema = {
  type: "WAT",
  fields: [
    { key: "messageType", from: 0 },
    { key: "timeStamp", from: 1 },
    { key: "typeOfWaterAlarmSystem", from: 2 },
    { key: "firstLocationIndicator", from: 3 },
    { key: "secondLocationIndicator", from: 4 },
    { key: "detectionPointNumberOrCount", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "alarmCondition", from: 6 },
    { key: "overrideSetting", from: 7 },
    { key: "messageDescriptionText", from: 8 }
  ]
};


