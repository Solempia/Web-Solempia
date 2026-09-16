---
slug: solempia-web
tipo: contenido web completo (sitio de Solempia)
estado: draft
alcance: inicio + servicios + sectores + método + nosotros + FAQ + contacto + SEO
idioma: español (fase 1; versión en inglés cuando se active Alemania/Suecia)
fuentes: plan-de-negocio-solempia-final.md · MaswerOffer/OFFER.md (generalizado, sin rastro del cliente) · solempiaoffer/OFFER_AUDIT.md
fecha: 2026-07-06
---

# Contenido web — Solempia

## 0. Decisiones de posicionamiento (leer antes de maquetar)

1. **Genérico industrial, con automoción como especialización visible.** Decisión de Sebastián (2026-07-06). La auditoría de oferta pedía una sola punta de lanza; se resuelve así: la portada vende UNA promesa para toda pyme industrial (horas recuperadas + IA bajo control), y automoción vive como página de sector propia, donde sí se afila al máximo (Radar de IA en la Sombra, TISAX, IATF). *Actualización (2026-07-10):* el Radar tiene además una versión genérica con URL propia (`/radar`) para campañas dirigidas a cualquier pyme, sin el apellido "industrial"; es la única página del sitio que amplía el público. La página de automoción sigue siendo la versión afilada y ambas se enlazan entre sí.
2. ~~**Cero nombres de clientes y cero testimonios.**~~ **DEROGADA (2026-09-16).** Era correcta mientras no hubo casos cerrados: la prueba se construía con garantía en titular, método con nombre, ejemplo económico marcado como ilustrativo y credenciales del equipo. Con clientes reales ya en cartera, esa ausencia de prueba pasó a ser el mayor lastre de conversión del sitio. El ejemplo ilustrativo de 83.200 € se ha retirado de la portada y su lugar (sección 2, justo bajo el hero) lo ocupa un caso real anonimizado con cifra medida antes y después. Mientras no se rellene `caso` en `src/data/home.ts`, la sección no se renderiza: es preferible una portada sin prueba a una portada con una cifra que el visitante no puede creer.
3. **Lenguaje de riesgo calibrado.** Siempre "reducir y hacer demostrable el riesgo", nunca "eliminar" ni "tus datos jamás saldrán". Nunca prometer cumplimiento legal: Solempia diseña y documenta, el asesor legal del cliente valida.
4. **Precios públicos: solo la puerta de entrada.** El diagnóstico y la formación llevan precio orientativo; las fases posteriores se presupuestan con los datos del diagnóstico. Eso no es una evasiva: es el diferenciador ("nunca a ciegas") y así se cuenta.
5. **Sin jerga de IA como gancho.** La palabra IA aparece donde es sustancia (uso seguro, formación obligatoria), no como reclamo de portada. Se abre por el valor: horas, margen, control.
6. **Voz:** directa, sobria, de tú, B2B industrial. Frases cortas. Sin anglicismos de marketing, sin guion largo como conector, sin paralelismos perfectos.

---

# PÁGINA: INICIO

## Hero

**Promesa única de la portada (2026-09-16):** horas y margen. El control de IA deja de competir en el hero y baja a una sección propia al final del recorrido. Motivo: el hero anterior perseguía dos dolores a la vez ("Tu equipo pierde horas en tareas manuales. **Y** ya usa IA por su cuenta"), con dos urgencias distintas y puede que dos compradores distintos; el visitante no sabía en cinco segundos qué se le vendía.

**Titular:**
> El papeleo se come tu margen. Te decimos cuánto, con tus números.

**Subtítulo:**
> Automatizamos los procesos que consumen las horas de tu equipo. Se empieza por un diagnóstico de dos semanas con garantía: si no encontramos una oportunidad cuantificada, no lo pagas.

**CTA primario:** `Pedir el diagnóstico`
**CTA secundario:** `Ver cómo trabajamos`

**Línea de contexto (bajo los botones):**
> Empresas industriales y técnicas de 5 a 100 personas: mantenimiento, instalaciones, calidad, logística, metalmecánica, automoción, construcción y agroindustria.

*Alternativas de titular trabajadas (elegir una, no mezclar):*
- "Cada semana tu equipo pierde horas en papeleo. / Las contamos y las recuperamos."
- "Tus técnicos, haciendo trabajo de técnico. / El papeleo, automatizado."

---

## Sección: El caso (prueba)

Va inmediatamente bajo el hero. Es la sección que más mueve la conversión y la única que no se puede redactar sin datos: requiere un cliente real con cifra medida antes y después, perfil anonimizado, método de medición y plazo. Mientras `caso` valga null en `src/data/home.ts`, la sección no se renderiza.

**Encabezado:** Un proceso real, medido antes y después.

---

## Sección: El problema

**Encabezado:** Te suena, ¿verdad?

Lista escaneable, no párrafos. Una línea por síntoma:

- Partes de trabajo en papel que alguien pasa a limpio.
- Informes que se montan a mano cada semana.
- Fotos del móvil que nadie encuentra tres meses después.
- Costes por trabajo calculados a ojo.
- El seguimiento comercial en una libreta.
- Media empresa dentro de la cabeza de una sola persona.

**Cierre de sección:**
> Estas horas no salen en la cuenta de resultados. Salen en las nóminas.

*El tercer párrafo de la versión anterior (la IA en la sombra) se ha movido a su propia sección al final del recorrido, para que no compita con la promesa de horas.*

---

## Sección: Lo que cambia

**Encabezado:** Cómo se ve tu empresa dentro de seis meses

- Sabes cuántas horas cuesta cada proceso y cuánto vale recuperarlas. Con tus números.
- Los partes e informes que hoy se teclean se generan solos. Tu equipo revisa y valida.
- Respondes antes a tus clientes, porque la información está donde tiene que estar.
- Tu gente cualificada dedica la semana a trabajo cualificado.

Sin implantar un ERP.

---

## Sección: El método

**Encabezado:** Primero ordenar. Después automatizar. La IA, solo donde aporta.

La mayoría de los proyectos de "IA para empresas" fracasan por el orden, no por la tecnología. Se pone una capa inteligente sobre procesos desordenados y sale caro dos veces.

1. **Ordenar (60 %).** Entender el proceso real, medirlo y estructurar la información. Aquí vive la mayor parte del ahorro.
2. **Automatizar (30 %).** Conectar las herramientas que ya usas para que los flujos corran solos.
3. **Aplicar IA (10 %).** Solo en el tramo donde aporta, con una persona cualificada validando y un registro de cada decisión.

> Si quitas la IA y el sistema sigue funcionando, está bien construido.

**CTA intermedio:** `Cuéntanos tu proceso más pesado`

---

## Sección: Cómo trabajamos (la escalera)

**Encabezado:** Cada paso se presupuesta con los datos del anterior. Nunca a ciegas.

*En portada, versión comprimida: el detalle completo vive en `/servicios` y no se repite aquí.*

**1. Diagnóstico operativo** — *por aquí se empieza*
Dos semanas. Medimos tus procesos, cuantificamos horas y coste, y te decimos por dónde empezar. Se descuenta entero del siguiente paso.

**2. Piloto acotado**
Un solo proceso, construido sobre tus herramientas actuales. Métrica antes y después, y criterio de continuar o parar pactado de antemano.

**3. El proceso en producción**
El piloto validado pasa a producción, con tu equipo formado para operarlo. Donde entra la IA, entra con reglas de datos.

**4. Mantenimiento y mejora continua**
Soporte mensual, mejoras sobre lo implementado y actualización de reglas cuando cambia una herramienta o la normativa.

**Nota bajo la escalera:**
> Vendemos el diagnóstico. Lo demás se decide con datos encima de la mesa.

---

## Sección: Garantía (en titular, no en letra pequeña)

**Encabezado:** Si el diagnóstico no te descubre nada, no lo pagas.

Si al terminar no hemos identificado al menos una oportunidad cuantificada de mejora, no pagas. Si ya habías abonado algo, se devuelve íntegro en cinco días laborables.

Podemos ofrecerlo porque el diagnóstico casi siempre encuentra más de lo que el gerente espera. Las horas perdidas se ven mal desde dentro; por eso siguen ahí.

---

## Sección: Control de IA

*Última sección antes del cierre. Recoge el material que antes estaba disperso por toda la portada. Aquí el ángulo de gobernanza funciona como diferenciador que cierra la venta; en el hero funcionaba como una segunda promesa que la diluía.*

**Encabezado:** Y hay un problema nuevo que casi nadie tiene en el radar.

Tu equipo ya usa IA. Desde cuentas personales, con información de la empresa y de tus clientes, sin que nadie haya decidido que eso esté bien.

Prohibirlo lo vuelve invisible. La alternativa es un carril oficial: cuentas de empresa, reglas claras sobre qué se sube y qué no sale nunca, y formación registrada.

**Cierre:**
> Cuando un cliente o un auditor pregunte cómo gestionáis la IA, tienes un dossier que enseñar.

**Enlace:** `Ver el Radar de IA en la Sombra →` (página `/radar`)

---

## Secciones retiradas de la portada (2026-09-16)

- **El número (ejemplo ilustrativo de 83.200 €).** Le daba el sitio de honor a una cifra inventada y etiquetada como tal. Lo sustituye la sección *El caso*.
- **Por qué Solempia (5 puntos).** Cuatro de los cinco se definían por negación ("no hacemos webs", "no firmas", "no entregamos un PDF"), y sus argumentos ya viven en el caso, la garantía y la sección de control.
- **FAQ breve de portada.** Duplicaba tres preguntas de `/faq` con distinta redacción: quien leía ambas veía la misma objeción respondida dos veces de forma diferente.

---

## Sección: CTA final

**Encabezado:** Empieza por saber cuánto te cuesta el papeleo.

Una llamada de 20 minutos. Nos cuentas tu proceso más pesado y te decimos si tiene sentido un diagnóstico, con precio cerrado antes de empezar.

**CTA:** `Reservar llamada de 20 minutos`
**Alternativa suave:** `¿Aún no? Empieza por la formación en IA para tu equipo` (enlace a Servicios → Formación)

---

# PÁGINA: SERVICIOS

**Intro de página:**
> Cuatro pasos, y la formación por separado. Cada paso tiene precio cerrado antes de empezar, y cada paso se presupuesta con los datos del anterior.

## 1. Diagnóstico operativo

**Para quién:** empresas que saben que pierden horas pero no saben cuántas, dónde, ni si compensa arreglarlo.

**Qué hacemos:** en unas dos semanas, con participación ligera de tu equipo (entrevistas cortas y muestras de documentos, anonimizadas si hace falta), medimos dos o tres procesos candidatos.

**Qué recibes:**
- Mapa de horas, perfiles y coste actual de cada proceso analizado.
- Caso económico con supuestos visibles: ahorro directo, capacidad liberada y plazo de recuperación, cada uno por separado.
- Mapa de exposición: qué información de la empresa (y de tus clientes) toca qué herramienta hoy, incluida la IA que se usa sin control.
- Reglas iniciales de uso seguro, listas para distribuir: qué se puede subir, a qué, y qué no sale nunca.
- Recomendación de un único piloto, con propuesta cerrada de implementación y criterio de continuar o parar.
- Sesión de decisión con dirección. Termina con un sí o un no.

**Condiciones:**
- Precio cerrado según tamaño y número de procesos, confirmado antes de empezar.
- El 100 % se descuenta del piloto si contratas la implementación en los 30 días siguientes.
- Garantía: si no aparece una oportunidad cuantificada y riesgos no mapeados, no pagas.

## 2. Piloto de automatización

**Para quién:** empresas con el diagnóstico hecho, o con un proceso ya medido y un responsable claro.

**Qué hacemos:** construimos y desplegamos la automatización de un único proceso, integrada con las herramientas que ya pagas.

**Qué recibes:**
- El proceso funcionando en tu operación real, con tus datos y tu gente usándolo.
- Métrica medida antes y después: horas, tiempo de respuesta, retrabajos.
- Formación de las personas que lo van a usar: qué revisar, qué validar, qué no delegar nunca.
- Documentación para que tu equipo pueda mantenerlo.
- Criterio de continuar o parar, pactado antes de construir. Si el número no sale, se para y lo sabes pronto.

**Condiciones:** precio cerrado a partir de los datos del diagnóstico. El precio se fija contra el ahorro anual del proceso.

## 3. Programa de uso seguro de IA

**Para quién:** empresas cuyo equipo ya usa IA (lo sepa dirección o no) y que manejan información sensible propia o de clientes.

**Qué hacemos:** convertimos el uso clandestino en uso oficial: herramientas aprobadas, reglas claras y alguien que responde.

**Qué recibes:**
- Política de uso de IA adaptada a tu empresa, en lenguaje que tu equipo entiende (y tu responsable de calidad puede integrar en su sistema documental).
- Procedimiento operativo con semáforo por tipo de dato: qué puede subirse, a qué herramienta, y qué no sale nunca.
- Guía técnica para IT: cuentas de empresa, herramientas aprobadas, controles y registro.
- Formación práctica de la plantilla, con casos de vuestro día a día. Cubre la alfabetización en IA que exige el Reglamento de IA de la UE (art. 4).
- Dossier de evidencias: herramientas aprobadas, formación registrada, validación humana. Lo que enseñas si un cliente o auditor pregunta.

**Importante (y lo decimos tal cual en la web):** el riesgo no se elimina, se reduce y se hace demostrable. Igual que en ciberseguridad.

## 4. Mantenimiento y mejora continua

**Para quién:** empresas con módulos en producción o con el programa de uso seguro implantado.

**Qué recibes cada mes:**
- Soporte y mejoras sobre lo implementado.
- Revisión periódica del estado del control: herramientas en uso, incidencias, incorporaciones nuevas.
- Actualización de reglas y procedimientos cuando cambia una herramienta o la normativa.
- Un informe breve a dirección: estado, incidencias, siguiente mejora recomendada.

**El porqué:** los sistemas se degradan. La gente nueva no recibe las reglas, las herramientas cambian de condiciones, la normativa se mueve. El mantenimiento evita volver a empezar de cero cada año.

## Puerta lateral: Formación en IA para tu equipo

**El dato:** el Reglamento de IA de la UE obliga a las empresas que usan IA a formar a su personal (alfabetización en IA, art. 4), con supervisión de la AESIA exigible desde agosto de 2026.

**Qué hacemos:** sesión práctica sobre los casos reales de tu empresa: trabajamos con tus documentos y tus flujos. Tu equipo sale sabiendo qué puede hacer con IA, qué no, y por qué. Tú te llevas el registro de formación como evidencia.

**Por qué es la mejor forma de empezar:** coste bajo, obligación real con fecha, y de paso aflora cómo se está usando la IA de verdad en tu empresa. Muchos clientes descubren ahí que necesitan el diagnóstico.

**CTA de página:** `Pedir precio cerrado del diagnóstico` · `Reservar la formación`

---

# PÁGINA: SECTORES

**Intro de página:**
> Solo trabajamos con industria. Estos son los perfiles donde nuestro método rinde más.

## A quién servimos

- **Mantenimiento industrial e instalaciones:** partes de trabajo, planificación, documentación técnica y evidencias de campo.
- **Calidad e inspección:** informes, checklist, trazabilidad y preparación de auditorías.
- **Metalmecánica y fabricación:** control de costes por trabajo, seguimiento de pedidos, documentación de producción.
- **Logística y servicios técnicos B2B:** coordinación documental con clientes y plataformas, reporting periódico.
- **Construcción y agroindustria:** partes, certificaciones, trazabilidad y gestión documental con terceros.

Si tu empresa tiene entre 5 y 100 personas, técnicos en campo o planta, y vive entre Excel, papel y WhatsApp, encajas.

## Especialización: automoción y proveedores de OEM

Trabajar para un fabricante de automóviles cambia las reglas. Manejas solicitudes de oferta, planos y datos de calidad que no son tuyos: son de tu cliente. Y tu cliente audita.

Para este perfil tenemos un diagnóstico específico: el **Radar de IA en la Sombra**.

**Qué mapea:**
- Qué información del OEM toca hoy qué herramienta, incluida la IA que tu equipo usa desde cuentas personales.
- Cuántas horas cualificadas se van en leer solicitudes de oferta, adaptar plantillas de informe y rehacer documentación.
- Qué proceso merece automatizarse primero, con un caso económico defendible.

**Qué resuelve:**
- Reglas de uso seguro alineadas con lo que tu cliente reconoce: los marcos de seguridad de la información del sector (TISAX/VDA ISA) y las exigencias de los sistemas de calidad de automoción (IATF 16949).
- Validación humana explícita y registrada en cualquier salida que afecte a calidad.
- Un dossier de evidencias, para que cuando el OEM pregunte cómo gestionáis la IA, tengas un dossier y no una explicación.

**Guardarraíl visible en la página:** no certificamos TISAX ni IATF, y no sustituimos a tu asesor legal. Preparamos la evidencia y el control; la validación normativa es de quien corresponde.

**CTA:** `Pedir el Radar de IA en la Sombra`

---

# PÁGINA: RADAR (versión genérica)

**Decisión (2026-07-10):** el problema que mapea el Radar (IA en la sombra + horas perdidas en tareas manuales) no es exclusivo de automoción ni de industria. Esta página es la versión para cualquier pyme, con URL propia (`/radar`) para campañas que no segmentan por sector. Es la única página del sitio que habla a pymes en general: el resto mantiene el posicionamiento industrial (decisión 1). Sin TISAX ni IATF: eso vive en `/sectores/automocion`, que sigue siendo la versión afilada. Ambas se enlazan entre sí.

**Titular de página:** Radar de IA en la Sombra.

**Intro (bajo el titular):**
> Tu equipo ya usa IA. Desde cuentas personales, con información de la empresa y de tus clientes, sin que nadie haya decidido que eso esté bien. Prohibirlo no lo arregla. Lo vuelve invisible.

**Párrafo de contexto:**
> El Radar es un diagnóstico corto que convierte ese uso invisible en un mapa. Qué información sale, hacia dónde, cuántas horas se van en tareas manuales y qué merece arreglarse primero. Es el mismo diagnóstico que afilamos para proveedores de automoción, en versión para cualquier pyme.

**Qué mapea:**
- Qué información de tu empresa y de tus clientes toca hoy qué herramienta, incluida la IA que tu equipo usa desde cuentas personales.
- Cuántas horas cualificadas se van en informes, presupuestos y documentación que se rehace a mano.
- Qué proceso merece automatizarse primero, con un caso económico defendible.

**Qué resuelve:**
- Reglas de uso seguro listas para distribuir: qué puede subirse, a qué herramienta, y qué no sale nunca.
- Validación humana explícita y registrada en cualquier salida que afecte a clientes o a calidad.
- Un dossier de evidencias: herramientas aprobadas, formación registrada, controles. Lo que enseñas cuando un cliente o un auditor pregunta cómo gestionáis la IA.

**Guardarraíl visible en la página:** el riesgo no se elimina. Se reduce y se hace demostrable. No sustituimos a tu asesor legal: preparamos la evidencia y el control, y la validación normativa es de quien corresponde.

**CTA de cierre:** "Cuando un cliente pregunte, ten un dossier." + `Pedir el Radar de IA en la Sombra` · `Reservar llamada de 20 minutos`
Cuerpo de la banda: "El Radar tiene precio cerrado antes de empezar y la misma garantía que el diagnóstico operativo: si no te descubre nada, no lo pagas."

**Enlaces cruzados (mono discreto):**
- En `/radar`, bajo la banda CTA: `Ver la versión para automoción y OEM →` (`/sectores/automocion`).
- En `/sectores/automocion`, bajo la banda CTA: `¿No trabajas para un OEM? Ver la versión genérica →` (`/radar`).
- En el teaser de automoción de `/sectores`, bajo el botón: `El Radar también existe en versión genérica →` (`/radar`).

---

# PÁGINA: MÉTODO

**Titular de página:** La IA es la capa más pequeña del sistema.

**Intro:**
> En cualquier sistema que funciona de verdad, el reparto es más o menos este: 60 % es información ordenada, 30 % es automatización de flujos y 10 % es el modelo de IA. La industria del hype vende el 10 % como si fuera el todo. Nosotros construimos en orden.

## Fase 1 — Ordenar

Entramos en tu operación real: cómo llega un pedido, quién rellena qué, dónde se guarda, quién lo busca después. Medimos horas y coste con tus datos. Estructuramos la información para que deje de vivir en carpetas sueltas y cabezas concretas.

Es la fase menos vistosa y la más rentable. La mayoría del ahorro aparece aquí, antes de automatizar nada.

## Fase 2 — Automatizar

Conectamos tus herramientas actuales para que los flujos corran solos: el parte que se convierte en informe, el dato que se vuelca donde toca, el aviso que llega a quien tiene que actuar. Preferimos integrar lo que ya usas antes que venderte software nuevo.

Nuestra prueba de calidad: si quitas la IA y el sistema sigue funcionando, está bien construido. La automatización base no depende de la IA.

## Fase 3 — Aplicar IA donde aporta

Con el proceso ordenado y automatizado, la IA entra en el tramo donde de verdad suma: resumir, extraer, clasificar, preparar borradores. Siempre con tres condiciones que no negociamos:

1. **Una persona cualificada valida el resultado.** La decisión sigue siendo humana, y queda registrado quién validó qué.
2. **Los datos van solo a herramientas aprobadas,** en planes de empresa, con reglas claras de qué se sube y qué no sale nunca.
3. **Todo es trazable.** Si algo falla, se sabe dónde y por qué.

## Fase 4 — Formar y transferir

Formamos a tu equipo para operar el sistema con criterio y autonomía. La capacitación es lo que hace que la mejora sobreviva cuando nos vamos. De paso, cubre la formación en IA que exige la normativa europea.

**Principio de fondo (visible en la página):**
> La tecnología potencia a las personas, no las reemplaza. Automatizamos lo repetitivo para que tu gente cualificada haga trabajo cualificado.

**CTA:** `Ver los servicios` · `Pedir el diagnóstico`

---

# PÁGINA: NOSOTROS

**Titular:** Dos personas. Un perfil construye, el otro lleva el negocio.

Somos dos socios con perfiles complementarios. Quien analiza tu operación es quien diseña la solución y quien la monta. Hablas siempre con las dos personas que hacen el trabajo.

**Sebastián Lazarte** — tecnología y producto.
Ingeniero de Sistemas especializado en automatización e IA aplicada. Diseña y monta: flujos, integraciones, bases de datos y la capa de IA donde aporta. Enseña lo que construye: docente de Herramientas de IA Aplicada a nivel de postgrado (Universidad de Los Andes, 2025) y ponente en el Hub Boliviano de Inteligencia Artificial. La formación de tu equipo es una fase del método y la imparte él.

**Natalia Izquierdo** — negocio y cliente.
Ingeniera Comercial con especialización en Marketing y MBA por la Universidad de Jaén. Lleva la captación, la comunicación y el acompañamiento del cliente. Ha acompañado a pymes en procesos de digitalización y traduce entre lo que la operación necesita y lo que el negocio puede sostener.

**Trabajamos con pocos clientes a la vez:**
Preferimos pocos clientes bien atendidos a muchos proyectos a medias. Cada implantación deja plantillas y procedimientos que hacen mejor la siguiente. Es el mismo criterio que te vamos a recomendar a ti.

**Dónde estamos:** Jaén, Andalucía. Trabajamos en toda España.

---

# PÁGINA: FAQ (completa)

**"Mi equipo ya usa ChatGPT y le va bien. ¿Qué me aportáis?"**
Que le vaya bien a cada persona por separado no es lo mismo que un sistema. Sin reglas ni medición, no sabes qué datos están saliendo, no puedes repetir lo que funciona y no puedes demostrar control ante un cliente. Nuestro trabajo convierte ese uso disperso en un proceso: medido, con reglas de datos y trazable.

**"¿Esto no lo hace nuestro informático o nuestra empresa de IT?"**
IT es imprescindible y trabajamos con él, no en su lugar. Lo que IT no suele poder hacer solo es cruzar operaciones, finanzas y calidad para decidir qué proceso merece inversión, cuánto ahorra y con qué criterio se valida. Ese cruce es el diagnóstico.

**"¿Cuánto cuesta?"**
El diagnóstico tiene precio cerrado según tamaño y número de procesos, y te lo confirmamos antes de empezar. Se descuenta íntegro del piloto si continúas en 30 días. Las fases siguientes se presupuestan con los datos del diagnóstico: la vara es el ahorro anual del proceso. Nunca te pediremos firmar un programa grande a ciegas.

**"No podemos exponer datos de nuestros clientes."**
Ni deberíais. Por eso el diagnóstico arranca con muestras anonimizadas y una regla clara de qué se comparte y qué no. Y parte del resultado es justamente el mapa de qué datos están saliendo ya, hoy, sin que nadie lo haya decidido.

**"No tenemos cifras de horas ni de costes."**
Casi nadie las tiene; es normal. Empezamos con rangos estimados con tu equipo y los validamos durante el diagnóstico. Todos los supuestos quedan visibles en el caso económico: si un número te chirría, se corrige y el modelo se recalcula.

**"¿Garantizáis el cumplimiento del Reglamento de IA / RGPD?"**
No, y quien te lo garantice no está siendo honesto. Nosotros diseñamos y documentamos para reducir el riesgo y hacerlo demostrable: reglas, formación registrada, controles y evidencias. La validación legal la hace tu asesor. Es la misma lógica que la ciberseguridad: el riesgo se gestiona, no desaparece.

**"¿Y si simplemente prohibimos la IA?"**
Puedes, pero no funciona. El uso no desaparece: se esconde. La gente sigue usándola desde el móvil, sin registro y sin reglas, que es el peor de los escenarios. La alternativa realista es una vía oficial igual de cómoda que la clandestina: cuentas de empresa, reglas claras y alguien que responde.

**"¿Necesitamos un ERP?"**
Para empezar, casi seguro que no. Construimos sobre las herramientas que ya usas. Si algún día un ERP tiene sentido, llegarás a esa decisión con los procesos ordenados y datos reales, que es la única forma sensata de implantar uno.

**"¿Qué pasa si el piloto no funciona?"**
Que lo sabremos pronto y con poco dinero gastado, porque el criterio de continuar o parar se pacta antes de construir. Si el número no sale, se para. Te quedas con el proceso medido, la métrica y lo aprendido. Eso también es un resultado.

**"¿Trabajáis solo con automoción?"**
No. Trabajamos con pymes industriales y técnicas en general. Automoción es nuestra especialización más exigente, porque los proveedores de OEM manejan datos de cliente bajo auditoría, y ese listón nos obliga a trabajar con el estándar más alto. Ese mismo estándar lo aplicamos al resto de sectores.

**"¿La IA que implantáis usa nuestros datos para entrenarse?"**
Trabajamos con planes de empresa de los proveedores de IA, que por defecto no entrenan con tus datos, y lo dejamos configurado y documentado. Es una de las diferencias clave con las cuentas personales que tu equipo puede estar usando hoy, donde el entrenamiento suele venir activado por defecto.

---

# PÁGINA: CALCULADORA

*Añadida 2026-09-16. Es el peldaño gratuito que faltaba en la base de la escalera: hasta ahora el escalón más barato (la formación) ya costaba dinero, así que no había nada que diera valor antes de pedirlo. Entrega el mismo cálculo que promete el hero, en 30 segundos y sin hablar con nadie.*

**Titular:** Cuánto te cuesta el papeleo al año.

**Intro:** Tres datos y el número que sale. Es la misma cuenta con la que empieza un diagnóstico, en versión corta y con tus cifras.

**Entradas:** personas que hacen trabajo administrativo · horas a la semana por persona · coste cargado por hora.

**Salida:** coste anual de la capacidad perdida + rango recuperable (25-35 %, lo habitual en procesos documentales).

**Supuestos visibles junto al resultado (obligatorio):** 46 semanas trabajadas al año. Se usan 46 y no 52 a propósito: 52 asume que nadie tiene vacaciones e infla el resultado. Inflar la cifra del cebo, en una marca cuya postura es no inflar cifras, sería el peor sitio para hacerlo.

**Aviso obligatorio y visible:** *Es una estimación con tus supuestos, no una medición. El diagnóstico mide el proceso real y corrige estos números con lo que encuentre.*

**Sin muro de email.** El resultado se ve primero. Pedir el correo antes de dar el número contradice la voz de la marca.

**CTA:** `Pedir el diagnóstico` · `Reservar llamada de 20 minutos`

---

# PÁGINA: CONTACTO

**Titular:** Cuéntanos tu proceso más pesado.

**Texto:**
> Rellena el formulario o escríbenos. Te respondemos el mismo día laborable con una propuesta de llamada de 20 minutos. En esa llamada te decimos, honestamente, si tiene sentido un diagnóstico o si todavía no. Sin compromiso.

*El plazo sale de la constante `PLAZO_RESPUESTA` en `src/data/contacto.ts`. Estaba escrito de tres formas y en dos formatos distintos ("uno o dos días laborables" en el intro y en el acuse, "1–2 días laborables" junto al botón).*

**Pantalla posterior al envío:**
> **Recibido** — Te escribimos el mismo día laborable con una propuesta de hora.
> Mientras tanto, ve pensando qué proceso os come más tiempo y cuántas personas lo tocan. Es por donde empieza la llamada.

*Antes repetía casi literalmente el texto del intro, que el visitante acababa de leer, y cerraba con "Sin compromiso". Ese "sin compromiso" se queda en el intro, donde la duda existe; después de enviar ya no tranquiliza y sugiere que quizá sí lo había (R7). El momento posterior al envío es el de mayor atención de la visita: se usa para preparar la llamada.*

**Campos del formulario:**
- Nombre
- Empresa
- Sector (desplegable: mantenimiento / instalaciones / calidad / metalmecánica / logística / automoción-OEM / construcción / agroindustria / otro industrial)
- Tamaño (5–20 / 21–50 / 51–100 / más de 100)
- ¿Cuál es el proceso que más horas os come? (texto libre, opcional)
- Email · Teléfono (opcional)
- Casilla RGPD + enlace a política de privacidad

**Bajo el formulario:**
> ¿Prefieres empezar más pequeño? La formación en IA para tu equipo es lo más barato por lo que puedes empezar, y cubre una obligación legal con fecha. `Ver la formación →`

---

# SEO Y MICROCOPY

## Títulos y metadescripciones

| Página | Title (≤60 car.) | Meta description (≤155 car.) |
|---|---|---|
| Inicio | Solempia — Automatización y uso seguro de IA para pymes industriales | Recupera las horas que tu empresa pierde en tareas manuales y pon la IA de tu equipo bajo control demostrable. Diagnóstico con garantía. |
| Servicios | Servicios — Diagnóstico, automatización y uso seguro de IA | Del diagnóstico operativo al mantenimiento: cada fase con precio cerrado y presupuestada con datos, nunca a ciegas. |
| Sectores | Sectores — Industria, servicios técnicos y automoción OEM | Mantenimiento, calidad, metalmecánica, logística y proveedores de automoción. Radar de IA en la Sombra para quien trabaja con OEM. |
| Radar | Radar de IA en la Sombra — Diagnóstico para pymes | Tu equipo ya usa IA por su cuenta. El Radar mapea qué datos salen, cuántas horas se pierden y qué reglas lo ponen bajo control demostrable. |
| Método | Método — Ordenar, automatizar y aplicar IA donde aporta | El 60 % es información ordenada, el 30 % automatización y el 10 % el modelo. Construimos en ese orden, con validación humana. |
| Nosotros | Nosotros — El equipo de Solempia | Dos socios, perfil técnico y comercial. Quien analiza tu operación es quien construye la solución. Desde Jaén para toda España. |
| FAQ | Preguntas frecuentes — Solempia | Precios, datos de clientes, cumplimiento, pilotos que no salen y por qué prohibir la IA no funciona. Respuestas sin rodeos. |
| Contacto | Contacto — Pide tu diagnóstico | Cuéntanos tu proceso más pesado. Llamada de 20 minutos y precio cerrado antes de empezar. |

## Slugs propuestos

`/` · `/servicios` · `/sectores` · `/sectores/automocion` (si el CMS permite, separar el Radar en su propia URL para campañas) · `/radar` (versión genérica del Radar, para campañas sin segmentar por sector) · `/metodo` · `/nosotros` · `/faq` · `/contacto`

## Textos de botón (consistentes en todo el sitio)

- Primario: `Pedir el diagnóstico`
- Secundario: `Reservar llamada de 20 minutos`
- Formación: `Reservar la formación`
- Vertical: `Pedir el Radar de IA en la Sombra`

## Recordatorios legales (no es copy, es checklist de publicación)

- Aviso legal, política de privacidad y cookies (formulario = datos personales → RGPD).
- Identidad del responsable: Sebastián Lazarte, autónomo, Jaén (confirmar datos fiscales exactos con la gestoría antes de publicar).
- Si se usa analítica, banner de consentimiento.

---

# PENDIENTES ANTES DE PUBLICAR

- [ ] Revisión de Sebastián: tono, promesas y elección de titular del hero.
- [ ] Decidir si se publican precios orientativos del diagnóstico y la formación (el copy actual dice "precio cerrado antes de empezar"; añadir cifras es reversible).
- [ ] Confirmar con la gestoría los datos del aviso legal.
- [ ] Pasada anti-tells de IA tras las ediciones (sin guion largo como conector, variar ritmo, sin listas demasiado simétricas).
- [ ] Cuando exista el primer caso autorizado y anonimizado: sustituir el bloque "ejemplo ilustrativo" por el caso real.
- [ ] Decidir la dirección de imagen del sitio (material propio / ilustración / abstracto de marca) — ver `docs/imagery-spec.md`. Incluye los retratos de los socios.
- [ ] Versión en inglés: solo cuando se active la fase 2 (Alemania/Suecia), adaptando la voz, no traduciendo.
