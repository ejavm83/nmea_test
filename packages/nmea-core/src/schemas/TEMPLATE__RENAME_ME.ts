import type { NmeaSchema } from "../types";

// 사용법:
// 1) 파일 이름을 실제 타입명으로 변경 (예: RTE.ts)
// 2) type을 해당 문장 타입으로 설정 (예: "RTE")
// 3) fields 배열에서 from 인덱스를 원시 필드 위치에 맞춰 지정
// 4) schemas/index.ts에서 registerSchema 호출에 추가

export const TEMPLATE_SCHEMA: NmeaSchema = {
  type: "TEMPLATE",
  fields: [
    // { key: "예시필드", from: 0 },
  ]
};
