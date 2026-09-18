# Contacto compartido

La sección `ContactSection` está en las diez páginas comerciales. Las páginas legales enlazan a `/contacto/#contacto`. El botón de cabecera sigue visible en móvil. La página de contacto usa el mismo componente con título h1.

## Selección y borrador

`src/data/contacto.ts` centraliza los servicios y valores iniciales. `?servicio=formacion#contacto` es un ejemplo de enlace contextual. Valores desconocidos muestran «Necesito orientación». Los botones y el selector actualizan la URL sin recargar ni borrar el formulario; atrás/adelante restaura la selección. Navegar a otra página inicia su propio formulario.

## Contrato con n8n

POST JSON al webhook existente configurado en `src/data/site.ts`:

- `name`, `email`, `process`, `rgpdAccepted`: obligatorios. `process` sigue siendo el nombre técnico del mensaje.
- `company`, `phone`: cadenas vacías cuando no se rellenan.
- `service`: `orientacion`, `diagnostico`, `automatizacion`, `uso-seguro-ia`, `mantenimiento`, `formacion` o `radar`.
- `serviceLabel`: etiqueta legible; el receptor debe resolver la etiqueta desde su catálogo, no confiar en ella.
- `source`: dominio y ruta de origen, por ejemplo `solempia.com/servicios`.
- `website`: honeypot. `timestamp`: ISO 8601. Se dejan de enviar `sector` y `size`.

Límites compartidos con el receptor: nombre y empresa 120 caracteres; email 254; teléfono 60; mensaje 2000. El cliente bloquea envíos simultáneos y conserva datos ante errores o tiempo de espera agotado.

## Adaptación del receptor

Flujo: `solempia_contacto_web`, ID `cVyIw0tKmDaaPj6n`. Código preparado: `integrations/n8n/validar-lead.cjs`, para el nodo Code `validar_lead`, modo Run Once for All Items.

La validación admite empresa, sector y tamaño ausentes. Exige mensaje para el nuevo formato y conserva la compatibilidad con el mensaje opcional de la web anterior. Mantiene consentimiento estricto, honeypot, límites, normalización de email y campos históricos.

Emite `servicio_id` y `servicio`. Incluye «Servicio: …» al principio de `proceso_dolor` para conservarlo con el mensaje en el registro existente, sin renombrar ni borrar columnas históricas. Mapeo verificado el 2026-09-17: `guardar_en_sheets` lee `proceso_dolor` y `origen` directamente de `validar_lead`. Tras resolver el usuario el aviso de seguridad de Chrome, se comprobó el código completo guardado: admite los campos opcionales y registra servicio y origen. La edición sigue como borrador: la revisión automática rechazó el clic en Publish por límite de uso. No se ejecutó el flujo ni se crearon registros de prueba en producción. La web no debe publicarse hasta publicar esa adaptación.

## Pruebas reproducibles

```sh
npm run lint
npm run build
node --test tests/contact-validator.test.mjs tests/contact-export.test.mjs
node scripts/preview-contact.mjs
```

El servidor de pruebas usa `http://127.0.0.1:4173`, sirve la exportación y **simula todos los envíos localmente**. No llama al webhook ni manda correos. No usarlo como servidor de producción.

Modos: `?qa=retry` falla en el primer envío y permite reintentar; `?qa=slow` tarda cuatro segundos; `?qa=error` devuelve 503; `?qa=network` corta la conexión. Los registros de prueba se consultan en `/__qa/records` y se borran al reiniciar el servidor.

Comprobar selección desde cada servicio, enlace directo, valor desconocido, cambio de página, campos obligatorios, consentimiento, errores, reintento, doble clic, origen enviado y presentación a 360px. Los tests automáticos cubren las diez páginas, las tres páginas legales y la validación del receptor.
