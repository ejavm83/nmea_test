import React from "react";

export const SupportedTypes: React.FC<{ line: string }> = ({ line }) => {
  if (!line) return null;
  return (
    <div className="mb-3 p-2 rounded bg-white border text-sm">
      <span className="font-semibold">지원 문장 종류</span>: {line}
    </div>
  );
};


