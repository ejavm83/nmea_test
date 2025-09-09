import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const NRX_SCHEMA: NmeaSchema = {
  type: "NRX",
  fields: [
    { key: "totalSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "navtexMessageCode", from: 2 },
    { key: "navtexSerialNumber", from: 3 },
    { key: "frequencyIndicator", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "timeOfReceipt", from: 5 },
    { key: "messageBodySize", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "receiverNameNumber", from: 7 },
    { key: "dateOfReceipt", from: 8 },
    { key: "signalLevel", from: 9, parse: (v) => parseFloatSafe(v) },
    { key: "errorRate", from: 10, parse: (v) => parseFloatSafe(v) },
    { key: "status", from: 11 },
    { key: "messageBody", from: 12 }
  ]
};


