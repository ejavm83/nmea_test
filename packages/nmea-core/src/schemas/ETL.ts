import type { NmeaSchema } from "../types";

export const ETL_SCHEMA: NmeaSchema = {
  type: "ETL",
  fields: [
    { key: "eventTime", from: 0 },
    { key: "messageType", from: 1 },
    { key: "engineTelegraphPosition", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "subTelegraphPosition", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "operatingLocationIndicator", from: 4 },
    { key: "engineOrShaftNumber", from: 5, parse: (v) => parseInt(v, 10) }
  ]
};


