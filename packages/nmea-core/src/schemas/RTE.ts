import type { NmeaSchema } from "../types";

export const RTE_SCHEMA: NmeaSchema = {
  type: "RTE",
  fields: [
    { key: "totalSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "sentenceMode", from: 2 },
    { key: "routeIdentifier", from: 3 },
    { key: "waypointIds", from: 4, parse: (_v, f) => f.slice(4).filter((x) => x && x.length > 0) }
  ]
};


