import type { NmeaSchema } from "../types";

export const DCR_SCHEMA: NmeaSchema = {
  type: "DCR",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "capabilities", from: 1 }
  ]
};


