# Solempia — especificación de rediseño

Fecha: 17 de septiembre de 2026. Estado: especificación preparada para implementación; el rediseño aún no está aplicado.

Referencia solicitada: [Delegalo AI](https://delegaloai.com/), revisada en navegador en escritorio y a 360 px. Este documento define una adaptación propia a Solempia. Los valores de diseño y los textos de las secciones siguientes son propuestas para Solempia, salvo donde se identifica expresamente una observación de la referencia.

## 1. Lectura de la referencia

La portada combina imagen de fondo oscurecida, titular centrado con una parte cambiante, acento azul y dos botones redondeados. La navegación pasa a una superficie clara al desplazarse. El cuerpo alterna zonas claras y oscuras, servicios con detalle e imagen, marcas de herramientas y demostraciones de interfaces. Los casos comparan el trabajo anterior con el resultado. Los títulos usan Inter; en el escritorio inspeccionado, el h1 mide 80 px y pesa 600. El botón principal usa azul `#0071E3`. En móvil, texto y botones se apilan. [Fuente: página principal y estilos renderizados de Delegalo AI](https://delegaloai.com/).

La dirección propuesta para Solempia toma esa composición visual y la explicación mediante tareas. Conserva su especialización industrial, identidad verde y recorrido de contacto. Las afirmaciones comerciales, clientes, fotografías y cifras de la referencia pertenecen a esa empresa y no forman parte de la adaptación.

## 2. Resultado esperado y alcance

El visitante debe entender en la primera pantalla qué hace Solempia, para quién trabaja y cómo consultar su caso. La página debe mostrar ejemplos que ayuden a reconocer tareas propias: partes de trabajo, documentación, informes y traspaso de información entre herramientas.

Esta fase entrega las especificaciones. La implementación posterior comprende diseño, estructura de portada, titulares y componentes compartidos. Conserva las rutas públicas, calculadora, contenido útil de servicios, formulario y exportación estática.

La nueva dirección permite revisar el titular y retirar códigos decorativos, temas que habían quedado aplazados antes de esta petición. Las propuestas de este documento todavía no sustituyen los textos desplegados.

## 3. Sistema visual propuesto

### Paleta

| Uso | Valor | Aplicación |
|---|---|---|
| Fondo base | `#EEF0E8` | Conserva el fondo salvia de Solempia |
| Superficie clara | `#F8F9F1` | Tarjetas, formulario y secciones de lectura |
| Texto principal | `#141614` | Titulares y cuerpo |
| Texto secundario | `#6A7064` | Descripciones sobre fondo claro |
| Acento | `#1F4034` | Botón principal y enlaces |
| Fondo oscuro nuevo | `#10291F` | Portada sin fotografía e integraciones |
| Acento claro nuevo | `#B9D9C3` | Palabras destacadas sobre fondo oscuro |
| Borde | `#D6DACE` | Separadores y controles |

Usar texto `#F8F9F1` en superficies oscuras. El verde oscuro se reserva para fondos o texto sobre claro; no usarlo para destacar palabras encima de una imagen oscura. El bronce deja de aparecer en códigos y rótulos decorativos. Verificar los pares de contraste en la implementación.

### Tipografía y dimensiones

Conservar Geist Sans, ya instalada. Se adopta la jerarquía de la referencia con una escala propia. Geist Mono queda limitada a datos donde facilite comparar valores; se retira de los rótulos comerciales.

| Elemento | Escritorio | Móvil |
|---|---|---|
| H1 de portada | 64–80 px, peso 600, interlineado 1.05 | 36–40 px, peso 600, interlineado 1.1 |
| H1 interior | 48–64 px | 34–40 px |
| H2 | 40–52 px, peso 600 | 28–34 px |
| H3 | 24–28 px | 22–24 px |
| Entrada de sección | 18–20 px, interlineado 1.55 | 17–18 px |
| Cuerpo y campos | 16 px, interlineado 1.6 | 16 px |
| Etiquetas y ayudas | 14 px | 14 px |

Titulares con tracking aproximado de `-0.035em`, sin forzar saltos de línea que rompan el móvil. Usar `clamp()` para interpolar tamaños. Contenedor máximo de 1200 px; margen lateral de 24–40 px en escritorio y 20 px en móvil. Párrafos con ancho máximo de 65 caracteres.

Secciones: 88–112 px de padding vertical en escritorio, 56–72 px en móvil. Separación entre título y contenido: 32–48 px. Tarjetas: radio de 20–24 px y padding de 24–32 px. Botones: radio completo, altura mínima de 48 px; estados normal, hover, foco, deshabilitado y envío definidos.

### Movimiento

Para texto y secciones generales: entradas de opacidad y desplazamiento de hasta 12 px, 200–400 ms, una sola vez. Para las demostraciones de producto: aplicar además las animaciones de profundidad, paneles superpuestos y secuencias definidas a continuación. El contenido debe permanecer disponible sin animación. Desactivar movimiento no esencial con `prefers-reduced-motion`.

La primera versión usa un titular estable, sin rotación de palabras. Las demostraciones pueden cambiar al pulsar un control, con alternativa estática. Sin contadores que aparenten datos en directo, desplazamiento forzado ni carruseles automáticos de logotipos.

### Demostraciones animadas con profundidad — ampliación solicitada

**Incluidas en el alcance del rediseño.** Referencia adicional: fragmento HTML aportado por el usuario el 17 de septiembre de 2026, con un panel de cotizaciones y una tarjeta de propuesta superpuesta.

El fragmento contiene `transform-style: preserve-3d`, un origen de transformación inferior, un panel base en `translateZ(0px)` y otro adelantado en `translateZ(96px)`. También contiene sombras por capas, estilos de opacidad/desplazamiento, transiciones de selección de filas y puntos con `animate-ping`. Es una captura del DOM: no permite determinar por sí sola si las rotaciones se controlan mediante scroll, puntero u otro evento, ni sus duraciones originales. Los valores y disparadores siguientes son la especificación propia de Solempia.

#### Composición y secuencia

Usar este tratamiento en `ProcessExample` y en el visual activo de `ProcessShowcase`. Construir interfaces HTML/SVG con un panel principal y una tarjeta de resultado que sobresalga hacia la derecha y abajo. En Solempia, representar un parte recibido, los datos organizados y el informe preparado para revisión. La escena debe explicar ese proceso incluso cuando esté quieta.

| Efecto | Comportamiento propuesto |
|---|---|
| Entrada del conjunto | Al entrar al menos el 30 % de la escena en pantalla: opacidad 0 → 1, desplazamiento vertical 24 → 0 px e inclinación X de 6 → 0 grados. Duración 700 ms, una vez por montaje |
| Profundidad | Perspectiva de 1200 px en el contenedor padre, `preserve-3d` en los envoltorios. Panel base a 0 px; tarjeta de resultado a 64–96 px en Z en escritorio |
| Aparición de datos | Campos y filas aparecen con opacidad y desplazamiento de 8 → 0 px, 260–320 ms cada uno y separación de 80 ms. Máximo cinco elementos por secuencia |
| Tarjeta de resultado | Aparece después de los datos, a partir de 450–650 ms desde el inicio, con duración de 450 ms. Mantiene su separación visual y profundidad al terminar |
| Respuesta al puntero | Solo con puntero fino y hover: inclinación máxima de ±3 grados en X/Y. Vuelve a la posición neutra al salir o al enfocar un control con teclado. No desplazar la página |
| Sombras | Dos o tres sombras suaves teñidas de verde oscuro para distinguir la base y la tarjeta elevada. Una capa separada puede variar su opacidad durante la entrada; evitar recalcular desenfoques en cada movimiento |
| Selección | Un botón o selector accesible cambia el elemento seleccionado y actualiza la tarjeta de resultado. Fondo y marca lateral transicionan en 150–200 ms; los datos cambian en 200–250 ms |
| Estado del proceso | Pulso suave de 1,5 s, hasta dos repeticiones durante la entrada. Después queda estático. Etiquetas como «Ejemplo: listo para revisar» evitan aparentar una conexión real |

La secuencia completa debe terminar en menos de 2,5 segundos y no reiniciarse por pequeños movimientos del scroll. Puede ofrecerse «Repetir demostración» como control explícito. Ningún botón de la interfaz ilustrativa enviará mensajes, documentos ni datos a servicios externos.

#### Responsive y accesibilidad

- Desde 1024 px: composición superpuesta; ancho total máximo de 1000 px y tarjeta secundaria de aproximadamente 320–340 px. Reservar margen inferior y lateral para sombras y desplazamientos.
- Entre 640 y 1023 px: tarjeta secundaria dentro del flujo, alineada a la derecha; solapamiento máximo de 16 px, solo sobre una zona sin texto ni controles.
- Por debajo de 640 px: paneles apilados, separación de 16 px, sin inclinación ni desplazamiento en Z. Conservar la entrada breve de opacidad y la secuencia de estados. Simplificar columnas y usar texto de 14–16 px, sin reducir toda la escena mediante `scale()`.
- Con movimiento reducido: mostrar directamente todos los datos y el resultado final; eliminar pulsos, inclinación y entradas. La selección manual sigue funcionando sin animación.
- Datos importantes en HTML legible y orden de lectura panel → resultado. Elementos puramente decorativos con `aria-hidden`. Controles de selección accesibles con teclado; la animación automática no mueve el foco ni provoca anuncios continuos.

#### Implementación y comprobación

Crear un componente cliente reutilizable `AnimatedProcessDemo` con variantes por proceso y datos ficticios tipados. Usar Framer Motion ya instalado: entrada por visibilidad, secuencia de hijos y valores de movimiento para el puntero; no actualizar estado de React en cada movimiento del ratón. No añadir motores 3D, canvas ni vídeo para este efecto.

Separar el envoltorio que controla la entrada del que controla la inclinación, para que sus transformaciones no se sobrescriban. Aplicar perspectiva al padre y recortar el contenido dentro de cada tarjeta, no en el envoltorio que mantiene la profundidad. Activar `will-change` solo durante el movimiento. Detener actualizaciones cuando la escena quede fuera de pantalla.

Verificar entrada, selección, retorno a posición neutra, repetición manual, vista móvil, movimiento reducido y navegación con teclado. Las sombras no deben recortarse, la tarjeta adelantada no debe tapar datos ni interceptar controles del panel base y ninguna animación debe producir cambios en el espacio reservado de la página.

## 4. Cabecera y navegación

- Cabecera fija de 64–72 px. Logo, enlaces y botón «Contacto» visibles desde el inicio.
- En la portada oscura, logo y enlaces claros; tras el hero, fondo salvia casi opaco y texto oscuro. Las páginas interiores usan la versión clara desde el inicio.
- En escritorio: Servicios, Sectores, Método, Nosotros y Recursos. «Recursos» agrupa Calculadora, Radar y FAQ mediante un desplegable accesible. Todas las rutas siguen disponibles también en el pie.
- Por debajo de 1024 px: logo, «Contacto» y menú. El botón de contacto permanece fuera del panel desplegable.
- Menú con `aria-expanded`, cierre con Escape y al navegar, y foco visible. No depender de hover para abrir Recursos.
- Contacto conserva la selección actual y desplaza al único `#contacto` de la página. En legales lleva a `/contacto/#contacto`.
- Ajustar `scroll-margin-top` a la altura efectiva de cabecera más 16 px.

## 5. Portada propuesta, en orden

### A. Hero centrado

**Titular recomendado:** «Automatizamos las tareas que te quitan tiempo.»

**Descripción:** «Ayudamos a pymes industriales a gestionar partes, documentación e informes con menos trabajo manual. Conectamos las herramientas que ya usas y aplicamos IA donde resulta útil.»

**Botón principal:** «Cuéntanos qué necesitas», hacia el contacto de inicio con «Necesito orientación».

**Botón secundario:** «Ver servicios», hacia `/servicios/`.

Texto centrado, ancho de título máximo de 1000 px y descripción de 720 px. Dos botones en fila, apilados en móvil. Sin columna lateral con el método, códigos `SE-001/`, etiquetas con guiones bajos o rótulos de catálogo.

Altura orientativa: 620–740 px en escritorio; en móvil, altura natural con padding suficiente para separar cabecera y título. Evitar `min-h-screen` obligatorio, que empuja la información demasiado abajo.

**Visual:** fondo verde oscuro y una composición propia de documentos y estados de revisión en los bordes o debajo del texto. El área detrás del titular mantiene un fondo uniforme y legible. Si hay fotografía propia adecuada, puede sustituir esa composición usando un degradado oscuro que preserve el contraste; texto y botones siguen siendo HTML.

Alternativa de titular, si se prefiere un registro más descriptivo: «Automatización de procesos para pymes industriales». No combinar ambos titulares completos en el mismo hero.

### B. Procesos que podemos mejorar

Título: «¿Qué tarea repite tu equipo cada día?»

Cuatro bloques: «Partes de trabajo», «Documentación», «Informes» y «Datos entre herramientas». Cada uno contiene una descripción de dos líneas, hasta tres resultados concretos y una vista de ejemplo. Son aplicaciones del servicio de automatización, no cuatro servicios contratables nuevos.

En escritorio, lista de selección a la izquierda y panel de ejemplo a la derecha. Primer bloque abierto por defecto. En móvil, acordeón con el visual dentro del bloque abierto. Todo se puede usar con teclado; los controles anuncian su estado. Evitar que el contenido solo aparezca al pasar el ratón.

Ejemplo de texto: «Los datos del parte se registran una vez y quedan disponibles para preparar el informe». Evitar absolutos como que cualquier documento se interpreta siempre sin errores.

CTA: «Consultar sobre automatización», `?servicio=automatizacion#contacto`.

### C. Integraciones en una sección oscura

Título: «Conectamos las herramientas que ya usas».

Descripción: «Revisamos cómo compartes la información entre el correo, las hojas de cálculo y tus aplicaciones de gestión. Después definimos qué conexiones necesita tu proceso.»

Fondo verde oscuro, título centrado y cuadrícula de 6–8 herramientas o categorías relevantes. Incorporar marcas concretas solo cuando la compatibilidad esté comprobada. Mientras no exista ese catálogo, usar tarjetas de texto: Correo, Hojas de cálculo, Gestión documental, ERP y CRM. No mostrar una cantidad de integraciones ni tiempos de puesta en marcha sin respaldo.

CTA de texto: «Consultar una integración», con servicio de automatización.

### D. Ejemplo de proceso o caso documentado

Título inicial: «Así puede cambiar un proceso».

Mostrar un ejemplo de partes de trabajo: recepción, revisión, registro y preparación del informe. Comparación «Trabajo manual» / «Proceso automatizado», acompañada de una interfaz propia de tres a cinco filas con datos ficticios. Etiqueta visible «Ejemplo ilustrativo».

Si se carga un caso real autorizado, usar el modelo `Caso` existente: perfil, proceso, antes, después, método de medición y plazo. Publicar cifras solo con su contexto. En el estado actual `caso` es `null`: no hay contenido cargado para una banda de resultados ni para logotipos de clientes.

CTA: «Quiero revisar un proceso», servicio diagnóstico.

### E. Cómo empezamos

Título: «Primero revisamos cómo trabajas».

Tres pasos breves: entender y medir el proceso; preparar e implantar la solución; acompañar al equipo y mantenerla. Explicar qué recibe el cliente en cada paso. Llevar el detalle metodológico a `/metodo/`.

Mantener la duración y condiciones reales del diagnóstico en su bloque de servicio. La referencia no cambia la oferta comercial de Solempia: no convertir el diagnóstico en gratuito ni modificar precios, garantías o plazos por imitación.

### F. Uso seguro de IA

Título: «Decide cómo se usa la IA en tu empresa».

Bloque claro con una muestra de clasificación de herramientas y decisiones pendientes. Descripción centrada en qué información se utiliza, quién revisa los resultados y qué reglas necesita el equipo. Enlaces a Radar y formación con su servicio preseleccionado cuando lleven al contacto.

Evitar afirmaciones universales sobre dónde permanecen los datos. La descripción debe corresponder al servicio y configuración que realmente se ofrezcan.

### G. Preguntas frecuentes y contacto

Cuatro preguntas de entrada: por dónde empezar, qué herramientas pueden mantenerse, cómo se calcula el presupuesto y qué ocurre tras la implantación. Respuestas breves desde los datos de FAQ y enlace a la página completa.

Después, `ContactSection` con título y ayuda centrados, ancho de 672–720 px y campos en dos columnas en escritorio. Constituye el cierre de la página; eliminar bandas de CTA que repitan otra invitación completa inmediatamente antes.

## 6. Aplicación a las páginas interiores

| Ruta | Cambio visual y contenido principal | Servicio inicial del formulario |
|---|---|---|
| `/servicios` | Hero breve; bloques con entregables, visual y consulta por servicio. Conservar formación y mantenimiento | Orientación; CTA cambia selección |
| `/sectores` | Introducción centrada y tarjetas de necesidades por sector | Orientación |
| `/sectores/automocion` | Ejemplos de documentación y control de herramientas; acceso claro al Radar | Radar |
| `/metodo` | Etapas con entregables y visual del proceso; reducir rótulos decorativos | Orientación |
| `/nosotros` | Presentación del equipo y funciones; retratos propios cuando estén disponibles | Orientación |
| `/faq` | Columna legible, acordeones amplios y enlaces útiles | Orientación |
| `/calculadora` | Panel claro para entradas y resultado, con supuestos visibles | Diagnóstico |
| `/radar` | Alcance, entregables y muestra ilustrativa del resultado | Radar |
| `/contacto` | El mismo formulario, título h1, sin segundo bloque de contacto | Orientación o parámetro |
| Legales | Tipografía y cabecera compartidas; texto legal legible | Enlace a contacto, sin formulario |

Las páginas interiores no necesitan repetir la fotografía ni la altura del hero de inicio. Reservar fondos oscuros para bloques donde ayuden a distinguir una idea.

## 7. Contrato de contacto que debe preservarse

La referencia visual se combina con los requisitos ya implementados en [contacto.md](./contacto.md):

- Un único formulario por página comercial, con etiquetas siempre visibles.
- Nombre, email, mensaje y privacidad obligatorios; empresa y teléfono opcionales.
- Servicios: diagnóstico, automatización, uso seguro de IA, mantenimiento, formación, Radar y orientación.
- Título y ayuda adaptados al servicio; cambiarlo no borra el resto de campos.
- Enlaces compartibles `?servicio=…#contacto`; valor desconocido pasa a orientación.
- Botón «Enviar consulta», protección antispam, bloqueo de duplicados, confirmación y recuperación de errores conservando el borrador.
- Mensaje enviado como `process`, servicio y ruta de origen conservados; webhook de n8n y exportación estática.

No sustituir el formulario por una agenda externa al adaptar el estilo. Mantener email y WhatsApp como canales alternativos.

## 8. Recursos visuales y contenido pendiente

La primera implementación puede completarse con componentes HTML/SVG propios: parte de trabajo, lista de documentos, informe y panel de revisión. Usar nombres y datos ficticios explícitos; no representar conexión en tiempo real. Estos componentes ilustran la experiencia del cliente, sin exponer diagramas internos de n8n ni detalles de infraestructura.

Material opcional para una segunda versión: fotografía propia de trabajo del equipo, retratos y capturas de proyectos autorizadas y anonimizadas. No descargar fotografías, logos de clientes o demostraciones de la referencia. No crear personas ficticias que aparenten ser miembros reales de Solempia.

La ausencia de fotos no bloquea el desarrollo: la composición propia de interfaces es la variante predeterminada del hero.

## 9. Mapa técnico de implementación

| Archivo o componente | Trabajo previsto |
|---|---|
| `src/app/globals.css` | Añadir colores oscuros, escalas, radios, focos y variantes de sección |
| `src/components/layout/NavBar.tsx` | Variante sobre hero, agrupación de Recursos y navegación accesible |
| `src/components/ui/Button.tsx` | Normalizar tamaño y estados sobre fondos claros/oscuros; conservar `ContactLink` |
| `src/components/sections/home/HeroHome.tsx` | Composición centrada, nuevo contenido y visual propio |
| `src/data/home.ts` | Nuevo hero, procesos y ejemplos; mantener casos reales separados de demostraciones |
| Componentes nuevos de portada | `ProcessShowcase`, `IntegrationsSection` y `ProcessExample`, con datos tipados |
| `src/app/page.tsx` | Ordenar la nueva narrativa; fusionar Problema/Cambio y los resúmenes redundantes |
| Páginas y componentes de servicios | Aplicar títulos, espaciado, tarjetas y CTA contextual comunes |
| `ContactSection`, `ContactForm`, `ContactLink` | Ajustes de apariencia; preservar lógica, validación y contrato |
| `src/data/site.ts`, metadatos de páginas | Sincronizar microcopy y descripciones con los nuevos titulares |
| Documentación de marca | Actualizar tokens, imagen, voz y draft cuando se aplique el rediseño |

Conservar Next.js, React, Tailwind y Framer Motion existentes. Leer las guías locales de Next antes de codificar. Usar componentes de servidor para contenido estático y componentes cliente solo donde haya interacción. Las ilustraciones deben funcionar con `output: export`; ningún servicio nuevo de backend es necesario para este rediseño.

## 10. Relación con las reglas actuales

La solicitud de adoptar este estilo cambia la dirección editorial anterior. Al implementar, actualizar `docs/design-tokens.md`, `docs/imagery-spec.md`, `docs/brand-voice.md` y el draft para evitar instrucciones contradictorias.

Cambios propuestos: admitir peso 600 en titulares, radios de 20–24 px, portada visual, fondos oscuros y rótulos comerciales en sans. Retirar códigos como `SE-001/` de la interfaz; la numeración de pasos se conserva solo si ayuda a seguir una secuencia. La marca, logotipo y verde siguen vigentes.

Este documento no modifica por sí solo las condiciones comerciales ni autoriza a publicar material de clientes. Tampoco cambia los requisitos funcionales del contacto.

## 11. Secuencia y criterios de aceptación

1. Aplicar tokens, botones y cabecera. Montar hero y un bloque de procesos para fijar la dirección visual.
2. Completar portada, ejemplos, integraciones, método, FAQ y contacto.
3. Extender los componentes a las páginas interiores y sincronizar contenidos y documentación.
4. Revisar exportación, navegación y formularios antes de publicar.

La implementación estará lista cuando cumpla estas comprobaciones:

- A 360, 768, 1024 y 1440 px no hay desbordamiento horizontal, texto cortado ni controles superpuestos. Revisar también zoom al 200 %.
- «Contacto» está visible desde el primer momento y cada ancla queda debajo de la cabecera.
- El hero explica actividad, público y siguiente paso; ya no muestra códigos decorativos ni la columna lateral actual.
- Los visuales tienen función explicativa; ejemplos y casos reales se distinguen claramente.
- Menú, acordeones, selectores y formulario funcionan con teclado y tienen estados accesibles. Un h1 por página, jerarquía coherente y foco visible.
- Contraste AA para texto y controles; movimiento reducido respetado; dimensiones reservadas para imágenes y paneles.
- Ningún resultado, cliente, integración ni ahorro se presenta como comprobado sin respaldo.
- No se pierde ninguna ruta, cálculo, enlace útil o selección contextual del contacto.
- `npm run lint`, `npm run build` y las pruebas de contacto pasan. Revisar éxito, error HTTP, caída de red, reintento y doble clic con respuestas simuladas.
- Revisar visualmente las pantallas exportadas y comprobar que no aparecen errores de hidratación. La carga inicial debe funcionar sin depender de animaciones o vídeo.
- Antes de desplegar el nuevo formulario, confirmar publicada la adaptación del receptor de n8n. Actualmente el código está verificado y guardado, pero su publicación sigue pendiente por el bloqueo de revisión automática registrado en `docs/contacto.md`.

## 12. Decisiones listas para ejecutar

Dirección: composición visual de agencia con verde Solempia; Geist Sans; hero centrado y estable; demostraciones propias como recurso inicial; contacto compartido siempre accesible. La fotografía y los casos reales se incorporan cuando exista material adecuado. No hace falta resolver esas dependencias para construir la primera versión.
