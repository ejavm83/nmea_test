
import React, { useMemo, useState } from "react";
import { parseNMEASentence, listSchemaTypes } from "nmea-core";
import { Header } from "./components/Header";
import { SupportedTypes } from "./components/SupportedTypes";
import { Summary } from "./components/Summary";
import { toKoreanKeys, convertNmeaToDecimal } from "./utils";

const VERSION = "0.1";

export default function App() {
  const [input, setInput] = useState(`$PGRMM,WGS 84*06
$GPBOD,000.6,T,000.0,M,CB,AC*42
$GPWPL,4806.712,N,01138.293,E,BB*46
$GPRMC,133716,A,3412.717,N,01138.282,E,000.0,185.1,140900,000.6,E*7B
$GPRMB,A,0.00,R,AC,CB,3412.999,N,01138.290,E,000.3,001.1,,V*06
$GPGGA,133717,3412.717,N,01138.282,E,1,05,3.9,553.0,M,46.8,M,,*4F
$GPGSA,A,3,05,,18,21,25,,29,,,,,,5.6,3.9,4.0*3C
$GPGSV,2,1,08,05,18,052,48,16,22,303,00,18,63,159,44,21,62,175,49*7A
$GPGSV,2,2,08,25,25,127,40,26,53,299,00,29,54,061,51,31,43,231,00*7D
$PGRME,38.9,M,40.2,M,55.9,M*13
$GPGLL,3412.717,N,01138.281,E,133717,A*22
$PGRMZ,1815,f,3*26
$PGRMM,WGS 84*06
$GPBOD,000.6,T,000.0,M,CB,AC*42
$GPRTE,1,1,c,0,AC,CB,BB*28
$GPWPL,4804.712,N,01138.270,E,AC*4B
$GPRMC,133718,A,3412.717,N,01138.281,E,000.0,185.1,140900,000.6,E*76
$GPRMB,A,0.00,R,AC,CB,3412.999,N,01138.290,E,000.3,001.3,,V*04
$GPGGA,133719,3412.717,N,01138.281,E,1,05,3.9,552.5,M,46.8,M,,*46
$GPGSA,A,3,05,,18,21,25,,29,,,,,,5.6,3.9,4.0*3C
$GPGSV,2,1,08,05,18,052,48,16,22,303,00,18,63,159,44,21,62,175,49*7A
$GPGSV,2,2,08,25,24,128,40,26,53,299,00,29,54,061,51,31,43,231,00*73
$PGRME,38.9,M,40.2,M,55.9,M*13
$GPGLL,3412.717,N,01138.281,E,133719,A*2C
$PGRMZ,1813,f,3*20
$PGRMM,WGS 84*06
$GPBOD,000.6,T,000.0,M,CB,AC*42
$GPWPL,3412.999,N,01138.290,E,CB*4A
$GPRMC,133720,A,3412.718,N,01138.279,E,000.0,185.1,140900,000.6,E*75
$GPRMB,A,0.00,R,AC,CB,3412.999,N,01138.290,E,000.3,001.5,,V*02
$GPGGA,133721,3412.718,N,01138.279,E,1,05,3.9,552.5,M,46.8,M,,*45
$GPGSA,A,3,05,,18,21,25,,29,,,,,,5.6,3.9,4.0*3C
$GPGSV,2,1,08,05,18,052,48,16,22,303,00,18,63,159,44,21,62,175,49*7A
$GPGGA,141113.999,3730.0308,N,12655.2369,E,1,06,1.7,98.9,M,,,,0000*3E
$GPGSA,A,3,02,07,01,20,04,13,,,,,,,3.7,1.7,3.2*31
$GPRMC,141113.999,A,3730.0308,N,12655.2369,E,19.77,195.23,101200,,*3C
$GPGGA,141114.999,3730.0264,N,12655.2351,E,1,07,1.2,98.8,M,,,,0000*3C
$GPGSA,A,3,02,07,01,20,24,04,13,,,,,,2.3,1.2,1.9*3E
$GPRMC,141114.999,A,3730.0264,N,12655.2351,E,15.51,202.12,101200,,*3C
$GPGGA,194546.127,5231.525,N,01323.391,E,1,12,1.0,0.0,M,0.0,M,,*6E
$GPGSA,A,3,01,02,03,04,05,06,07,08,09,10,11,12,1.0,1.0,1.0*30
$GPRMC,194546.127,A,5231.525,N,01323.391,E,2372.1,093.7,200220,000.0,W*40
$GPGGA,194547.127,5231.456,N,01324.467,E,1,12,1.0,0.0,M,0.0,M,,*63
$GPGSA,A,3,01,02,03,04,05,06,07,08,09,10,11,12,1.0,1.0,1.0*30
$GPRMC,194547.127,A,5231.456,N,01324.467,E,3968.7,122.8,200220,000.0,W*4F
$GPGGA,194548.127,5230.657,N,01325.713,E,1,12,1.0,0.0,M,0.0,M,,*6F
$GPGSA,A,3,01,02,03,04,05,06,07,08,09,10,11,12,1.0,1.0,1.0*30
$GPRMC,194548.127,A,5230.657,N,01325.713,E,3968.7,122.8,200220,000.0,W*43
$GPGGA,123519.00,4807.03837,N,01131.00010,E,1,08,0.9,545.4,M,46.9,M,,*47
$GPRMC,123519.00,A,4807.03837,N,01131.00010,E,022.4,084.4,230394,003.1,W,A*2B
$GPZDA,172809.456,09,09,2025,00,00*68
$GPGSV,3,1,11,03,03,111,00,04,15,270,00,06,01,010,00,07,60,043,00*7D
$GPGSV,3,2,11,08,31,069,00,09,24,138,00,10,02,152,00,12,05,299,00*7C
$GPGSV,3,3,11,13,02,336,00,22,14,041,00,24,11,041,00*49
$GPGSA,A,3,04,05,,09,12,,,24,,,,,2.5,1.3,2.1*39
$GPVTG,089.0,T,088.0,M,005.5,N,010.2,K,A*3A
$HEHDT,245.9,T*12
$SDDBT,68.2,f,20.8,M,11.3,F*0B
$WIMWV,034.0,R,12.5,N,A*2C
$HCHDG,101.3,,,1.8,E*32
$GPRMC,083559.00,A,3723.2475,N,12158.3416,W,0.13,309.62,120524,014.7,E,A*3F
$GPVTG,309.62,T,294.92,M,0.13,N,0.24,K,A*0B
$GPGGA,083559.00,3723.2475,N,12158.3416,W,1,07,1.2,25.6,M,-25.6,M,,*63
$GPGSA,A,3,10,07,05,02,22,04,12,,,,,,2.4,1.2,2.1*36
$GPGSV,3,1,11,10,63,137,17,07,61,098,15,05,59,290,20,02,39,223,17*78
$GPGSV,3,2,11,22,32,070,17,04,21,244,13,12,21,313,16,31,09,020,*7C
$GPGSV,3,3,11,14,08,178,,09,07,064,,19,05,292,*7C
$HEHDT,215.5,T*2F
$SDDBT,15.8,f,4.8,M,2.6,F*05
$WIMWV,110.0,R,5.2,N,A*2E
$GPRMC,083600.00,A,3723.2476,N,12158.3417,W,0.13,309.62,120524,014.7,E,A*3F
$GPVTG,309.62,T,294.92,M,0.13,N,0.24,K,A*0B
$GPGGA,083600.00,3723.2476,N,12158.3417,W,1,07,1.2,25.6,M,-25.6,M,,*63`);
  const [result, setResult] = useState<any[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);
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

  const handleSubmit = () => {
    const lines = input.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
    const outputs: any[] = [];

    for (const line of lines) {
      try {
        const parsed = parseNMEASentence(line) as any;
        const hasParser = !("raw" in parsed && parsed.raw);
        if (parsed.type === "GGA" || parsed.type === "RMC") {
          const extra: any = {};
          const lat = parsed.latitude as string | undefined;
          const lon = parsed.longitude as string | undefined;
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
    const processingRate = total > 0 ? Math.round((withParser / total) * 1000) / 10 : 0;

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
    const unknownTypes = Array.from(unknownTypeCounts.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    const unknownTypesLine = unknownTypes.map(([t]) => t).join(", ");
    return { parsedTypes, unknownTypes, unknownTypesLine };
  }, [result]);

  const grouped = useMemo(() => {
    const parsedGroups = new Map<string, any[]>();
    const unknownGroups = new Map<string, any[]>();

    for (const r of result) {
      const t = r?.parsed?.type || "알수없음";
      if (r.hasParser) {
        const arr = parsedGroups.get(t) || [];
        arr.push(r);
        parsedGroups.set(t, arr);
      } else {
        const arr = unknownGroups.get(t) || [];
        arr.push(r);
        unknownGroups.set(t, arr);
      }
    }

    const parsed = Array.from(parsedGroups.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    const unknown = Array.from(unknownGroups.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    return { parsed, unknown };
  }, [result]);

  return (
    <div className="p-6 w-full">
      <Header version={VERSION} />

      <h1 className="text-3xl font-bold mb-2">NMEA 분석기</h1>
      <SupportedTypes line={supportedLine} />
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
        <div className="mt-4 space-y-6">
          <Summary summary={summary} separated={separated} onlyUnknown={false} />

          <div>
            <h2 className="text-xl font-semibold mb-2">파싱된 결과</h2>
            {grouped.parsed.length === 0 ? (
              <div className="text-sm text-gray-600">없음</div>
            ) : (
              <div className="space-y-4">
                {grouped.parsed.map(([type, items]) => (
                  <div key={type} className="border rounded">
                    <div className="px-3 py-2 font-semibold bg-gray-50 border-b">{type} ({(items as any[]).length})</div>
                    <div className="p-3 space-y-3">
                      {(items as any[]).map((r, idx) => (
                        <div key={idx} className="bg-gray-100 p-3 rounded text-sm">
                          <div className="mb-2 flex items-center gap-2">
                            <code className="whitespace-pre-wrap break-all">{r.sentence}</code>
                          </div>
                          <pre className="bg-white p-2 rounded overflow-auto">{JSON.stringify({ 결과: toKoreanKeys(r.parsed), 보조정보: r.extra ? toKoreanKeys(r.extra) : undefined }, null, 2)}</pre>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">미지원 결과</h2>
            {grouped.unknown.length === 0 ? (
              <div className="text-sm text-gray-600">없음</div>
            ) : (
              <div className="space-y-4">
                {grouped.unknown.map(([type, items]) => (
                  <div key={type} className="border rounded">
                    <div className="px-3 py-2 font-semibold bg-gray-50 border-b">{type} ({(items as any[]).length})</div>
                    <div className="p-3 space-y-3">
                      {(items as any[]).map((r, idx) => (
                        <div key={idx} className="bg-gray-100 p-3 rounded text-sm">
                          <div className="mb-2 flex items-center gap-2">
                            <code className="whitespace-pre-wrap break-all">{r.sentence}</code>
                          </div>
                          <pre className="bg-white p-2 rounded overflow-auto">{JSON.stringify(r.error ? { 에러: r.error } : { 결과: toKoreanKeys(r.parsed) }, null, 2)}</pre>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
