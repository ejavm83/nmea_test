import type { NmeaSchema } from "../types";

export const MLA_SCHEMA: NmeaSchema = {
  type: "MLA",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "satelliteId", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "calendarDayCount", from: 3, parse: (v) => parseFloat(v) },
    { key: "generalizedHealthAndCarrierFreq", from: 4 },
    { key: "eccentricity", from: 5 },
    { key: "rateOfChangeDraconiticTime", from: 6 },
    { key: "argumentOfPerigee", from: 7 },
    { key: "systemTimeScaleCorrection", from: 8 },
    { key: "msbOfSystemTimeScaleCorrection", from: 9 },
    { key: "reserved1", from: 10 },
    { key: "reserved2", from: 11 },
    { key: "reserved3", from: 12 },
    { key: "reserved4", from: 13 },
    { key: "reserved5", from: 14 }
  ]
};


