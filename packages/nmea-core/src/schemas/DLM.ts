import type { NmeaSchema } from "../types";

export const DLM_SCHEMA: NmeaSchema = {
  type: "DLM",
  fields: [
    { key: "recordIndex", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "aisChannel", from: 1 },
    { key: "ownership1", from: 2 },
    { key: "start1", from: 3, parse: (v) => parseFloat(v) },
    { key: "number1", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "time1", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "increment1", from: 6, parse: (v) => parseFloat(v) },
    { key: "ownership2", from: 7 },
    { key: "start2", from: 8, parse: (v) => parseFloat(v) },
    { key: "number2", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "time2", from: 10, parse: (v) => parseInt(v, 10) },
    { key: "increment2", from: 11, parse: (v) => parseFloat(v) },
    { key: "ownership3", from: 12 },
    { key: "start3", from: 13, parse: (v) => parseFloat(v) },
    { key: "number3", from: 14, parse: (v) => parseInt(v, 10) },
    { key: "time3", from: 15, parse: (v) => parseInt(v, 10) },
    { key: "increment3", from: 16, parse: (v) => parseFloat(v) },
    { key: "ownership4", from: 17 },
    { key: "start4", from: 18, parse: (v) => parseFloat(v) },
    { key: "number4", from: 19, parse: (v) => parseInt(v, 10) },
    { key: "time4", from: 20, parse: (v) => parseInt(v, 10) },
    { key: "increment4", from: 21, parse: (v) => parseFloat(v) }
  ]
};


