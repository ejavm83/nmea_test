import type { NmeaSchema } from "../types";
import { parseFloatSafe } from "../utils";

export const NAK_SCHEMA: NmeaSchema = {
  type: "NAK",
  fields: [
    { key: "talkerId", from: 0 },
    { key: "sentenceFormatter", from: 1 },
    { key: "uniqueIdentifier", from: 2 },
    { key: "reasonCode", from: 3, parse: (v) => parseFloatSafe(v) },
    { key: "reasonDescription", from: 4 }
  ]
};


