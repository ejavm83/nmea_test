import type { NmeaSchema } from "../types";

export const SPO_SCHEMA: NmeaSchema = {
  type: "SPO",
  fields: [
    { key: "uniqueIdentifier", from: 0 },
    { key: "channelSelection", from: 1 },
    { key: "signalStrengthReceivedVdlMessage", from: 2, parse: (v) => parseInt(v, 10) },
    { key: "firstSlotNumberOfVdlMessage", from: 3, parse: (v) => parseInt(v, 10) },
    { key: "toaTimeOfMessageArrival", from: 4, parse: (v) => parseInt(v, 10) },
    { key: "signalToNoiseRatio", from: 5, parse: (v) => parseInt(v, 10) },
    { key: "previousFrameChannelLoad", from: 6, parse: (v) => parseInt(v, 10) },
    { key: "numMessagesBadCrc", from: 7, parse: (v) => parseInt(v, 10) },
    { key: "forecastChannelLoad", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "averageNoiseLevel", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "numSlotsReceivedSignalStrength", from: 10, parse: (v) => parseInt(v, 10) },
    { key: "vsiSentenceWithVdmOutput", from: 11, parse: (v) => parseInt(v, 10) },
    { key: "vsiSentenceWithVdoOutput", from: 12, parse: (v) => parseInt(v, 10) },
    { key: "fsrSentenceAfterEachFrame", from: 13, parse: (v) => parseInt(v, 10) },
    { key: "sentenceStatusFlag", from: 14 }
  ]
};


