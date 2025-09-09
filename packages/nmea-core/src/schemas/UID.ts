import type { NmeaSchema } from "../types";

export const UID_SCHEMA: NmeaSchema = {
  type: "UID",
  fields: [
    { key: "userIdentificationCode1", from: 0 },
    { key: "userIdentificationCode2", from: 1 }
  ]
};


