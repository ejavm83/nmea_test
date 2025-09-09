import type { NmeaSchema } from "../types";

export const DSI_SCHEMA: NmeaSchema = {
  type: "DSI",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "vesselMmsi", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "vesselCourse", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "vesselType", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "geographicArea", from: 5 },
    { key: "commandSet1Code", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "commandSet1Data", from: 7 },
    { key: "expansionIndicator", from: 8 }
  ]
};


