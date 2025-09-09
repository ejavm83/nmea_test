import type { NmeaSchema } from "../types";

// TSA – Transmit Slot Assignment
export const TSA_SCHEMA: NmeaSchema = {
  type: "TSA",
  fields: [
    { key: "uniqueIdentifier", from: 0 }, // 스테이션의 고유 식별자, 최대 15자
    { key: "sequentialIdentifier", from: 1, parse: (v) => v ? parseInt(v, 10) : null }, // 0~99, 이 TSP 문장에 대한 Base Station 응답 식별
    { key: "channelSelection", from: 2 }, // 채널 선택 (A/B)
    { key: "utcFrameHourAndMinute", from: 3 }, // 요청된 전송의 UTC 프레임 시간 및 분 (HHMM)
    { key: "startSlotNumberOfRequestedTransmission", from: 4, parse: (v) => v ? parseFloat(v) : null }, // 요청된 전송의 시작 슬롯 번호
    { key: "priority", from: 5, parse: (v) => v ? parseInt(v, 10) : null }, // 우선순위 (0=취소, 1=높음, 2=낮음)
  ]
};
