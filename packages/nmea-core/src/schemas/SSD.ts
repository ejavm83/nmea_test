import type { NmeaSchema } from "../types";

export const SSD_SCHEMA: NmeaSchema = {
  type: "SSD",
  fields: [
    { key: "shipCallSign", from: 0 },
    { key: "shipName", from: 1 },
    { key: "posRefPointDistanceAFromBow", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "posRefPointDistanceBFromStern", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "posRefPointDistanceCFromPortBeam", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "posRefPointDistanceDFromStarboardBeam", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "dteIndicatorFlag", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "sourceIdentifier", from: 7 }
  ]
};


