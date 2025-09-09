import type { NmeaSchema } from "../types";

export const DOR_SCHEMA: NmeaSchema = {
  type: "DOR",
  fields: [
    { key: "messageType", from: 0 },
    { key: "eventTime", from: 1 },
    { key: "doorMonitoringSystemType", from: 2 },
    { key: "firstDivisionIndicator", from: 3 },
    { key: "secondDivisionIndicator", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "doorNumberOrCount", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "doorStatus", from: 6 },
    { key: "waterTightDoorSwitchSetting", from: 7 },
    { key: "messageDescriptionText", from: 8 }
  ]
};


