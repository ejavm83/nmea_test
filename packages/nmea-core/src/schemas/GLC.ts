import type { NmeaSchema } from "../types";

export const GLC_SCHEMA: NmeaSchema = {
  type: "GLC",
  fields: [
    { key: "gri", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "masterToa", from: 1, parse: (v) => parseFloat(v) },
    { key: "masterToaStatus", from: 2 },
    { key: "td1", from: 3, parse: (v) => parseFloat(v) },
    { key: "td1Status", from: 4 },
    { key: "td2", from: 5, parse: (v) => parseFloat(v) },
    { key: "td2Status", from: 6 },
    { key: "td3", from: 7, parse: (v) => parseFloat(v) },
    { key: "td3Status", from: 8 },
    { key: "td4", from: 9, parse: (v) => parseFloat(v) },
    { key: "td4Status", from: 10 },
    { key: "td5", from: 11, parse: (v) => parseFloat(v) },
    { key: "td5Status", from: 12 }
  ]
};


