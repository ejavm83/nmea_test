import type { NmeaSchema } from "../types";

export const ALM_SCHEMA: NmeaSchema = {
  type: "ALM",
  fields: [
    { key: "totalNumSentences", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "sentenceNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "prnNumber", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "gpsWeekNumber", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "svHealth", from: 4 },
    { key: "eccentricity", from: 5 },
    { key: "toa", from: 6 },
    { key: "inclinationAngle", from: 7 },
    { key: "rateOfRightAscension", from: 8 },
    { key: "rootOfSemiMajorAxis", from: 9 },
    { key: "argumentOfPerigee", from: 10 },
    { key: "longitudeOfAscensionNode", from: 11 },
    { key: "meanAnomaly", from: 12 },
    { key: "clockParameter0", from: 13 },
    { key: "clockParameter1", from: 14 }
  ]
};


