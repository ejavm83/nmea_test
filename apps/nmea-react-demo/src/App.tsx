
import React, { useMemo, useState } from "react";
import { parseNMEASentence, listSchemaTypes } from "nmea-core";

const VERSION = "0.1";

const koreanKeyMap: Record<string, string> = {
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
  satelliteIds: "위성ID"
};

function toKoreanKeys(obj: any): any {
  if (obj == null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(toKoreanKeys);
  const out: Record<string, any> = {};
  for (const [k, v] of Object.entries(obj)) {
    const nk = koreanKeyMap[k] || k;
    out[nk] = toKoreanKeys(v);
  }
  return out;
}

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any[]>([]);
  const [extras, setExtras] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [onlyUnknown, setOnlyUnknown] = useState(false);
  const [supportedLine, setSupportedLine] = useState<string>("");

  React.useEffect(() => {
    try {
      const types = listSchemaTypes();
      setSupportedLine(`${types.join(", ")}  (총 ${types.length})`);
    } catch {
      // ignore
    }
  }, []);

  const handleFile = async (file: File) => {
    const reader = new FileReader();
    return new Promise<void>((resolve, reject) => {
      reader.onload = () => {
        setInput(String(reader.result || ""));
        setFileName(file.name);
        resolve();
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    });
  };

  const convertNmeaToDecimal = (valueWithUnit: string) => {
    const [raw, hemi] = valueWithUnit.split(" ");
    const numeric = parseFloat(raw);
    if (Number.isNaN(numeric)) return null;
    const degrees = Math.floor(numeric / 100);
    const minutes = numeric - degrees * 100;
    const decimal = degrees + minutes / 60;
    const signed = hemi === "S" || hemi === "W" ? -decimal : decimal;
    return Number.isFinite(signed) ? Number(signed.toFixed(6)) : null;
  };

  const handleSubmit = () => {
    const lines = input.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
    const outputs: any[] = [];

    for (const line of lines) {
      try {
        const parsed = parseNMEASentence(line);
        const hasParser = !("raw" in parsed && parsed.raw);
        if (extras && (parsed.type === "GGA" || parsed.type === "RMC")) {
          const extra: any = {};
          const lat = (parsed as any).latitude;
          const lon = (parsed as any).longitude;
          if (lat) extra.latitudeDecimal = convertNmeaToDecimal(lat);
          if (lon) extra.longitudeDecimal = convertNmeaToDecimal(lon);
          outputs.push({ sentence: line, parsed, extra, hasParser });
        } else {
          outputs.push({ sentence: line, parsed, hasParser });
        }
      } catch (err) {
        outputs.push({ sentence: line, error: (err as Error).message, hasParser: false });
      }
    }

    setResult(outputs);
  };

  const handleClear = () => {
    setInput("");
    setResult([]);
    setFileName(null);
  };

  const summary = useMemo(() => {
    const total = result.length;
    const byType = new Map<string, number>();
    let withParser = 0;
    let withoutParser = 0;
    const typesWithParser = new Set<string>();
    const typesWithoutParser = new Set<string>();

    for (const r of result) {
      const t = r?.parsed?.type || "알수없음";
      byType.set(t, (byType.get(t) || 0) + 1);
      if (r.hasParser) {
        withParser++;
        typesWithParser.add(t);
      } else {
        withoutParser++;
        typesWithoutParser.add(t);
      }
    }

    const kinds = Array.from(byType.entries()).map(([k, v]) => `${k}(${v})`).join(", ");
    const unknownKindsOnly = new Set(Array.from(typesWithoutParser).filter(t => !typesWithParser.has(t)));
    const parsedKindsCount = typesWithParser.size;
    const unknownKindsCount = unknownKindsOnly.size;
    const processingRate = total > 0 ? Math.round((withParser / total) * 1000) / 10 : 0; // 소수 첫째자리

    return { total, kinds, withParser, withoutParser, byType, parsedKindsCount, unknownKindsCount, processingRate } as const;
  }, [result]);

  const separated = useMemo(() => {
    const parsedTypeCounts = new Map<string, number>();
    const unknownTypeCounts = new Map<string, number>();

    for (const r of result) {
      const t = r?.parsed?.type || "알수없음";
      if (r.hasParser) {
        parsedTypeCounts.set(t, (parsedTypeCounts.get(t) || 0) + 1);
      } else {
        unknownTypeCounts.set(t, (unknownTypeCounts.get(t) || 0) + 1);
      }
    }

    const parsedTypes = Array.from(parsedTypeCounts.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    const unknownTypesLine = Array.from(unknownTypeCounts.keys()).sort((a, b) => a.localeCompare(b)).join(", ");
    return { parsedTypes, unknownTypesLine };
  }, [result]);

  return (
    <div className="p-6 w-full">
      <div className="mb-4 p-3 rounded border bg-gray-50">
        <div className="font-semibold">NMEA 분석기 v{VERSION}</div>
        <div className="text-sm text-gray-700">표준: NMEA 0183 버전 4.0 기준</div>
        <div className="text-sm text-gray-700">만든사람: 지엠티 김길용 수석</div>
      </div>

      <h1 className="text-3xl font-bold mb-2">NMEA 분석기</h1>
      {supportedLine && (
        <div className="mb-3 p-2 rounded bg-white border text-sm">
          <span className="font-semibold">지원 문장 종류</span>: {supportedLine}
        </div>
      )}
      <p className="text-gray-700 mb-4">
        이 도구는 NMEA 메시지를 파싱하여 사람이 이해할 수 있는 위치 및 시간 정보를 제공합니다.
        현재 버전은 주요 문장 유형을 지원합니다. 텍스트 상자에 메시지를 붙여넣거나 파일을 선택하세요.
      </p>

      <div className="mb-3">
        <textarea
          className="w-full border rounded p-3"
          style={{ minHeight: "35vh", resize: "vertical", width: "100%" }}
          placeholder="여기에 NMEA 줄을 붙여넣으세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">파일 선택</label>
        <input
          type="file"
          accept=".txt,.log,.nmea,.csv"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
          }}
        />
        {fileName && (
          <div className="text-xs text-gray-600 mt-1">선택된 파일: {fileName}</div>
        )}
      </div>

      <label className="inline-flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={extras}
          onChange={(e) => setExtras(e.target.checked)}
        />
        <span>추가 옵션: 위치 소수점 변환 등 보조 정보 계산</span>
      </label>

      <label className="inline-flex items-center gap-2 mb-6 ml-4">
        <input
          type="checkbox"
          checked={onlyUnknown}
          onChange={(e) => setOnlyUnknown(e.target.checked)}
        />
        <span>미지원 문장만 보기</span>
      </label>

      <div className="flex gap-2 mb-6">
        <button
          className="bg-blue-600 text-white rounded px-4 py-2"
          onClick={handleSubmit}
        >
          제출
        </button>
        <button
          className="bg-gray-200 rounded px-4 py-2"
          onClick={handleClear}
        >
          지우기
        </button>
      </div>

      {result.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">총괄 요약</h2>
          <div className="mb-4 p-3 border rounded">
            <div>총 입력 개수: <b>{summary.total}</b></div>
            <div>메시지 종류: <b>{summary.kinds || "없음"}</b></div>
            <div>파싱 성공(라인): <b>{summary.withParser}</b> / 미지원(라인): <b>{summary.withoutParser}</b></div>
            <div>파싱되는 종류 수: <b>{summary.parsedKindsCount}</b> / 파싱 안되는 종류 수: <b>{summary.unknownKindsCount}</b></div>
            <div>메시지 처리율: <b>{summary.processingRate}%</b></div>
          </div>

          {/* 분리된 목록 */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-3 border rounded">
              <div className="font-semibold mb-2">파싱되는 메시지 종류</div>
              {separated.parsedTypes.length === 0 ? (
                <div className="text-sm text-gray-600">없음</div>
              ) : (
                <ul className="list-disc pl-5 text-sm">
                  {separated.parsedTypes.map(([t, c]) => (
                    <li key={t}>{t} ({c})</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="p-3 border rounded">
              <div className="font-semibold mb-2">파싱 안되는 메시지</div>
              <div className="text-sm">{separated.unknownTypesLine || "없음"}</div>
            </div>
          </div>

          {onlyUnknown ? (
            <>
              <h2 className="text-xl font-semibold mb-2">파싱 안되는 메시지</h2>
              <div className="p-2 border rounded text-sm bg-red-50 border-red-200 text-red-800">
                {separated.unknownTypesLine || "없음"}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">결과</h2>
              <div className="space-y-3">
                {result.filter(r => r.hasParser).map((r, idx) => (
                  <div key={idx} className="bg-gray-100 p-3 rounded text-sm">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs rounded bg-white border">문장</span>
                      <code className="whitespace-pre-wrap break-all">{r.sentence}</code>
                    </div>
                    <pre className="bg-white p-2 rounded overflow-auto">{JSON.stringify({ 결과: toKoreanKeys(r.parsed), 보조정보: r.extra ? toKoreanKeys(r.extra) : undefined }, null, 2)}</pre>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
