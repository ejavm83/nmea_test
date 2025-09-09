import type { NmeaSchema } from "../types";

export const FIR_SCHEMA: NmeaSchema = {
  type: "FIR",
  fields: [
    { key: "messageType", from: 0 },
    { key: "eventTime", from: 1 },
    { key: "fireDetectionSystemType", from: 2 },
    { key: "firstDivisionIndicator", from: 3 },
    { key: "secondDivisionIndicator", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "fireDetectorNumberOrCount", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "condition", from: 6 },
    { key: "alarmAcknowledgementState", from: 7 },
    { key: "messageDescriptionText", from: 8 }
  ]
};


