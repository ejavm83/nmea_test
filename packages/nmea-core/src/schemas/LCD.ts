import type { NmeaSchema } from "../types";

export const LCD_SCHEMA: NmeaSchema = {
  type: "LCD",
  fields: [
    { key: "gri", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "masterEcd", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "secondary1Ecd", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "secondary2Ecd", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "secondary3Ecd", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "secondary4Ecd", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "secondary5Ecd", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "secondary6Ecd", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "secondary7Ecd", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "secondary8Ecd", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "secondary9Ecd", from: 10, parse: (v) => parseInt(v, 10) },
    { key: "secondary10Ecd", from: 11, parse: (v) => parseInt(v, 10) },
    { key: "secondary11Ecd", from: 12, parse: (v) => parseInt(v, 10) }
  ]
};


