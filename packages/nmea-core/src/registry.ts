import type { NmeaSchema } from "./types";

const registry = new Map<string, NmeaSchema>();

export function registerSchema(schema: NmeaSchema) {
  registry.set(schema.type, schema);
}

export function getSchema(type: string): NmeaSchema | undefined {
  return registry.get(type);
}

export function listSchemaTypes(): string[] {
  return Array.from(registry.keys()).sort((a, b) => a.localeCompare(b));
}