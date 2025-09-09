import type { NmeaSchema } from "../types";

export const HTC_SCHEMA: NmeaSchema = {
  type: "HTC",
  fields: [
    { key: "override", from: 0 },
    { key: "commandedRudderAngle", from: 1, parse: (v) => parseFloat(v) },
    { key: "commandedRudderDirection", from: 2 },
    { key: "selectedSteeringMode", from: 3 },
    { key: "turnMode", from: 4 },
    { key: "commandedOffHeadingLimit", from: 5, parse: (v) => parseFloat(v) },
    { key: "commandedRadiusOfTurn", from: 6, parse: (v) => parseFloat(v) },
    { key: "commandedRateOfTurn", from: 7, parse: (v) => parseFloat(v) },
    { key: "commandedHeadingToSteer", from: 8, parse: (v) => parseFloat(v) },
    { key: "commandedOffTrackLimit", from: 9, parse: (v) => parseFloat(v) },
    { key: "commandedTrack", from: 10, parse: (v) => parseFloat(v) },
    { key: "headingReferenceInUse", from: 11 },
    { key: "sentenceStatusFlag", from: 12 }
  ]
};


