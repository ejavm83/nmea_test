import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const MWD_SCHEMA: NmeaSchema = {
  type: "MWD",
  fields: [
    { key: "windDirectionTrue", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "windDirectionTrueUnit", from: 1 },
    { key: "windDirectionMagnetic", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "windDirectionMagneticUnit", from: 3 },
    { key: "windSpeedKnots", from: 4, parse: (v) => parseFloatSafe(v) },
    { key: "windSpeedKnotsUnit", from: 5 },
    { key: "windSpeedMetersSecond", from: 6, parse: (v) => parseFloatSafe(v) },
    { key: "windSpeedMetersSecondUnit", from: 7 }
  ]
};


