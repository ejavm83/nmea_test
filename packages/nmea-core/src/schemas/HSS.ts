import type { NmeaSchema } from "../types";

// HSS – Hull Stress Surveillance Systems
// 이 메시지는 NMEA 0183 PDF 문서에 승인된 문장으로 나열되어 있지만,
// 문장 구조나 필드에 대한 추가 설명이 제공되지 않습니다.
export const HSS_SCHEMA: NmeaSchema = {
  type: "HSS",
  fields: [] // 필드 정의 없음
};
