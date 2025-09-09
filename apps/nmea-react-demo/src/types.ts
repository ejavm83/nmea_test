export interface ParsedResult {
  talker: string;
  type: string;
  checksum?: string;
  [key: string]: unknown;
}

export interface ResultItem {
  sentence: string;
  parsed?: ParsedResult;
  extra?: Record<string, unknown>;
  error?: string;
  hasParser: boolean;
}

