import type { NmeaSchema } from "../types";

export const VSD_SCHEMA: NmeaSchema = {
  type: "VSD",
  fields: [
    { key: "shipCargoType", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "maxPresentDraught", from: 1, parse: (v) => parseFloat(v) },
    { key: "personsOnBoard", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "destination", from: 3 },
    { key: "estimatedUtcOfArrival", from: 4 },
    { key: "estimatedDayOfArrival", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "estimatedMonthOfArrival", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "navigationalStatus", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "regionalApplicationFlags", from: 8, parse: (v) => parseFloat(v) }
  ]
};


