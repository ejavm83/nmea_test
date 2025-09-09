import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const OSD_SCHEMA: NmeaSchema = {
  type: "OSD",
  fields: [
    { key: "headingTrue", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "headingStatus", from: 1 },
    { key: "vesselCourseTrue", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "courseReference", from: 3 },
    { key: "vesselSpeed", from: 4, parse: (v) => parseFloatSafe(v) },
    { key: "speedReference", from: 5 },
    { key: "vesselSetTrue", from: 6, parse: (v) => parseFloatSafe(v) },
    { key: "vesselDriftSpeed", from: 7, parse: (v) => parseFloatSafe(v) },
    { key: "speedUnits", from: 8 }
  ]
};


