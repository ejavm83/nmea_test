import type { NmeaSchema } from "../types";

export const GEN_SCHEMA: NmeaSchema = {
  type: "GEN",
  fields: [
    { key: "firstBinaryFieldIndex", from: 0 },
    { key: "timeStamp", from: 1 },
    { key: "packedBinaryField1", from: 2 },
    { key: "packedBinaryField2", from: 3 },
    { key: "packedBinaryField3", from: 4 },
    { key: "packedBinaryField4", from: 5 },
    { key: "packedBinaryField5", from: 6 },
    { key: "packedBinaryField6", from: 7 },
    { key: "packedBinaryField7", from: 8 },
    { key: "packedBinaryField8", from: 9 }
  ]
};


