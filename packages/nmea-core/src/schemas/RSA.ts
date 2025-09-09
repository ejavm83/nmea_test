import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const RSA_SCHEMA: NmeaSchema = {
  type: "RSA",
  fields: [
    { key: "starboardRudderSensor", from: 0, parse: (v) => parseFloatSafe(v) },
    { key: "starboardRudderStatus", from: 1 },
    { key: "portRudderSensor", from: 2, parse: (v) => parseFloatSafe(v) },
    { key: "portRudderStatus", from: 3 }
  ]
};


