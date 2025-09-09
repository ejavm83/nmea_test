import React from "react";

export const InputPanel: React.FC<{
  input: string;
  setInput: (v: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onFile: (f: File) => void;
  extras: boolean;
  setExtras: (v: boolean) => void;
  onlyUnknown: boolean;
  setOnlyUnknown: (v: boolean) => void;
  fileName: string | null;
}> = ({ input, setInput, onSubmit, onClear, onFile, extras, setExtras, onlyUnknown, setOnlyUnknown, fileName }) => {
  return (
    <>
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
            if (f) onFile(f);
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
        <button className="bg-blue-600 text-white rounded px-4 py-2" onClick={onSubmit}>제출</button>
        <button className="bg-gray-200 rounded px-4 py-2" onClick={onClear}>지우기</button>
      </div>
    </>
  );
};


