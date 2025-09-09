import type { NmeaSchema } from "../types";

export const DSE_SCHEMA: NmeaSchema = {
  type: "DSE",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "queryReplyFlag", from: 2 },
    { key: "vesselMmsi", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "dataSet1Code", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "dataSet1Data", from: 5 }
  ]
};


