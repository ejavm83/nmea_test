import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const CUR_SCHEMA: NmeaSchema = {
  type: "CUR",
  fields: [
    { key: "validityOfData", from: 0, parse: (v) => v === "A" },
    { key: "dataSetNumber", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "layerNumber", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "currentDepth", from: 3, parse: (v) => parseFloatSafe(v) },
    { key: "currentDirection", from: 4, parse: (v) => parseFloatSafe(v) },
    { key: "directionReference", from: 5 },
    { key: "currentSpeed", from: 6, parse: (v) => parseFloatSafe(v) },
    { key: "referenceLayerDepth", from: 7, parse: (v) => parseFloatSafe(v) },
    { key: "heading", from: 8, parse: (v) => parseFloatSafe(v) },
    { key: "headingReference", from: 9 },
    { key: "speedReference", from: 10 }
  ]
};


