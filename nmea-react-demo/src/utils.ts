export const koreanKeyMap: Record<string, string> = {
  talker: "토커",
  type: "문장종류",
  checksum: "체크섬",
  time: "시간",
  status: "상태",
  latitude: "위도",
  longitude: "경도",
  speedKnots: "속도(노트)",
  course: "코스(진방위)",
  date: "날짜",
  magneticVariation: "자기편차",
  fixQuality: "수신품질",
  numSatellites: "사용위성수",
  hdop: "HDOP",
  vdop: "VDOP",
  pdop: "PDOP",
  altitude: "고도",
  raw: "원시필드",
  latitudeDecimal: "위도(소수)",
  longitudeDecimal: "경도(소수)",
  mode: "모드",
  fixType: "Fix 타입",
  satelliteIds: "위성ID",
  // GSA 관련(일반적으로)
  mode1: "모드(수동/자동)",
  mode2: "해결형태(2D/3D)",
  pdopValue: "PDOP 값",
  hdopValue: "HDOP 값",
  vdopValue: "VDOP 값"
};

export function toKoreanKeys(obj: any): any {
  if (obj == null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(toKoreanKeys);
  const out: Record<string, any> = {};
  for (const [k, v] of Object.entries(obj)) {
    const nk = koreanKeyMap[k] || k;
    out[nk] = toKoreanKeys(v);
  }
  return out;
}

export function convertNmeaToDecimal(valueWithUnit: string) {
  const [raw, hemi] = valueWithUnit.split(" ");
  const numeric = parseFloat(raw);
  if (Number.isNaN(numeric)) return null;
  const degrees = Math.floor(numeric / 100);
  const minutes = numeric - degrees * 100;
  const decimal = degrees + minutes / 60;
  const signed = hemi === "S" || hemi === "W" ? -decimal : decimal;
  return Number.isFinite(signed) ? Number(signed.toFixed(6)) : null;
}

