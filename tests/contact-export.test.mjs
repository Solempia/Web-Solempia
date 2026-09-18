import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

const pages = ['', 'servicios', 'sectores', 'sectores/automocion', 'metodo', 'nosotros', 'faq', 'calculadora', 'radar', 'contacto'];
for (const page of pages) test(`static /${page} contains exactly one accessible contact form`, () => {
  const html = readFileSync(new URL(`../out/${page ? page + '/' : ''}index.html`, import.meta.url), 'utf8');
  assert.equal((html.match(/id="contacto"/g) || []).length, 1);
  assert.equal((html.match(/aria-label="Formulario de contacto"/g) || []).length, 1);
  assert.match(html, /name="service"/);
  assert.doesNotMatch(html, /name="(?:sector|size)"/);
  const expected = page === 'calculadora' ? 'diagnostico' : ['radar', 'sectores/automocion'].includes(page) ? 'radar' : 'orientacion';
  assert.match(html, new RegExp(`<option value="${expected}" selected=""`));
});
for (const page of ['aviso-legal', 'privacidad', 'cookies']) test(`legal /${page} links to contact without embedding a form`, () => {
  const html = readFileSync(new URL(`../out/${page}/index.html`, import.meta.url), 'utf8');
  assert.doesNotMatch(html, /aria-label="Formulario de contacto"/);
  assert.match(html, /href="\/contacto\/#contacto"/);
});
