import type { NmeaSchema } from "../types";

export const ACK_SCHEMA: NmeaSchema = {
  type: "ACK",
  fields: [
    { key: "alarmNumber", from: 0, parse: (v) => parseInt(v, 10) }
  ]
};


