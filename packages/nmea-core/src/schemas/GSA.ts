import type { NmeaSchema } from "../types";

export const GSA_SCHEMA: NmeaSchema = {
  type: "GSA",
  fields: [
    { key: "mode", from: 0 },
    { key: "fixType", from: 1, parse: (v) => Number(v) },
    {
      key: "satelliteIds",
      from: 2,
      parse: (_v, f) => f.slice(2, 14).filter((x) => x && x.length > 0)
    },
    { key: "pdop", from: 14, parse: (v) => parseFloat(v) },
    { key: "hdop", from: 15, parse: (v) => parseFloat(v) },
    { key: "vdop", from: 16, parse: (v) => parseFloat(v) }
  ]
};
