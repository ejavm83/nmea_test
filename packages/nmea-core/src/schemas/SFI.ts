import type { NmeaSchema } from "../types";

export const SFI_SCHEMA: NmeaSchema = {
  type: "SFI",
  fields: [
    { key: "totalSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "frequency1", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "mode1", from: 3 },
    { key: "frequency2", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "mode2", from: 5 },
    { key: "frequency3", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "mode3", from: 7 },
    { key: "frequency4", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "mode4", from: 9 },
    { key: "frequency5", from: 10, parse: (v) => parseInt(v, 10) },
    { key: "mode5", from: 11 },
    { key: "frequency6", from: 12, parse: (v) => parseInt(v, 10) },
    { key: "mode6", from: 13 },
    { key: "sentenceStatusFlag", from: 14 }
  ]
};


