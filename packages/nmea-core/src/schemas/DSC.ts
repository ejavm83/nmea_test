import type { NmeaSchema } from "../types";

export const DSC_SCHEMA: NmeaSchema = {
  type: "DSC",
  fields: [
    { key: "formatSpecifier", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "address", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "category", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "natureOfDistressOrTelecommand1", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "typeOfCommunicationOrTelecommand2", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "positionOrChannelFrequency", from: 5, parse: (v) => parseFloat(v) },
    { key: "timeOrTelNo", from: 6, parse: (v) => parseFloat(v) },
    { key: "mmsiOfDistressShip", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "natureOfDistress", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "acknowledgement", from: 9 },
    { key: "expansionIndicator", from: 10 }
  ]
};


