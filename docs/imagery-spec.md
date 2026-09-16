# Imagery Spec — dirección de imagen del sitio

**Estado: en decisión.** Este documento define qué material visual puede entrar en la web y recoge la decisión pendiente. Hasta que se cierre, el sitio es 100 % tipográfico y **no se añade ninguna imagen** sin pasar por aquí.

---

## 1. Objetivo

La web comunica bien pero se percibe plana: todo es texto. Lo que buscamos de la imagen:

1. **Romper la planitud** en las ranuras de mayor exposición (home, cabeceras de subpágina).
2. **Enseñar lo que Solempia construye** — sistemas, orden, control — no una metáfora de ello.
3. **No romper nada de lo que ya funciona**: sobriedad, anti-clichés de `design-tokens.md`, voz de `brand-voice.md`.

Una imagen que solo decora no se gana su sitio. Si una ranura queda mejor sin imagen, se queda sin imagen.

## 2. Aprendizajes — por qué el stock quedó vetado

Se implementaron y descartaron dos registros completos de fotografía de stock (Unsplash, duotono malaquita/bone):

| Intento | Registro | Por qué se descartó |
|---|---|---|
| 1 | Oficios concretos: soldador, línea OEM, almacén, calibre sobre planos | **Segmenta al visitante.** Un soldador dice "metalmecánica"; una carretilla dice "logística". El gerente de calidad o construcción no se reconoce. "Mostrar la maquinaria confunde." |
| 2 | Arquitectura industrial abstracta: naves, estructuras, fachadas | **Se siente alquilado.** Fotos técnicamente correctas pero ajenas: no cuentan nada de Solempia y se leen como decoración forzada. |

Reglas que dejan estos intentos:
- **Nada de fotografía de stock**, con ningún tratamiento. El duotono unifica la superficie, no el significado.
- **Nada que nombre un oficio** en páginas generales.
- Todo material visual debe ser **propio**: real, dibujado a medida, o derivado de la marca.

## 3. Direcciones aprobadas para explorar

Las tres pueden convivir: no son excluyentes entre sí, cada ranura toma la que le corresponda.

### A. Material propio real
Fotos y capturas de lo que Solempia efectivamente hace: pantallas de sistemas construidos (flujos de n8n, dashboards, dossiers de evidencias) estilizadas sobre los tokens de marca, fotos reales de proyectos (con autorización) y retratos de los socios.

- **Dónde encaja**: retratos en `/nosotros` (imprescindible ahí); capturas de sistema en home y `/metodo`, donde el copy habla de lo que se construye.
- **Qué hace falta** (checklist para los socios):
  - [ ] Retratos de Sebastián y Natalia (luz natural, fondo neutro; el duotono unifica después).
  - [ ] 2–3 capturas de sistemas reales construidos, anonimizadas (sin datos de cliente).
  - [ ] Autorización del cliente si aparece cualquier material de proyecto.
- **Riesgo**: depende de material que aún no existe. No bloquea: las demás direcciones cubren mientras tanto.

### B. Ilustración / diagramas propios
SVG técnico dibujado a medida con la única iconografía permitida (geometría primitiva, stroke): el antes/después de un proceso, el 60/30/10 del método, el mapa del Radar (qué información toca qué herramienta), la escalera de 4 pasos.

- **Dónde encaja**: junto a los conceptos que ilustran — `/metodo`, la banda de la home (antes/después), `/radar` y `/sectores/automocion` (mapa de exposición).
- **Qué hace falta**: nada externo; se diseñan y versionan en el repo como componentes.
- **Riesgo**: si el diagrama repite lo que el texto ya dice, es ruido. Cada diagrama debe aportar estructura que el texto no puede dar. Vigilar el límite con los anti-clichés (nada que parezca "red neuronal").

### C. Visual abstracto de marca
Patrones estáticos derivados de la identidad: la malla Malaquita del logo (7 nodos, hairlines), tramas geométricas en malaquita/bronce sobre bone. Textura visual sin significado de sector.

- **Dónde encaja**: ranuras donde no hay concepto que ilustrar — cabecera de `/sectores`, fondos de CtaBand, separadores. También como marco/fondo para las capturas de la dirección A.
- **Qué hace falta**: nada externo; se genera desde la geometría de `ui/Logo.tsx`.
- **Riesgo**: abstracción vacía — si el patrón no se reconoce como la marca, es decoración. Derivar siempre de la malla real del logo, no de geometría genérica. Cuidado con el veto de "nodos conectados": la malla del logo es identidad registrada en el manual, pero un patrón de nodos expandido puede leerse como cliché IA — validar contra § anti-clichés antes de aprobar.

## 4. Mapa por ranura

| Ranura | Dirección | Contenido candidato |
|---|---|---|
| Home — banda bajo el hero | B (luego A) | Diagrama antes/después de un proceso real; cuando exista, captura de sistema propia |
| `/metodo` — cabecera o entre fases | B | El 60/30/10 dibujado |
| `/radar` y `/sectores/automocion` — cuerpo | B | Mapa de exposición: qué información toca qué herramienta |
| `/sectores` — cabecera | C | Trama de marca; no hay concepto específico que ilustrar |
| `/nosotros` — tarjetas de socios | A | Retratos reales (única foto imprescindible del sitio) |
| CtaBand / separadores | C | Textura de marca muy sutil, opcional |
| `/servicios`, `/faq`, `/contacto`, legales | — | Sin imagen: páginas de lectura y acción |

## 5. Criterios de aceptación

Antes de aprobar cualquier imagen, las cinco preguntas. Un "sí" en cualquiera la descarta:

1. ¿Podría estar en la web de otra empresa sin que nadie lo note? (= stock, aunque sea propio)
2. ¿Nombra un oficio concreto en una página general?
3. ¿Toca algún anti-cliché de `design-tokens.md`? (nodos/grafos, circuitos, orbital rings, gradientes SaaS…)
4. ¿Solo decora? (si se quita y la página no pierde información ni jerarquía, sobra)
5. ¿Rompe la paleta? (todo pasa por malaquita/bronce/bone; nada de color directo)

## 6. Decisiones pendientes

- [ ] Validar las tres direcciones sobre los mockups (página de comparación publicada como Artifact).
- [ ] Elegir qué entra en la primera implementación (propuesta: B en home + método, C en sectores; A cuando haya material).
- [ ] Sesión de retratos de los socios (dirección A, `/nosotros`).
- [ ] Definir el primer diagrama: ¿antes/después de qué proceso? (candidato: partes de trabajo → informe generado)
