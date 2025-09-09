import type { NmeaSchema } from "../types";

export const ACS_SCHEMA: NmeaSchema = {
  type: "ACS",
  fields: [
    { key: "sequenceNumber", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "originatorMmsi", from: 1 },
    { key: "utcOfReceipt", from: 2 },
    { key: "day", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "month", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "year", from: 5, parse: (v) => parseInt(v, 10) }
  ]
};


