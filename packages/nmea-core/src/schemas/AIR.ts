import type { NmeaSchema } from "../types";

export const AIR_SCHEMA: NmeaSchema = {
  type: "AIR",
  fields: [
    { key: "interrogatedMmsi1", from: 0 },
    { key: "messageType1", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "messageSubsection1", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "messageType2", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "messageSubsection2", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "interrogatedMmsi2", from: 5 },
    { key: "messageType3", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "messageSubsection3", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "channel", from: 8 },
    { key: "powerLevel", from: 9, parse: (v) => parseInt(v, 10) }
  ]
};


