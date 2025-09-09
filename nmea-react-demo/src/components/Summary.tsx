import React from "react";

export const Summary: React.FC<{
  summary: {
    total: number;
    kinds: string;
    withParser: number;
    withoutParser: number;
    parsedKindsCount: number;
    unknownKindsCount: number;
    processingRate: number;
  };
  separated: {
    parsedTypes: [string, number][];
    unknownTypes: [string, number][];
    unknownTypesLine: string;
  };
  onlyUnknown: boolean;
}> = ({ summary, separated, onlyUnknown }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">총괄 요약</h2>
      <div className="mb-4 p-3 border rounded">
        <div>총 입력 개수: <b>{summary.total}</b></div>
        <div>메시지 종류: <b>{summary.kinds || "없음"}</b></div>
        <div>파싱 성공(라인): <b>{summary.withParser}</b> / 미지원(라인): <b>{summary.withoutParser}</b></div>
        <div>파싱되는 종류 수: <b>{summary.parsedKindsCount}</b> / 파싱 안되는 종류 수: <b>{summary.unknownKindsCount}</b></div>
        <div>메시지 처리율: <b>{summary.processingRate}%</b></div>
      </div>

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
          {separated.unknownTypes.length === 0 ? (
            <div className="text-sm text-gray-600">없음</div>
          ) : (
            <ul className="list-disc pl-5 text-sm">
              {separated.unknownTypes.map(([t, c]) => (
                <li key={t}>{t} ({c})</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {onlyUnknown ? (
        <>
          <h2 className="text-xl font-semibold mb-2">파싱 안되는 메시지</h2>
          <div className="p-2 border rounded text-sm bg-red-50 border-red-200 text-red-800">
            {separated.unknownTypesLine || "없음"}
          </div>
        </>
      ) : null}
    </div>
  );
};


