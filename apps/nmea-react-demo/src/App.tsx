
import React, { useMemo, useState } from "react";
import { parseNMEASentence, listSchemaTypes } from "nmea-core";
import { Header } from "./components/Header";
import { SupportedTypes } from "./components/SupportedTypes";
import { Summary } from "./components/Summary";
import { toKoreanKeys, convertNmeaToDecimal } from "./utils";

const VERSION = "0.1";

export default function App() {
  const [input, setInput] = useState("");
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
