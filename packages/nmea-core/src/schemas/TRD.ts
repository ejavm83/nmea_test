import type { NmeaSchema } from "../types";

// TRD – Thruster Response Data
export const TRD_SCHEMA: NmeaSchema = {
  type: "TRD",
  fields: [
    { key: "thrusterNumber", from: 0, parse: (v) => v ? parseInt(v, 10) : null }, // 스러스터 번호 (홀수=선수, 짝수=선미)
    { key: "rpmResponse", from: 1, parse: (v) => v ? parseFloat(v) : null }, // RPM 응답 (부호 "-" = 좌현)
    { key: "rpmModeIndicator", from: 2 }, // P=퍼센트, R=RPM, V=데이터 유효하지 않음
    { key: "pitchResponseValue", from: 3, parse: (v) => v ? parseFloat(v) : null }, // 피치 응답 값 (부호 "-" = 좌현)
    { key: "pitchModeIndicator", from: 4 }, // P=퍼센트, D=도, V=데이터 유효하지 않음
    { key: "azimuthResponse", from: 5, parse: (v) => v ? parseFloat(v) : null }, // 방위각 응답 (도, 0-3600), null 가능
  ]
};
