import type { NmeaSchema } from "../types";

// TPC – Transmit Slot Prohibit, Command
export const TPC_SCHEMA: NmeaSchema = {
  type: "TPC",
  fields: [
    { key: "uniqueIdentifier", from: 0 }, // 스테이션의 고유 식별자, 최대 15자
    { key: "sequentialIdentifier", from: 1, parse: (v) => v ? parseFloat(v) : null }, // 0~99, 이 TPC 문장에 대한 AIS 스테이션 응답 식별
    { key: "channelSelection", from: 2 }, // A=채널 A, B=채널 B
    { key: "utcTimeOfBlockingRequest", from: 3 }, // 요청된 슬롯 사용 차단 시간 (hhmmss.ss)
    { key: "referenceSlot", from: 4, parse: (v) => v ? parseFloat(v) : null }, // 다음 슬롯 오프셋이 참조되는 슬롯
    { key: "slotOffsetFirstBlock", from: 5, parse: (v) => v ? parseFloat(v) : null }, // 첫 번째 연속 슬롯 블록의 오프셋
    { key: "consecutiveSlotsFirstBlock", from: 6, parse: (v) => v ? parseFloat(v) : null }, // 첫 번째 블록의 연속 슬롯 총 수
    { key: "slotOffsetSecondBlock", from: 7, parse: (v) => v ? parseFloat(v) : null }, // 두 번째 연속 슬롯 블록의 오프셋
    { key: "consecutiveSlotsSecondBlock", from: 8, parse: (v) => v ? parseFloat(v) : null }, // 두 번째 블록의 연속 슬롯 총 수
    { key: "slotOffsetThirdBlock", from: 9, parse: (v) => v ? parseFloat(v) : null }, // 세 번째 연속 슬롯 블록의 오프셋
    { key: "consecutiveSlotsThirdBlock", from: 10, parse: (v) => v ? parseFloat(v) : null }, // 세 번째 블록의 연속 슬롯 총 수
    { key: "prohibitDurationControl", from: 11 }, // C=복원, E=만료, P=금지, R=복원
    { key: "sentenceStatusFlag", from: 12 }, // R=상태 보고, C=구성 명령
  ]
};
