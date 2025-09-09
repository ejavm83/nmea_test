import type { NmeaSchema } from "../types";

export const WNC_SCHEMA: NmeaSchema = {
  type: "WNC",
  fields: [
    { key: "distanceNauticalMiles", from: 0, parse: (v) => parseFloat(v) },
    { key: "distanceNauticalMilesUnit", from: 1 },
    { key: "distanceKilometers", from: 2, parse: (v) => parseFloat(v) },
    { key: "distanceKilometersUnit", from: 3 },
    { key: "toWaypointIdentifier", from: 4 },
    { key: "fromWaypointIdentifier", from: 5 }
  ]
};


