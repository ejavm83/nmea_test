export function parseNumber(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

export function parseFloatSafe(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : undefined;
}

export function combineWithHemisphere(value: string | undefined, hemi?: string): string | undefined {
  if (!value) return undefined;
  return hemi ? `${value} ${hemi}` : value;
}
