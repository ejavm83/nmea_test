import type { NmeaSchema } from "../types";

// FSR – Frame Summary of AIS Reception
export const FSR_SCHEMA: NmeaSchema = {
  type: "FSR",
  fields: [
    { key: "uniqueIdentifier", from: 0 }, // Base Station의 고유 식별자, 최대 15자
    { key: "utcTimeOfAssembly", from: 1 }, // 문장이 조립된 UTC 시간
    { key: "aisChannel", from: 2 }, // A=채널 A, B=채널 B
    { key: "averageNoiseLevelDb", from: 3, parse: (v) => v ? parseFloat(v) : null }, // 평균 노이즈 레벨 (dB), 항상 음수값. 측정 불가시 null
    { key: "ais10dbOverNoise", from: 4, parse: (v) => v ? parseFloat(v) : null }, // 평균 노이즈 레벨보다 10dB 이상인 수신 신호 강도를 가진 슬롯 수
    { key: "receivedMessagesPreviousFrame", from: 5, parse: (v) => v ? parseFloat(v) : null }, // 이전 프레임에서 수신된 총 메시지 수
    { key: "receivedMessagesCrcError", from: 6, parse: (v) => v ? parseFloat(v) : null }, // CRC 오류와 함께 수신된 메시지 수
    { key: "totalExternalSlotReservations", from: 7, parse: (v) => v ? parseFloat(v) : null }, // FATDMA 예약을 포함한 총 외부 슬롯 예약 수
    { key: "totalNumberOfReservations", from: 8, parse: (v) => v ? parseFloat(v) : null }, // 현재 프레임의 총 예약 수
    { key: "currentFrameSlotReservations", from: 9, parse: (v) => v ? parseFloat(v) : null }, // 현재 프레임의 예상 슬롯 사용량
  ]
};
