import React from "react";
import { toKoreanKeys } from "../utils";
import type { ResultItem } from "../types";

export const Results: React.FC<{ items: ResultItem[] }> = ({ items }) => {
  return (
    <div className="space-y-3">
      {items.map((r, idx) => (
        <div key={idx} className="bg-gray-100 p-3 rounded text-sm">
          <div className="mb-2 flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs rounded bg-white border">문장</span>
            <code className="whitespace-pre-wrap break-all">{r.sentence}</code>
          </div>
          {r.parsed ? (
            <pre className="bg-white p-2 rounded overflow-auto">{JSON.stringify({ 결과: toKoreanKeys(r.parsed), 보조정보: r.extra ? toKoreanKeys(r.extra) : undefined }, null, 2)}</pre>
          ) : (
            <div className="p-2 rounded bg-red-50 border border-red-200 text-red-800">{r.error || "파싱 실패"}</div>
          )}
        </div>
      ))}
    </div>
  );
};


