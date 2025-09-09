import type { NmeaSchema } from "../types";

// HSC – Heading Steering Command
export const HSC_SCHEMA: NmeaSchema = {
  type: "HSC",
  fields: [
    { key: "override", from: 0 }, // A=사용 중, V=미사용. 조향 장치 직접 제어
    { key: "commandedRudderAngle", from: 1, parse: (v) => v ? parseFloat(v) : null }, // 명령된 키 각도 (도)
    { key: "commandedRudderDirection", from: 2 }, // L/R = 좌현/우현
    { key: "selectedSteeringMode", from: 3 }, // S=독립형, H=방향 제어, T=트랙 제어, R=키 제어
    { key: "turnMode", from: 4 }, // R=반경 제어, T=회전율 제어, N=회전 미제어
    { key: "commandedRudderLimit", from: 5, parse: (v) => v ? parseFloat(v) : null }, // 명령된 키 한계 (도, 부호 없음)
    { key: "commandedOffHeadingLimit", from: 6, parse: (v) => v ? parseFloat(v) : null }, // 명령된 오프-헤딩 한계 (도, 부호 없음)
    { key: "commandedRadiusOfTurn", from: 7, parse: (v) => v ? parseFloat(v) : null }, // 헤딩 변경을 위한 명령된 회전 반경 (해리)
    { key: "commandedRateOfTurn", from: 8, parse: (v) => v ? parseFloat(v) : null }, // 헤딩 변경을 위한 명령된 회전율 (도/분)
    { key: "commandedHeadingToSteer", from: 9, parse: (v) => v ? parseFloat(v) : null }, // 명령된 조향 헤딩 (도)
    { key: "commandedOffTrackLimit", from: 10, parse: (v) => v ? parseFloat(v) : null }, // 명령된 오프-트랙 한계 (해리, 부호 없음)
    { key: "commandedTrack", from: 11, parse: (v) => v ? parseFloat(v) : null }, // 명령된 트랙 (도)
    { key: "headingReferenceInUse", from: 12 }, // 사용 중인 헤딩 기준, T/M (True/Magnetic)
    { key: "sentenceStatusFlag", from: 13 }, // C = 설정을 변경하기 위한 구성 명령
  ]
};
