import type { NmeaSchema } from "../types";

export const TBR_SCHEMA: NmeaSchema = {
  type: "TBR",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "requestFlagForSupportedParamCodes", from: 1 }
  ]
};


