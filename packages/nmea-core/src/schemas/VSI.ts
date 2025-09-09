import type { NmeaSchema } from "../types";

export const VSI_SCHEMA: NmeaSchema = {
  type: "VSI",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "vdmVdoLink", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "toaTimeOfMessageArrival", from: 2 },
    { key: "firstSlotNumberOfVdlMessage", from: 3, parse: (v) => parseFloat(v) },
    { key: "signalStrength", from: 4, parse: (v) => parseFloat(v) },
    { key: "signalToNoiseRatio", from: 5, parse: (v) => parseFloat(v) }
  ]
};


