import type { NmeaSchema } from "../types";

export const DSR_SCHEMA: NmeaSchema = {
  type: "DSR",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "vesselMmsi", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "dataSet1Code", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "dataSet1Data", from: 4 },
    { key: "expansionIndicator", from: 5 }
  ]
};


