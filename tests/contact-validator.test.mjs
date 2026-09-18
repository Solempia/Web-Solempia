import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

const code = readFileSync(new URL('../integrations/n8n/validar-lead.cjs', import.meta.url), 'utf8');
const execute = new Function('$input', 'DateTime', code);
const clock = { now: () => ({ setZone: () => ({ toFormat: () => '2026-09-16 12:00:00' }) }) };
const valid = { name: 'Prueba local', email: 'test@example.com', process: 'Quiero automatizar informes', service: 'formacion', rgpdAccepted: true, source: 'solempia.com/servicios' };
const run = (body) => execute({ all: () => [{ json: { body } }] }, clock)[0].json;

test('accepts the simplified form and records service, message and source for Sheets', () => {
  const result = run(valid);
  assert.equal(result.lead_valido, true);
  assert.equal(result.servicio, 'Formación en IA');
  assert.equal(result.proceso_dolor, 'Servicio: Formación en IA\n\nQuiero automatizar informes');
  assert.equal(result.origen, 'solempia.com/servicios');
  assert.equal(result.empresa, '');
});
test('accepts legacy form submissions, including the former optional message', () => {
  const { service, ...legacy } = valid;
  assert.ok(service);
  const result = run({ ...legacy, process: '', sector: 'Calidad', size: '5–20' });
  assert.equal(result.lead_valido, true);
  assert.equal(result.proceso_dolor, '(no indicado)');
  assert.equal(result.sector, 'Calidad');
});
test('rejects missing required fields, spam and excessive lengths', () => {
  for (const change of [{ name: ' ' }, { email: 'bad' }, { process: ' ' }, { rgpdAccepted: false }, { rgpdAccepted: 'true' }, { website: 'spam' }, { process: 'x'.repeat(2001) }, { name: 'x'.repeat(121) }]) {
    assert.equal(run({ ...valid, ...change }).lead_valido, false, JSON.stringify(change).slice(0, 80));
  }
});
test('unknown service falls back to guidance and ignores forged labels', () => {
  for (const service of ['unknown', '__proto__', 'constructor', '']) {
    const result = run({ ...valid, service, serviceLabel: 'forged' });
    assert.equal(result.servicio, 'Necesito orientación');
  }
});
test('supports string payloads and rejects malformed input without throwing', () => {
  assert.equal(run(JSON.stringify(valid)).lead_valido, true);
  for (const body of ['{', null, [], 123]) assert.equal(run(body).lead_valido, false);
});
