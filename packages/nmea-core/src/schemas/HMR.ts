import type { NmeaSchema } from "../types";

export const HMR_SCHEMA: NmeaSchema = {
  type: "HMR",
  fields: [
    { key: "headingSensor1Id", from: 0 },
    { key: "headingSensor2Id", from: 1 },
    { key: "differenceLimitSetting", from: 2, parse: (v) => parseFloat(v) },
    { key: "actualHeadingSensorDifference", from: 3, parse: (v) => parseFloat(v) },
    { key: "warningFlag", from: 4 },
    { key: "sensor1Heading", from: 5, parse: (v) => parseFloat(v) },
    { key: "sensor1Status", from: 6 },
    { key: "sensor1Type", from: 7 },
    { key: "sensor1Deviation", from: 8, parse: (v) => parseFloat(v) },
    { key: "sensor1DeviationDirection", from: 9 },
    { key: "sensor2Heading", from: 10, parse: (v) => parseFloat(v) },
    { key: "sensor2Status", from: 11 },
    { key: "sensor2Type", from: 12 },
    { key: "sensor2Deviation", from: 13, parse: (v) => parseFloat(v) },
    { key: "sensor2DeviationDirection", from: 14 },
    { key: "variation", from: 15, parse: (v) => parseFloat(v) },
    { key: "variationDirection", from: 16 }
  ]
};


