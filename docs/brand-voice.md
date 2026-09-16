# Brand Voice — Solempia

## Postura
**Empezamos con la verdad, no con el hype.** Solempia escribe como una agencia que toma su oficio en serio: declarativa, sobria, técnica, honesta. La diferenciación viene de **decir lo que la mayoría no dice** — incluso cuando le quita venta a un proyecto.

## Lo que esto significa en la práctica

1. **Decimos qué NO construir.** La mayoría de los flujos no necesitan IA. Si una hoja de cálculo lo resuelve, lo decimos. Si una integración simple basta, lo decimos. Esto es la postura central — atraviesa todo el copy.
2. **Sin métricas inventadas.** No "+50 proyectos" ni "3x ROI promedio" si no se puede demostrar. Una cifra real vale más que diez redondeadas.
3. **Sin adjetivos vacíos.** Nada de "innovador", "líderes", "next-gen", "soluciones a medida". Verbo + objeto concreto.
4. **Sentencias declarativas cortas.** Una idea por frase. Cuando llevan dos, son dos frases.
5. **Anti-marketing inflado.** Sin signos de exclamación, sin emojis en UI, sin urgencia falsa.

## Reglas verificables

Añadidas en 2026-09 tras detectar que el copy sonaba a texto generado por máquina. No son cuestión de gusto: se comprueban con un grep.

**R1 — Presupuesto de paralelismo negativo: 3 usos por página.**
El patrón `X, no Y` / `No es X, es Y` / `Sin X. Sin Y.` es el marcador más reconocible de texto de IA; aparece unas tres veces más en texto de máquina que en texto humano. Lo que delata no es usarlo, es la frecuencia: pasado cierto umbral, el lector oye la plantilla en lugar de la idea. La versión anterior de la web lo usaba unas 30 veces.

Al retirarlo, la regla de sustitución es afirmar directamente. Si la frase no sobrevive sin el contraste, la idea todavía no estaba madura.
- ✗ "Con tus números, no con promedios de internet."
- ✓ "Con tus números."

No cuentan contra el presupuesto las negaciones factuales ("qué no sale nunca") ni las condicionales de la garantía ("si no encontramos nada, no lo pagas").

**R2 — Un párrafo, una idea, 30 palabras de techo.** El lector objetivo es un gerente leyendo en el móvil entre dos reuniones.

**R3 — Toda sección lleva un dato concreto, o se elimina.** Nada que solo declare postura.

**R4 — Sustantivos del oficio del cliente, no del nuestro.** "Parte de trabajo", "solicitud de oferta", "informe de calidad" sí.

El vocabulario interno nace en una pizarra, describe cómo ordenamos **nuestro** catálogo y se publica sin traducir. La prueba: ¿un gerente industrial usaría esa palabra en una reunión? Términos retirados en 2026-09 y su sustituto:

| Vetado | En su lugar | Por qué |
|---|---|---|
| puerta lateral | "se contrata suelta" | Describe nuestro catálogo, no su compra |
| escalera (en copy visible) | "cuatro pasos" | Metáfora de casa. Sobrevive en nombres de código (`Escalera.tsx`), que nadie lee |
| la puerta de entrada | "por aquí se empieza" | Ídem |
| carril oficial | "hacerlo oficial" / "una vía oficial" | La frase ya sigue con lo concreto; la metáfora no aporta |
| guardarraíl | `alcance_` | *Guardrail* traducido a pelo; en español solo existe en autopistas |
| módulo | "el proceso", "lo construido" | Es como lo llama quien lo monta; el cliente compra un proceso que funciona |
| a quién servimos | "para quién" | Suena a servidumbre |

**Se quedan** los nombres propios de producto ("Radar de IA en la Sombra", "Diagnóstico operativo": se compran por ese nombre) y "dossier", corriente en España en contexto de auditoría.

**R5 — Nada de definirse por negación.** Describir Solempia sobre todo por lo que no hace deja al lector sin imagen positiva.

**R6 — Longitudes de frase asimétricas.** Un ritmo demasiado regular también se lee como máquina.

**R7 — No niegues objeciones que el lector no tiene.** Es el defecto más caro de los siete, porque parece un argumento y funciona en contra.

Antes de escribir "no X", comprobar que X ya estaba en su cabeza. Si la objeción es del gremio —cómo factura una consultora, qué hacen los malos proveedores, cómo se venden los cursos— se borra. Al negarla le plantas al lector un marco mental que no tenía y le obligas a construirlo para entenderte.

- ✗ "La vara de medir es el ahorro anual del proceso, **no nuestras horas**." *(a ningún gerente se le había ocurrido que pudieras cobrarle por horas)*
- ✓ "El precio se fija contra el ahorro anual del proceso."

**Señal de alarma:** si la frase acaba hablando de nosotros ("nuestras horas", "no entregamos un PDF", "no vendemos el programa completo"), está mal orientada. La página es suya.

**Qué poner en su lugar:** lo que sí ocurre, concreto. Es la sustitución que *DotCom Secrets* llama Epiphany Bridge — relato en vez de argumento defensivo.
- ✗ "Sesión práctica con los casos de tu empresa, no un curso genérico de diapositivas."
- ✓ "Sesión práctica sobre los casos reales de tu empresa: trabajamos con tus documentos y tus flujos."

**La excepción que sí hace trabajo.** Cuando la duda ya está en su cabeza, negarla tranquiliza, y estas se quedan:
- Los guardarraíles ("No certificamos TISAX ni IATF", "El riesgo no se elimina"): ahí niegas algo que el cliente sí podría asumir de más.
- Las condicionales de la garantía ("si no te descubre nada, no lo pagas").
- Las respuestas de FAQ a preguntas literales ("IT es imprescindible, trabajamos con él, no en su lugar").
- Los miedos reales de su plantilla ("La tecnología potencia a las personas, no las reemplaza").

## Persona y tiempo
- Primera persona plural ("Diseñamos…", "Construimos…")
- Presente para procesos vigentes, pasado para casos cerrados
- Voz activa siempre

## Vocabulario

**Usar:**
- Verbos concretos: diseñamos, construimos, integramos, medimos, retiramos, clasificamos, descartamos
- Sustantivos concretos: proceso, flujo, integración, agente, métrica, riesgo, gobernanza
- Cifras y unidades reales cuando existan ("4 horas → 90 segundos", no "mucho más rápido")
- Términos técnicos correctos sin sobreexplicar (CRM, API, webhook, agente, RAG, evaluación)

**Evitar:**
- Superlativos vacíos: revolucionario, innovador, disruptivo, líderes, world-class, next-gen, pionero
- Buzzwords IA: cutting-edge AI, IA de última generación, hiperinteligente, supera a humanos, IA aplicada al éxito
- Filler corporativo: soluciones a la medida, partners estratégicos, sinergia, ecosistema, transformación digital
- Hedging vago: "podemos ayudarte a", "te ayudamos a explorar"
- Métricas falsas o redondeadas: "+50 clientes", "100% satisfacción", "3x ROI" (a no ser que se pueda demostrar)
- Emojis en UI o copy institucional
- Exclamaciones (excepto en mensajes pre-poblados de WhatsApp si suenan naturales)

## Lo que NO somos al escribir
Estos registros están vetados:
- **Startup juvenil**: ¡Lo logramos! 🎉, "súper fácil", "increíble"
- **Coach motivacional**: "Es hora de dar el salto", "tu negocio merece más"
- **Despacho corporativo**: "Estimado cliente", "Quedamos a su disposición"
- **Agencia gritona**: "RESULTADOS GARANTIZADOS", caps lock, signos encadenados
- **Vendedor de IA**: "transforma tu negocio con IA", "el futuro es ahora"

## Códigos visuales del lenguaje
Cuando los headers y eyebrows lleven un slug mono, usar `verbo_` o `(SECCION/)` para reforzar la estética terminal-editorial:
- `construye_`, `enseña_`, `gobierna_` para los pilares
- `(SE-001/)`, `(SE-OPS/)` para códigos de equipo o sección
- `01—` `02—` con guión em para enumeraciones

---

## Ejemplos

### Apertura de Hero
- ✗ "🚀 Revolucionamos tu empresa con IA de última generación"
- ✓ "Empezamos con la verdad, no con el hype. Construimos lo que tiene sentido — y te decimos qué no debería construirse."

### Servicio (descripción corta)
- ✗ "Soluciones de chatbot innovadoras que transforman la experiencia del cliente"
- ✓ "Chatbots que atienden, califican leads y guían el proceso de compra. Cuando una FAQ estática basta, lo decimos."

### Diferencial
- ✗ "Ofrecemos garantía total de satisfacción con resultados increíbles"
- ✓ "Si una hoja de cálculo lo resuelve, no construimos un agente."

### CTA
- ✗ "¡Da el siguiente paso y transforma tu negocio hoy mismo!"
- ✓ "Empieza una conversación."  /  "Pregunta por una llamada."

### Métrica (caso)
- ✗ "Cientos de horas ahorradas y clientes muy satisfechos"
- ✓ "160 horas/mes → menos de 5 minutos por ejecución."

### Eyebrow / sección
- ✗ "🔥 Lo que hacemos por ti"
- ✓ `servicios_` /  `(SE-METHOD/)`
