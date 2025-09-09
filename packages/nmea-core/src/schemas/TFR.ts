import type { NmeaSchema } from "../types";

export const TFR_SCHEMA: NmeaSchema = {
  type: "TFR",
  fields: [
    { key: "totalNumSentencesVdmMessage", from: 0, parse: (v) => parseInt(v, 10) },
    { key: "vdmLinkToMessageReported", from: 1, parse: (v) => parseInt(v, 10) },
    { key: "aisChannelRequestedVdmMessage", from: 2 },
    { key: "uniqueIdentifier", from: 3 },
    { key: "utcFrameHourMinuteRequested", from: 4 },
    { key: "startSlotNumRequested", from: 5, parse: (v) => parseFloat(v) },
    { key: "utcFrameHourMinuteAssigned", from: 6 },
    { key: "startSlotNumAssigned", from: 7, parse: (v) => parseFloat(v) },
    { key: "numConsecutiveTimeSlotsForMsg", from: 8, parse: (v) => parseInt(v, 10) },
    { key: "transmissionPriority", from: 9, parse: (v) => parseInt(v, 10) },
    { key: "status", from: 10, parse: (v) => parseFloat(v) }
  ]
};


