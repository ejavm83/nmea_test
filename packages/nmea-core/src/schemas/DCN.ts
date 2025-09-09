import type { NmeaSchema } from "../types";

export const DCN_SCHEMA: NmeaSchema = {
  type: "DCN",
  fields: [
    { key: "chainIdentifier", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "pair1PatternIdentifier", from: 1 },
    { key: "pair1LineOfPosition", from: 2, parse: (v) => parseFloat(v) },
    { key: "pair1SignalStatus", from: 3 },
    { key: "pair2PatternIdentifier", from: 4 },
    { key: "pair2LineOfPosition", from: 5, parse: (v) => parseFloat(v) },
    { key: "pair2SignalStatus", from: 6 },
    { key: "pair3PatternIdentifier", from: 7 },
    { key: "pair3LineOfPosition", from: 8, parse: (v) => parseFloat(v) },
    { key: "pair3SignalStatus", from: 9 },
    { key: "fixDataStatus", from: 10 },
    { key: "blinkStatus", from: 11 },
    { key: "laneIdentificationStatus", from: 12 },
    { key: "cycleLockStatus", from: 13 },
    { key: "positionUncertaintyNm", from: 14, parse: (v) => parseFloat(v) },
    { key: "positionUncertaintyUnits", from: 15 },
    { key: "fixDataBasis", from: 16, parse: (v) => parseInt(v, 10) },
  ]
};
