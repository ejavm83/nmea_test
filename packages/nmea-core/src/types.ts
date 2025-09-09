export type FieldParser = (value: string, fields: string[]) => unknown;

export interface FieldDef {
  key: string;
  from: number; // index within payload (after talker+type)
  parse?: FieldParser;
}

export interface NmeaSchema {
  type: string; // e.g., 'GGA'
  fields: FieldDef[];
}
