import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const XDR_SCHEMA: NmeaSchema = {
  type: "XDR",
  fields: [
    // We'll parse the first transducer set explicitly, additional sets can be handled by the caller if needed
    { key: "transducerType1", from: 0 },
    { key: "measurementData1", from: 1, parse: (v) => parseFloatSafe(v) },
    { key: "unitsOfMeasure1", from: 2 },
    { key: "transducerId1", from: 3 }
  ]
};


