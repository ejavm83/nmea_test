
import { getSchema, registerSchema, listSchemaTypes } from "./registry";
import type { FieldDef, NmeaSchema } from "./types";
import "./schemas"; // register built-in schemas

export { registerSchema };
export { listSchemaTypes };
export type { NmeaSchema, FieldDef };

export function parseNMEASentence(sentence: string) {
  if (!sentence.startsWith("$")) throw new Error("Invalid sentence");
  const [body, checksum] = sentence.slice(1).split("*");
  const parts = body.split(",");
  const talker = parts[0].slice(0, 2);
  const type = parts[0].slice(2);
  const payload = parts.slice(1);

  const schema = getSchema(type);
  if (!schema) {
    return { talker, type, raw: payload, checksum };
  }

  const parsed: Record<string, unknown> = {};
  for (const field of schema.fields as FieldDef[]) {
    const raw = payload[field.from] ?? "";
    parsed[field.key] = field.parse ? field.parse(raw, payload) : raw;
  }

  return { talker, type, ...parsed, checksum };
}
