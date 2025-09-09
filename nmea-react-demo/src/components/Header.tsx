import React from "react";

export const Header: React.FC<{ version: string } & React.PropsWithChildren> = ({ version, children }) => (
  <div className="mb-4 p-3 rounded border bg-gray-50">
    <div className="font-semibold">NMEA 분석기 v{version}</div>
    <div className="text-sm text-gray-700">표준: NMEA 0183 버전 4.0 기준</div>
    <div className="text-sm text-gray-700">만든사람: GMT 김길용 수석</div>
    {children}
  </div>
);


