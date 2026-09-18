/* global $input, DateTime */
// Paste this file into the validar_lead Code node (Run Once for All Items).
// Keep legacy submissions valid while the previous website is still deployed.
const SECTORES = ['Mantenimiento', 'Instalaciones', 'Calidad', 'Metalmecánica', 'Logística', 'Automoción / OEM', 'Construcción', 'Agroindustria', 'Otro industrial'];
const TAMANOS = ['5–20', '21–50', '51–100', 'más de 100'];
const SERVICIOS = {
  orientacion: 'Necesito orientación',
  diagnostico: 'Diagnóstico operativo',
  automatizacion: 'Automatización de procesos',
  'uso-seguro-ia': 'Uso seguro de IA',
  mantenimiento: 'Mantenimiento',
  formacion: 'Formación en IA',
  radar: 'Radar de IA',
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const salida = [];

for (const item of $input.all()) {
  let b = item.json.body ?? item.json;
  if (typeof b === 'string') {
    try { b = JSON.parse(b); } catch { b = {}; }
  }
  if (typeof b !== 'object' || b === null) b = {};
  const txt = (v) => (typeof v === 'string' ? v.trim() : '');
  const nombre = txt(b.name);
  const empresa = txt(b.company);
  const sector = txt(b.sector);
  const tamano = txt(b.size);
  const proceso = txt(b.process);
  const email = txt(b.email).toLowerCase();
  const telefono = txt(b.phone);
  const rgpd = b.rgpdAccepted === true;
  const honeypot = txt(b.website);
  const nuevoFormulario = Object.hasOwn(b, 'service');
  const servicioId = Object.hasOwn(SERVICIOS, txt(b.service)) ? txt(b.service) : 'orientacion';
  const servicio = SERVICIOS[servicioId];
  const motivos = [];
  if (honeypot) motivos.push('honeypot relleno (bot)');
  if (!rgpd) motivos.push('sin consentimiento RGPD');
  if (!nombre) motivos.push('nombre vacio');
  if (!EMAIL_RE.test(email)) motivos.push('email invalido');
  if (nuevoFormulario && !proceso) motivos.push('mensaje vacio');
  if (proceso.length > 2000) motivos.push('campo proceso demasiado largo');
  if (nombre.length > 120 || empresa.length > 120) motivos.push('campo excede longitud razonable');
  if (email.length > 254 || telefono.length > 60) motivos.push('contacto demasiado largo');

  salida.push({ json: {
    lead_valido: motivos.length === 0,
    motivo_descarte: motivos.join(' | '),
    fecha_hora: DateTime.now().setZone('Europe/Madrid').toFormat('yyyy-LL-dd HH:mm:ss'),
    nombre, empresa, sector, tamano_equipo: tamano,
    servicio_id: servicioId, servicio,
    // Both the existing Sheets mapping and internal notification use this field.
    // Record the service without renaming existing columns or losing historical data.
    proceso_dolor: nuevoFormulario ? `Servicio: ${servicio}\n\n${proceso}` : proceso || '(no indicado)',
    email, telefono: telefono || '(no indicado)', rgpd: rgpd ? 'si' : 'no',
    origen: txt(b.source) || 'solempia.com/contacto', estado: 'nuevo',
    sector_fuera_de_lista: sector !== '' && !SECTORES.includes(sector),
    tamano_fuera_de_lista: tamano !== '' && !TAMANOS.includes(tamano),
    payload_original: JSON.stringify(b),
  } });
}
return salida;
