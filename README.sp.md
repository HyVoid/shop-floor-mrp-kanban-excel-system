[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Sistema de Control de Flujo de Materiales en Planta: Plantilla Excel de MRP, Calculadora de Explosión de BOM, Rastreador de Inventario Kanban y Hoja de Cálculo de Planificación de Producción de Soldadura
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/a63af286-1115-4c2c-aa06-6d7e04aba1e4" />


**Un rastreador de inventario de manufactura listo para usar, una calculadora de explosión de BOM multinivel, una hoja de cálculo de reabastecimiento de supermercado Kanban y una plantilla Excel de programación de producción diaria para talleres de fabricación y soldadura de metales.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Free Web Tool + Microsoft Excel (.xlsx)](https://img.shields.io/badge/Platform-Free%20Web%20Tool%20%2B%20Excel%20(.xlsx)-217346)
![Compatibility: Excel 2021+ & Microsoft 365](https://img.shields.io/badge/Compatibility-Excel%202021%2B%20%26%20M365%20Dynamic%20Arrays-2251FF)
![Category: Manufacturing MRP & Production Control](https://img.shields.io/badge/Category-Manufacturing%20MRP%20%26%20WIP%20Tracker-0A66C2)

**El Sistema de Control de Flujo de Materiales en Planta** es una **plantilla Excel de MRP** lista para usar, una **hoja de cálculo de control de inventario de manufactura** y una **calculadora gratuita de planificación de producción basada en navegador** diseñada para talleres de trabajo de metales, fabricantes de metal y operaciones de soldadura. Convierte los programas de producción por turno en requisitos exactos de piezas de la **lista de materiales (BOM)**, **alertas de reabastecimiento de contenedores Kanban**, **listas de verificación de preparación de carritos junto a la línea** y **consumo retroactivo de merma de trabajo en proceso (WIP)**. Los fabricantes pequeños y medianos y los planificadores primerizos pueden eliminar faltas de piezas inesperadas, detener los retrasos de soldadura a mitad de turno y reemplazar hojas de cálculo manuales defectuosas en menos de 1 minuto sin pagar suscripciones de software ERP o MES complejas.

> ### Acceso Rápido: Sandbox Gratuito en Línea y Sistema Excel Descargable
>
> - **Aplicación Web Interactiva Gratuita (Prueba Instantánea en el Navegador):** Pruebe el flujo de trabajo en línea gratis con datos de muestra de manufactura precargados. Sin instalación ni registro de cuenta.  
>   👉 **[Lanzar la Herramienta Web Gratuita de MRP en Planta, Explosión de BOM y Calculadora Kanban](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/)**
>
> - **Libro de Trabajo de Microsoft Excel Reutilizable Sin Conexión (.xlsx para Operaciones Diarias de Fábrica):** Descargue la plantilla de hoja de cálculo completamente automatizada para pegar sus propios números de pieza, guardar sus datos maestros de BOM localmente y ejecutar la planificación de turnos repetible sin conexión. Respaldado por una **garantía incondicional de devolución del dinero de 30 días**.  
>   👉 **[Descargar la Plantilla Excel Lista para Usar de MRP en Planta, Explosión de BOM y Planificación de Producción (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)**

---

## Lo Que Le Ayuda a Rastrear: De los Puntos de Dolor en Planta a Soluciones Excel Automatizadas

Si está buscando una **plantilla Excel de rastreador de inventario de manufactura**, una **calculadora de faltantes de BOM** o una **hoja de seguimiento de trabajo en proceso (WIP)**, este sistema reemplaza las suposiciones con cálculos automatizados previos al turno:

| Punto de Dolor Diario en Fábrica (Realidad de Principiantes y de Planta) | Intención de Búsqueda de Alta Frecuencia / Módulo Excel Integrado | Cómo Lo Resuelve Automáticamente Esta Hoja de Cálculo Lista para Usar |
| :--- | :--- | :--- |
| **Los Soldadores Dejan de Trabajar Porque Falta un Soporte Pequeño** | **Hoja de Cálculo de Explosión de BOM Multinivel y Calculadora MRP** | Multiplica sus conjuntos de soldadura planificados por turno por cada componente hijo en su **lista de materiales (BOM)** para calcular la demanda exacta de piezas antes de que comience el turno. |
| **Las Piezas Aparecen "En Stock" en el Papel, Pero Nadie Las Encuentra en la Planta** | **Rastreador de Inventario de Ubicación de Trabajo en Proceso (WIP) y Contenedores Kanban** | Separa los totales contables brutos del almacén en ubicaciones físicas específicas: buffers aguas arriba, **contenedores de supermercado Kanban**, carritos de entrega cargados y estaciones de soldadura activas. |
| **Las Máquinas de Corte Láser y Plegado Son Interrumpidas por Pedidos Urgentes** | **Hoja Automatizada de Alertas de Faltantes de Material y Prioridad de Reorden** | Compara la demanda de material del turno contra los saldos actuales del supermercado y los umbrales de stock de seguridad, generando listas de reorden priorizadas (`Critical`, `Warning`, `Normal`) para las máquinas de láser, plegadora y CNC aguas arriba. |
| **Los Manejadores de Material Empujan Kits de Piezas Incompletos a las Estaciones** | **Lista de Verificación de Preparación de Kits junto a la Línea y Rastreador de Despacho de Carritos** | Agrupa los componentes requeridos por estación de trabajo, tamaño de contenedor y capacidad del carrito, asignando estados claros de preparación (`Ready`, `Partly Kitted`, `Blocked`) antes de que cualquier carrito salga del área de staging. |
| **La Merma de Soldadura No Registrada Arruina los Recuentos de Inventario con el Tiempo** | **Calculadora de Producción Planificada vs. Real y Consumo Retroactivo de Merma** | Deduce tanto los conjuntos buenos completados como la merma reportada en planta de sus saldos de inventario en vivo al final de cada turno, manteniendo los números de la hoja de cálculo alineados con los recuentos físicos de contenedores. |
| **Los Supervisores Pasan Horas Actualizando Fórmulas Rotos entre Pestañas** | **Panel de Control de Producción y Faltantes Visual en Planta** | Consolida las tasas de cumplimiento del plan de turno, los principales cuellos de botella de componentes, los riesgos de desabastecimiento Kanban y las tareas de entrega internas en una sola pantalla de resumen automática. |

---

## Tutorial de Inicio Rápido: Cómo Ejecutar la Planificación de Producción y la Preparación de Materiales en 1 Minuto

No necesita un título en ingeniería industrial ni habilidades avanzadas de Excel para ejecutar la planificación de necesidades de material. Siga este flujo de trabajo de 4 pasos para probar la lógica en la herramienta web gratuita, y luego traslade sus operaciones diarias al libro de trabajo Excel automatizado.

### Paso 1: Configure Sus Reglas Básicas de Planta y de Stock de Seguridad
**Intención de Búsqueda:** *Cómo configurar el stock de seguridad y las reglas de reabastecimiento Kanban en Excel*  
Abra el panel de configuración e ingrese los números básicos de su taller: duración del turno, turnos por día, buffers mínimos de stock de seguridad, umbrales de disparo Kanban y porcentajes de merma permitidos. Cada **cálculo de faltantes MRP** y **alerta de reorden** aguas abajo se actualiza automáticamente según estas reglas.

### Paso 2: Pegue Su Lista de Piezas, Estaciones de Trabajo y Lista de Materiales (BOM)
**Intención de Búsqueda:** *Cómo construir una lista de materiales (BOM) de manufactura y una lista maestra de piezas*  
Ingrese o pegue su catálogo de componentes (números de pieza, fuente de fabricación aguas arriba como corte láser o mecanizado CNC, cantidad de empaque estándar y ubicación del contenedor Kanban) junto con sus **recetas de conjuntos de soldadura** padre-hijo. La plantilla admite de fábrica aproximadamente 500 SKU de piezas individuales y 50 conjuntos padre.

### Paso 3: Ingrese el Programa del Turno de Hoy para Generar Listas Automáticas de Faltantes y Picking
**Intención de Búsqueda:** *Cómo calcular requisitos de material y generar listas de picking de almacén a partir de un programa de producción*  
Seleccione su fecha de producción, turno, estación de soldadura objetivo, número de pieza del ensamblaje y cantidad planificada. El motor de cálculo integrado explota inmediatamente el programa en requisitos de piezas hijas, verifica el **inventario del supermercado Kanban** disponible, resalta los déficits exactos de piezas y construye una **lista de verificación de preparación de carritos** priorizada.

### Paso 4: Registre la Producción Real del Turno y Descargue la Plantilla Excel Reutilizable para Operaciones Diarias
**Intención de Búsqueda:** *Cómo rastrear la producción planificada vs. real y realizar el consumo retroactivo del inventario en Excel*  
Al final del turno, ingrese el número de conjuntos buenos terminados y las piezas desechadas. El modelo deduce automáticamente los materiales consumidos y actualiza su inventario inicial para el turno de mañana.

---

### Convierta un Flujo de Trabajo de Manufactura Complejo en un Hábito de Copiar y Pegar de 1 Minuto

Ejecutar **explosiones de demanda de BOM** multinivel, **cálculos de buffers Kanban**, **emparejamiento de capacidad de carritos** y **consumo retroactivo de merma** desde cero requiere cálculos complejos de cadena de suministro. Sin embargo, **no necesita entender las fórmulas subyacentes ni construir ni una sola regla de hoja de cálculo usted mismo.**

dentro del **Libro de Trabajo Excel de Control de Flujo de Materiales en Planta (.xlsx)** descargable, cada regla de emparejamiento de matriz dinámica, búsqueda cruzada entre pestañas y fórmula de actualización automática ya está preconstruida y bloqueada en su lugar:

1. **Cero Arrastre de Fórmulas Requerido:** Nunca tendrá que hacer doble clic en la esquina de una celda para arrastrar fórmulas hacia abajo. Pegue sus propios números de pieza, lista de BOM y programa diario directamente en las tablas de entrada, y todo el panel se actualiza por sí solo.
2. **Claridad de Decisión en 1 Minuto para Principiantes:** Incluso sin experiencia previa en análisis de datos o control de producción, puede pegar sus números y detectar sus principales cuellos de botella de material en **60 segundos**. En lugar de pasar la temporada pico arreglando celdas de `VLOOKUP` rotas, obtiene retroalimentación inmediata de decisión a nivel ejecutivo para que pueda enfocarse en operar su taller y enviar pedidos a tiempo.
3. **Compra Única vs. Costosas Suscripciones Mensuales de Software:** Los módulos empresariales de ERP y MES cobran miles de dólares en suscripciones anuales recurrentes y tarifas de configuración. Esta plantilla Excel de pago convierte un flujo de trabajo de fábrica caótico en un archivo local estandarizado que compra una vez y reutiliza para siempre en su propia computadora.
4. **100% de Privacidad de Datos Local y Garantía de Devolución del Dinero de 30 Días:** Mantenga sus estructuras de BOM propietarias, números de pieza de proveedores y capacidades de producción completamente fuera de línea en su disco duro local con cero exposición de seguridad en la nube. Cada descarga está protegida por una **garantía incondicional de devolución del dinero de 30 días**—si no simplifica su planificación diaria en planta, solicite un reembolso completo sin complicaciones.

👉 **[Descargue el Libro de Trabajo Excel Completamente Automatizado de MRP en Planta y Planificación de Producción (.xlsx) — Garantía Sin Riesgo de 30 Días](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)**  
*(¿Quiere previsualizar primero el flujo de trabajo? **[Pruebe Aquí el Sandbox Web Gratuito de MRP y Kanban en el Navegador](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/)**)*

---

## La Lógica de Negocio y la Metodología: Guía en Lenguaje Sencillo del Control en Planta y las Fugas Ocultas de Beneficio

La mayoría de los talleres pequeños y medianos pierden dinero en la planta no porque les falten pedidos, sino por **puntos ciegos operativos ocultos** en la forma en que los materiales se mueven desde la fabricación bruta hasta el ensamblaje final.

A continuación se presenta un desglose en lenguaje sencillo de los cinco puntos ciegos de negocio fundamentales que causan entregas incumplidas y mano de obra desperdiciada, junto con los hechos financieros objetivos y cómo la lógica integrada de esta hoja de cálculo los corrige automáticamente:

### 1. El Punto Ciego del "Kit 95% Completo" (Por Qué un Soporte de $2 Que Falta Detiene un Pedido de $5,000)
- **La Realidad Objetiva:** El ensamblaje de manufactura es todo o nada. Si un bastidor soldado requiere 15 piezas metálicas diferentes y 14 de ellas ya están en la estación de trabajo, su capacidad real de terminar ese producto es del **0%, no del 93%**. En la mayoría de los talleres, los gerentes programan los turnos mirando únicamente los pedidos de producto terminado, y descubren demasiado tarde que un solo buje o soporte pequeño está agotado.
- **Cómo Lo Corrige la Lógica de Excel (Traducción de Demanda Basada en BOM):** Cuando escribe una cantidad de ensamblaje planificada en el programa, el libro de trabajo descompone automáticamente ese producto padre en cada pieza hija requerida. Señala el soporte de $2 que falta antes de que asigne un soldador al puesto, evitando que operadores pagados permanezcan inactivos alrededor de un trabajo imposible de construir.

### 2. La Ilusión del "En Stock en el Papel" (Doble Conteo de las Mismas Piezas entre Múltiples Turnos)
- **La Realidad Objetiva:** Una hoja de cálculo de inventario estándar solo le indica el número total de piezas dentro de la planta. Suponga que su hoja dice que tiene `100 placas base cortadas láser` en stock. El Trabajo A del turno de mañana necesita `60 placas`, y el Trabajo B del turno de tarde necesita `60 placas`. Una hoja de cálculo básica le dice que ambos trabajos tienen suficientes piezas (`60 <= 100`), así que libera ambos al piso de planta—haciendo que el turno de tarde se quede sin material a mitad del proceso.
- **Cómo Lo Corrige la Lógica de Excel (Compensación de Inventario Comprometido):** La plantilla resta automáticamente de su saldo físico en estantería las piezas ya prometidas a turnos anteriores o cargadas en carritos activos. Usted ve su **inventario verdadero restante disponible**, eliminando la doble reserva entre turnos y estaciones de trabajo.

### 3. Tratar las Máquinas Aguas Arriba como un Cajero Automático Instantáneo (Cambios de Utillaje de Emergencia y Horas de Máquina Perdidas)
- **La Realidad Objetiva:** Las máquinas aguas arriba como cortadoras láser, prensas punzonadoras CNC y plegadoras requieren tiempo de configuración, cambios de herramental y anidado de chapa. Cuando un supervisor de soldadura descubre un contenedor de piezas vacío a mitad del turno y exige una corrida de emergencia de 10 soportes, el operador de la plegadora tiene que desarmar una configuración de producción activa. En toda la industria, las configuraciones de emergencia no planificadas reducen la capacidad total de máquina en un **15% a 30%**.
- **Cómo Lo Corrige la Lógica de Excel (Reabastecimiento Kanban Basado en Umbrales):** La hoja de cálculo compara la demanda del próximo turno contra sus niveles mínimos de stock de seguridad y clasifica automáticamente la urgencia de reabastecimiento (`Critical`, `Warning`, `Normal`) por tipo de máquina aguas arriba. Los operadores aguas arriba reciben una lista de lotes limpia y priorizada horas antes de que los contenedores lleguen realmente a cero.

### 4. Convertir las Celdas de Soldadura en Bahías de Almacenamiento Desordenadas (Costos Ocultos de Mano de Obra en Búsqueda de Piezas)
- **La Realidad Objetiva:** Cuando los manejadores de almacén empujan kits parciales o palés desorganizados al piso de planta solo para "poner los materiales en movimiento", las celdas de soldadura de alto valor se convierten en carriles de almacenamiento congestionados. Los soldadores calificados terminan gastando **30 a 45 minutos por turno** caminando por la planta buscando piezas faltantes o apartando ensamblajes a medio terminar.
- **Cómo Lo Corrige la Lógica de Excel (Preparación de Kits de Carritos con Control de Acceso):** La plantilla vincula las listas de picking directamente a los carritos de entrega físicos y a los límites de los contenedores. Un carrito se marca automáticamente como `Blocked` o `Partly Kitted` hasta que cada pieza requerida esté disponible en cantidades completas de empaque, garantizando que solo kits 100% listos para construir lleguen a la línea de producción.

### 5. Merma Invisible que Corrompe Silenciosamente el Programa de Mañana (Deriva Contable-Física del Inventario)
- **La Realidad Objetiva:** Toda fábrica produce ocasionalmente merma, piezas combadas o rechazos de configuración. Cuando un soldador desecha 4 soportes y toma silenciosamente 4 piezas adicionales del contenedor Kanban sin registrarlas, su hoja de cálculo queda inexacta en 4 unidades. En un solo mes, la merma no registrada crea un masivo "inventario fantasma"—su computadora dice que tiene piezas en la estantería cuando el contenedor está completamente vacío.
- **Cómo Lo Corrige la Lógica de Excel (Consumo Retroactivo Automatizado de Producción y Merma):** Al final de cada turno, usted ingresa tanto las unidades buenas completadas como las piezas desechadas en el registro. El libro de trabajo deduce automáticamente el uso teórico de BOM *más* la cantidad exacta de merma de su inventario en vivo, manteniendo sus números digitales anclados a la realidad física sin recuentos manuales diarios.

---

## Comparación: Hojas de Cálculo Manuales Ad-Hoc vs. Sistema Excel de MRP en Planta Automatizado

| Dimensión Operativa | Hojas de Inventario Manuales (Fórmulas Rotas y Suposiciones) | Este Sistema Excel de MRP y Preparación de Kits Automatizado (Lógica Dinámica Preconstruida) |
| :--- | :--- | :--- |
| **Configuración y Mantenimiento de Fórmulas** | **Horas de Depuración Manual de `VLOOKUP`:** Insertar filas nuevas o números de pieza rompe las referencias de celda, lo que exige arrastrar fórmulas constantemente y hacer correcciones manuales. | **Pegar y Funcionar Sin Mantenimiento:** Construido con fórmulas nativas de matriz dinámica de Excel que se expanden y recalculan automáticamente en el momento en que pega sus datos. |
| **Detección de Faltantes de Componentes** | **Paradas de Línea a Mitad de Turno:** Las órdenes de trabajo parecen listas a nivel de ensamblaje superior, y las piezas hijas faltantes solo las descubren los operadores durante la configuración del utillaje. | **Explosión y Compensación de BOM Antes del Turno:** Los programas de turno se desglosan automáticamente en requisitos individuales de piezas, exponiendo los déficits exactos de piezas antes de que el trabajo llegue al piso de planta. |
| **Seguimiento de Ubicación del Trabajo en Proceso (WIP)** | **Ceguera de Stock de una Sola Columna:** Las piezas parecen disponibles en el inventario total de la planta, mientras los manejadores de material pierden tiempo buscando entre racks, pasillos y puestos. | **Visibilidad de Ubicación Física Multietapa:** Separa claramente el stock retenido en **supermercados Kanban**, cargado en **carritos de entrega** o preparado en **estaciones de soldadura**. |
| **Programación de Fabricación Aguas Arriba** | **Urgencias Verbales y Bombeo de Incendios:** Las celdas de corte láser, plegado de chapa y mecanizado CNC son interrumpidas por notas urgentes en papel y solicitudes presenciales. | **Señales Automatizadas de Reabastecimiento por Extracción:** Los algoritmos de faltantes categorizan las prioridades de reorden (`Normal`, `Warning`, `Critical`) y agrupan las tareas por centro de trabajo aguas arriba. |
| **Preparación de Kits junto a la Línea y Despacho de Carritos** | **Kits Parciales y Congestión en Planta:** Los carritos llegan a las estaciones con componentes faltantes, causando acumulaciones de WIP y tiempo de cambio de utillaje desperdiciado. | **Compuerta Estricta de Preparación de Kits:** Los manifiestos de picking aplican las cantidades de empaque estándar (SPQ) y marcan los kits del carrito como `Ready`, `Partly Kitted` o `Blocked` antes del despacho. |
| **Precisión de Merma e Inventario** | **Deriva de Inventario Fantasma:** Los saldos de stock se desincronizan de los contenedores físicos en cuestión de días debido a merma de soldadura no registrada, reprocesos y sustituciones en planta. | **Consumo Retroactivo Automatizado por Turno:** Los registros de finalización de turno y de merma alimentan directamente el motor de consumo, actualizando los saldos netos del supermercado en tiempo real. |
| **Costo y Seguridad de Datos** | **Alto Costo Oculto de Mano de Obra o SaaS Costoso:** O desperdicia más de 10 horas por semana arreglando hojas manuales o paga miles al año por puestos de ERP/MES en la nube. | **Compra Única y 100% de Privacidad Local:** Pague una vez y reutilice para siempre en su escritorio local con una **garantía de devolución del dinero de 30 días** y cero exposición de datos en la nube. |

---

## Para Quién Es Esto: Roles de Manufactura, Escenarios de Búsqueda y Casos de Uso de Talleres de Trabajo

### Mapeo de Rol a Flujo de Trabajo (Encuentre Su Caso de Uso Exacto)

- **Propietarios de Pequeñas Fábricas, Gerentes de Talleres de Trabajo y Planificadores Primerizos** que buscan una **plantilla Excel fácil de usar de inventario y seguimiento de producción de manufactura**: Deje de depender de pizarras blancas y de la memoria. Pegue sus pedidos y deje que la hoja de cálculo preconstruida le diga exactamente qué fabricar y preparar en kits hoy.
- **Planificadores de Producción, Programadores Maestros y Despachadores de Planta** que buscan una **plantilla Excel de programación de producción diaria y rastreador de capacidad por turno**: Equilibre los objetivos diarios de ensamblaje entre celdas de soldadura robotizadas y puestos manuales TIG/MIG mientras verifica la disponibilidad del 100% de los componentes antes de liberar órdenes de trabajo.
- **Planificadores de Material, Controladores de Inventario y Compradores** que necesitan una **plantilla Excel ligera de MRP y calculadora de explosión de BOM multinivel**: Traduzca los programas de ensamblajes padre en demanda exacta de piezas hijas, rastree la cobertura de stock de seguridad y genere prioridades claras de reabastecimiento aguas arriba en segundos.
- **Supervisores de Almacén, Ingenieros Lean y Equipos de Logística Interna (Milk-Run)** que buscan una **hoja de cálculo de inventario Kanban y lista de verificación de preparación de carritos junto a la línea**: Estandarice las ubicaciones de contenedores del supermercado, los tamaños de empaque de contenedores y los estados de carga de carritos para que los manejadores de material entreguen kits completos en el punto de uso.
- **Jefes de Soldadura, Líderes de Fabricación y Supervisores de Turno** que requieren una **hoja de seguimiento de trabajo en proceso (WIP) y panel de faltantes en planta**: Verifique la preparación de kits de estación en 1 minuto durante los relevos de turno y registre la producción real más la merma sin tocar fórmulas complejas.
- **Ingenieros Industriales y Analistas de Operaciones de Manufactura** que buscan un **libro de trabajo de control de producción personalizable con matrices dinámicas de Microsoft 365**: Despliegue un sistema de decisión local, transparente y sin macros (`no VBA`) que cierre la brecha entre las exportaciones semanales del ERP y la ejecución diaria en planta.

### Escenarios Comunes de Fábrica en los Que Esta Plantilla Ahorra Horas Cada Semana

1. **Está Cansado del Exceso de Software ERP/MRP:** Su empresa o no puede justificar una implementación de ERP/MES de más de $20,000, o su ERP existente es demasiado rígido para manejar cambios de programa de soldadura turno a turno y la preparación de kits de carritos en la planta.
2. **Sus Pedidos de Temporada Alta Crecen Más Rápido que Su Hoja de Cálculo:** El volumen de pedidos va en aumento, y verificar manualmente 50 ensamblajes contra 500 piezas individuales cortadas láser, dobladas y mecanizadas está causando errores humanos costosos.
3. **Necesita una Herramienta Sin Conexión y Sin Macros que TI No Bloquee:** Debido a que el libro de trabajo usa **funciones nativas de matriz dinámica de Excel 2021+ / Microsoft 365** con cero macros VBA, se abre sin problemas en computadoras corporativas estándar sin ventanas emergentes de seguridad ni requisitos de inicio de sesión en la nube.

---

## Industrias de Manufactura Objetivo y Alcance del Sistema

### Entornos de Manufactura Ideales
Esta plantilla está diseñada específicamente para la **manufactura discreta de Alta Mezcla, Bajo Volumen (HMLV)**, la fabricación de metal a medida y los talleres de ensamblaje por lotes, incluyendo:
- **Talleres de Trabajo de Soldadura y Fabricación de Metal** (Celdas de Soldadura MIG, TIG, por Puntos y Robotizadas)
- **Talleres de Fabricación de Chapa Metálica** (Corte Láser, Punzonado con Torreta, Plegado con Prensa Plegadora CNC)
- **Plantas de Subensamblaje de Maquinaria Pesada, Agrícola y de Construcción**
- **Proveedores Automotrices Tier-2 / Tier-3 de Estampado, Bastidores y Soportes Estructurales**
- **Fabricantes de Carcasas Industriales, Racks, Remolques y Acero Estructural a Medida**

### Alcance del Sistema y Límites Operativos
Para mantener el libro de trabajo rápido, transparente e inmediatamente utilizable por cualquiera desde el primer día, está **intencionalmente enfocado**:
- **Lo Que Es:** Un libro de trabajo de ejecución táctica listo para usar que conecta los programas de turnos diarios, los cálculos de piezas de BOM multinivel, los saldos de contenedores Kanban, las listas de preparación de kits de carritos y el consumo retroactivo por turno dentro de Microsoft Excel.
- **Lo Que No Es:** No es un libro mayor contable, ni un reemplazo completo de ERP empresarial (como SAP o NetSuite), ni un controlador automatizado de robots PLC/AGV, ni una plataforma SCADA de sensores de máquina en tiempo real.

---

## Sobre la Arquitectura y Theseus Workshop

La mayoría de las hojas de cálculo de fábrica fallan porque se construyen como cementerios de datos estáticos donde los usuarios dedican más tiempo a reparar celdas dañadas que a tomar decisiones operativas.

Este proyecto es desarrollado por **[Theseus Workshop](https://theseusworkshop.com?utm_source=github&utm_medium=GitHub%20README)** bajo una estricta filosofía de ingeniería: **"Utilidad pura. Cero relleno."** Cada plantilla está diseñada como un sistema de soporte a decisiones autosuficiente y de baja sobrecarga, regido por una pregunta práctica:

> *"¿Qué números operativos exactos deben conectarse ahora mismo para que un propietario de negocio o un planificador pueda pegar sus datos y tomar la decisión correcta de programación, compra o precios en menos de 60 segundos?"*

Al vincular **Planes de Producción por Turno → Demanda de BOM Multinivel → Inventario del Supermercado Kanban → Logística de Preparación de Carritos → Consumo Retroactivo de Producción Real y Merma** en un único bucle de cálculo automatizado, este kit de herramientas brinda a su taller visibilidad de nivel empresarial dentro de un archivo familiar de Excel que le pertenece para siempre.

### Explore Más Kits de Herramientas de Decisiones de Negocio Listos para Usar y Plantillas Excel

¿Busca más modelos de Microsoft Excel automatizados y sin VBA para manufactura, estimación de costos, control de flujo de caja y gestión de operaciones?

- 🛒 **[Obtenga Esta Plantilla Excel de Control de Flujo de Materiales en Planta y MRP (.xlsx) en Gumroad (Garantía de Devolución de 30 Días)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)**
- 🌐 **[Visite la Tienda Oficial de Theseus Workshop (theseusworkshop.com) para Explorar Todos los Kits de Herramientas Excel de Decisiones de Negocio, Estimadores de Costos y Paneles Financieros](https://theseusworkshop.com?utm_source=github&utm_medium=GitHub%20README)**
- 🖥️ **[Pruebe la Demostración Web Interactiva Gratuita del Sistema de Control de Flujo de Materiales en Planta](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/)**


## Detalles Técnicos

<details>
<summary>Para revisores técnicos, practicantes de Excel y colaboradores de manufactura</summary>

<details>
<summary><strong>Arquitectura del Libro de Trabajo</strong></summary>

El libro de trabajo propuesto contiene cuatro módulos funcionales y diez hojas de cálculo. Cada hoja tiene una responsabilidad definida, separando configuración, datos maestros, planificación, cálculos, ejecución logística, retroalimentación y monitoreo.

| Módulo | Hoja de Cálculo | Responsabilidad |
|---|---|---|
| Sistema y Datos Maestros | `01_SYS` | Parámetros operativos centrales, umbrales, diccionarios de validación y ajustes compartidos |
| Sistema y Datos Maestros | `02_MST_Part` | Datos maestros de piezas individuales, fuente de fabricación, ubicación en supermercado, embalaje y parámetros de stock |
| Sistema y Datos Maestros | `03_MST_BOM` | Relaciones ensamblaje de soldadura-pieza y consumo estándar de componentes |
| Sistema y Datos Maestros | `04_MST_Station` | Definiciones de estaciones robotizadas/manuales y asignaciones de carritos |
| Planificación y Motor | `05_PLN_Shift` | Programa de producción a nivel de turno |
| Planificación y Motor | `06_ENG_Demand` | Explosión de BOM y demanda de material a nivel de componente |
| Ejecución y Logística | `07_INV_Super` | Inventario del supermercado, consumo, faltantes y reabastecimiento |
| Ejecución y Logística | `08_LOG_Trolley` | Carga de carritos, despacho, entrega y preparación de kits |
| Retroalimentación y Control | `09_ACT_Report` | Producción real, merma e informes de producción |
| Retroalimentación y Control | `10_DSH_Board` | Cumplimiento de producción, preparación de estaciones, exposición a faltantes y monitoreo logístico |

<details>
<summary><strong>Flujo de Datos de Extremo a Extremo</strong></summary>

```text
01_SYS: Parameters and Thresholds
                  |
                  v
02_MST_Part ---- 03_MST_BOM ---- 04_MST_Station
                  |
                  v
           05_PLN_Shift
                  |
                  v
           06_ENG_Demand
             /          \
            v            v
     07_INV_Super   08_LOG_Trolley
            |            |
            v            v
     Upstream Supply   Welding Stations
                         |
                         v
                  09_ACT_Report
                         |
                         v
                  Inventory Recalculation
                         |
                         v
                  10_DSH_Board
```

El diagrama representa el flujo de control previsto. La conciliación real del inventario depende de las fórmulas implementadas, los registros de transacciones mantenidos por los operadores y la validación de los datos de origen.

</details>

</details>

<details>
<summary><strong>Principios de Diseño Fundamentales</strong></summary>

<details>
<summary><strong>1. Separar entradas, cálculos y salidas</strong></summary>

Los datos maestros y las entradas operativas se mantienen en hojas de cálculo designadas. Las hojas de cálculo derivan los requisitos de material y los estados de control. Las hojas de monitoreo presentan el panorama operativo resultante.

Esta separación facilita identificar si un problema se origina en los datos de origen, en un cálculo o en un proceso de ejecución física.

</details>

<details>
<summary><strong>2. Usar Tablas de Excel para registros expansibles</strong></summary>

Las listas de transacciones operativas deben usar Tablas de Excel (`ListObject`) con nombres de tabla estables como `tbl_Part`, `tbl_BOM`, `tbl_ShiftPlan`, `tbl_Inventory` y `tbl_ProductionReport`.

Las referencias estructuradas son preferibles para la agregación a nivel de fila porque se expanden con la tabla. Los nombres anteriores son convenciones de implementación recomendadas; la especificación no establece que un libro de trabajo terminado ya contenga estos nombres de tabla exactos.

</details>

<details>
<summary><strong>3. Usar matrices dinámicas para listas generadas</strong></summary>

Las funciones de Microsoft 365 como `FILTER`, `UNIQUE`, `SORT` y `XLOOKUP` pueden generar y transformar listas sin copiar manualmente fórmulas en cada fila.

Las fórmulas de matriz dinámica deben ubicarse donde sus rangos de derrame permanezcan despejados. Las funciones de agregación escalar como `SUMIFS` y `COUNTIFS` deben usar referencias estructuradas cuando corresponda.

</details>

<details>
<summary><strong>4. Centralizar los parámetros operativos</strong></summary>

Los umbrales, buffers y otras reglas de negocio deben mantenerse en la capa de configuración en lugar de duplicarse como constantes sin explicación por todo el libro de trabajo.

El diseño suministrado asigna parámetros clave a `01_SYS!D4:D13`. Las fórmulas deben referenciar esos valores configurados de manera consistente, y los cambios de parámetros deben probarse contra los cálculos afectados.

</details>

<details>
<summary><strong>5. Preferir excepciones explícitas a suposiciones silenciosas</strong></summary>

Los registros de piezas faltantes, las relaciones BOM inválidas, los datos de ubicación incompletos y el material no disponible deben producir estados de excepción reconocibles.

Un registro faltante o inválido no debe interpretarse silenciosamente como disponibilidad confirmada. Un estado operativo debe distinguir un cero real de un valor que no puede calcularse de manera confiable.

</details>

</details>

<details>
<summary><strong>Módulo 1 — Sistema y Datos Maestros</strong></summary>

<details>
<summary><strong>Hoja `01_SYS` — Parámetros y Umbrales</strong></summary>

Esta hoja de cálculo define la configuración compartida utilizada por los cálculos posteriores.

| Celda | Parámetro | Predeterminado en la especificación | Propósito operativo |
|---|---|---:|---|
| `D4` | `CFG_CURR_SYM` | `¥` | Símbolo de presentación de moneda |
| `D5` | `CFG_QTY_UNIT` | `PCS` | Unidad base de cantidad de material |
| `D6` | `CFG_SHIFTS_PER_DAY` | `2` | Número de turnos programados por día |
| `D7` | `CFG_SHIFT_HOURS` | `8.0` | Horas estándar por turno |
| `D8` | `CFG_SAFE_BUFFER_PCT` | `0.15` | Buffer general de stock de seguridad |
| `D9` | `CFG_REPL_EMERG_DAYS` | `0.50` | Umbral de reabastecimiento de emergencia |
| `D10` | `CFG_KIT_FULL_PCT` | `1.00` | Umbral de kit completamente listo |
| `D11` | `CFG_KIT_WARN_PCT` | `0.80` | Umbral de advertencia de preparación parcial |
| `D12` | `CFG_TROLLEY_MAX_SNP` | `12` | Máximo de cajas de embalaje estándar por carrito |
| `D13` | `CFG_SCRAP_TOLERANCE` | `0.02` | Tolerancia de tasa de merma |

Estos son valores predeterminados de referencia de la especificación de implementación, no estándares universales de manufactura. Deben validarse contra el embalaje real, el consumo, los plazos de reabastecimiento y las prácticas del taller antes del uso operativo.

Los diccionarios de validación especificados para esta hoja incluyen:

- Fuentes de fabricación: Láser, Plegado y Mecanizado.
- Tipos de estación: Robot y Manual.
- Estados de reabastecimiento: Normal, Replenish y Urgent.
- Estados de carrito: Loading, In-Transit y Delivered.

La especificación también define salidas de visualización y validación de parámetros en las columnas F y G.

**Fórmula ilustrativa de matriz dinámica — etiquetas de visualización de parámetros**

```excel
=C4:C13 & " : " & D4:D13 & " (" & E4:E13 & ")"
```

Ingrese la fórmula en `F4` en una hoja compatible con Microsoft 365 con el área de derrame prevista despejada.

**Nota de implementación:** La fórmula de validación de muestra de la especificación fuente usa expresiones de matriz con `AND` y `ROW`. Esas expresiones deben revisarse para un comportamiento compatible con matrices antes del despliegue. Una fórmula que devuelve un estado de validación incorrecto no es un control adecuado solo por ser dinámica.

</details>

<details>
<summary><strong>Hoja `02_MST_Part` — Datos Maestros de Piezas Individuales</strong></summary>

El maestro de piezas mantiene los atributos necesarios para identificar, localizar y reabastecer cada componente individual.

| Campo | Propósito |
|---|---|
| ID de Pieza | Identificador único de pieza |
| Nombre de Pieza | Descripción legible para el negocio |
| Fuente de Fabricación | Láser, Plegado o Mecanizado |
| Especificación / Material | Especificación física para identificación |
| Unidad | Unidad de cantidad estándar |
| Ubicación Predeterminada en Supermercado | Dirección de almacenamiento físico |
| Número Estándar de Paquete (SNP) | Cantidad de embalaje estándar |
| Consumo Diario Promedio | Línea base de consumo |
| Stock de Seguridad | Buffer de stock calculado redondeado a un múltiplo de embalaje |
| Stock Máximo | Techo de inventario de referencia |
| Estado de Activación | Indicador de completitud de datos maestros |

La implementación de referencia permite aproximadamente 500 piezas individuales. Los identificadores propuestos `P-1001` a `P-1500` son ejemplos ilustrativos más que un requisito de usar ese esquema de numeración.

**Cálculo del stock de seguridad**

```excel
=IF(A4:A503="","",
   CEILING.MATH(
      H4:H503*(1+'01_SYS'!$D$8),
      G4:G503
   )
)
```

Esta fórmula calcula una línea base de consumo con buffer y redondea el resultado hacia arriba a un múltiplo de la cantidad de embalaje estándar.

La especificación define el stock máximo como el doble del stock de seguridad calculado:

```excel
=IF(A4:A503="","",I4:I503*2)
```

**Consideraciones importantes de implementación**

- La línea base del stock de seguridad debe tener una base temporal claramente definida. La fórmula suministrada usa el consumo diario promedio pero no lo multiplica explícitamente por el plazo de reabastecimiento. Por lo tanto, el buffer no debe interpretarse como una política de inventario completa basada en el plazo de entrega.
- `SNP` debe ser positivo antes de usarse como significancia de redondeo.
- Los datos de consumo faltantes deben distinguirse del consumo cero genuino.
- Una verificación de activación debe validar el identificador de pieza, la categoría de fuente, la ubicación y los atributos de embalaje antes de que la pieza sea usada por los cálculos de planificación.

La fórmula de activación de muestra de la especificación es:

```excel
=IF(A4:A503="","",
   IF(
      OR(ISBLANK(F4:F503),ISBLANK(G4:G503),G4:G503<=0),
      "⚠️ Incomplete Master Data",
      "✅ ACTIVE"
   )
)
```

Esto ilustra la lógica de validación prevista. Debido a que `OR` no evalúa independientemente cada fila de una matriz, la fórmula debe adaptarse a una implementación por filas o basada en `MAP` antes de usarse como control de validación de producción.

</details>

<details>
<summary><strong>Hoja `03_MST_BOM` — Lista de Materiales de Ensamblajes de Soldadura</strong></summary>

La BOM establece qué piezas individuales consume cada ensamblaje de soldadura.

| Campo | Propósito |
|---|---|
| ID de Ensamblaje | Identificador del ensamblaje de soldadura |
| Nombre de Ensamblaje | Descripción del ensamblaje |
| ID de Pieza | Identificador del componente |
| Nombre de Pieza | Obtenido del maestro de piezas |
| Fuente de Fabricación | Obtenida del maestro de piezas |
| Ubicación de Almacenamiento Predeterminada | Obtenida del maestro de piezas |
| Cantidad por Ensamblaje | Cantidad estándar de la pieza consumida por ensamblaje |
| Validación de Relación | Confirma el registro de la pieza y una cantidad de consumo positiva |

El alcance de referencia es de aproximadamente 50 ensamblajes de soldadura, con potencialmente muchas filas de BOM por ensamblaje. La BOM es una tabla de relaciones, no un resumen de una fila por ensamblaje.

**Obtener el nombre de la pieza**

```excel
=IF(C4:C1500="","",
   XLOOKUP(
      C4:C1500,
      '02_MST_Part'!A4:A503,
      '02_MST_Part'!B4:B503,
      "❌ Unknown Part ID"
   )
)
```

**Obtener la fuente de fabricación**

```excel
=IF(C4:C1500="","",
   XLOOKUP(
      C4:C1500,
      '02_MST_Part'!A4:A503,
      '02_MST_Part'!C4:C503,
      "❌ Missing Manufacturing Source"
   )
)
```

**Validar la relación BOM**

```excel
=IF(A4:A1500="","",
   IF(
      ISNUMBER(MATCH(C4:C1500,'02_MST_Part'!A4:A503,0)),
      IF(G4:G1500>0,"✅ Valid BOM","❌ Quantity Must Be Positive"),
      "❌ Part Not Registered"
   )
)
```

Los controles previstos son sencillos: cada pieza referenciada debe existir y cada relación BOM activa debe especificar una cantidad de consumo positiva.

Para un libro de trabajo desplegado, estas fórmulas deben probarse en cuanto a comportamiento de matriz, claves duplicadas y registros incompletos. Un maestro de ensamblajes separado o un rango de búsqueda de ensamblajes distinto es preferible a buscar un nombre de ensamblaje contra filas de BOM repetidas cuando no se puede garantizar de otro modo la consistencia de los datos.

</details>

<details>
<summary><strong>Hoja `04_MST_Station` — Estaciones y Configuración de Carritos</strong></summary>

Esta hoja mapea las estaciones de producción a los recursos logísticos internos que las sirven.

| Campo | Propósito |
|---|---|
| ID de Estación | Identificador único de estación |
| Nombre de Estación | Descripción legible de la estación |
| Tipo de Estación | Robot o Manual |
| ID de Carrito Predeterminado | Carrito de transporte de material asignado |
| Capacidad del Carrito | Máximo de cajas de embalaje estándar por carrito |
| Estado de Estación | Indicador de planificación y preparación |
| Disponibilidad del Carrito | Estado actual registrado del carrito |

El maestro de estaciones propuesto cubre aproximadamente 15–20 estaciones, dependiendo del taller real.

**Obtener el último estado registrado del carrito**

```excel
=IF(D4:D20="","",
   XLOOKUP(
      D4:D20,
      '08_LOG_Trolley'!$D$4:$D$100,
      '08_LOG_Trolley'!$H$4:$H$100,
      "🟢 Available",
      0,
      -1
   )
)
```

El argumento de búsqueda inversa solicita el último registro coincidente en el rango especificado. Solo es significativo si la clave de búsqueda y las convenciones de registro de eventos son confiables.

Para uso en producción, el estado actual de un carrito debe derivarse de un historial de transacciones definido o de un único registro de estado autoritativo. Una simple búsqueda de última coincidencia no sustituye la validación de asignaciones superpuestas, devoluciones no confirmadas o identificadores de carrito duplicados.

</details>

</details>

<details>
<summary><strong>Módulo 2 — Motor de Planificación y Demanda</strong></summary>

<details>
<summary><strong>Hoja `05_PLN_Shift` — Plan de Producción por Turno</strong></summary>

Esta hoja de cálculo es el punto de entrada operativo del programa de producción.

| Campo | Propósito |
|---|---|
| Fecha de Producción | Fecha de ejecución planificada |
| ID de Turno | Designación del turno |
| ID de Estación | Estación de soldadura objetivo |
| ID de Ensamblaje | Ensamblaje de soldadura planificado |
| Cantidad Planificada | Producción objetivo del ensamblaje |
| Estado del Plan | Planificado, Liberado o Completado |
| Nombre de Ensamblaje | Descripción del ensamblaje obtenida |
| Tipo de Estación | Clasificación de estación obtenida |
| Tipos de Pieza Requeridos | Número de componentes BOM distintos |
| Cantidad Total de Piezas | Cantidad total de componentes requerida |
| Clave de Plan Única | Clave compuesta para verificaciones de planes duplicados |

Una clave de plan puede combinar la fecha de producción, el turno, la estación y el ensamblaje. Sin embargo, la definición de negocio debe determinar si se prohíben múltiples líneas para el mismo ensamblaje y estación o si deben agregarse. Una clave compuesta por sí sola no impone esa política.

**Obtener el nombre del ensamblaje**

La especificación fuente proporciona un patrón de búsqueda basado en el identificador del ensamblaje. En una implementación de producción, use un maestro de ensamblajes único como fuente de búsqueda en lugar de depender de un identificador de ensamblaje repetido en una tabla de relaciones BOM.

```excel
=IF(D4:D100="","",
   XLOOKUP(
      D4:D100,
      AssemblyMaster[Assembly ID],
      AssemblyMaster[Assembly Name],
      "❌ Unknown Assembly"
   )
)
```

`AssemblyMaster` es un nombre de tabla recomendado para este patrón de implementación. Debe crearse y poblarse antes de poder usar la fórmula.

Las validaciones de planificación deben rechazar o marcar:

- Identificadores de estación desconocidos.
- Identificadores de ensamblaje desconocidos.
- Cantidades planificadas no positivas.
- Identificadores de turno inválidos.
- Planes duplicados o en conflicto según la política de programación elegida.
- Planes cuyo BOM requerido esté incompleto o sea inválido.

</details>

<details>
<summary><strong>Hoja `06_ENG_Demand` — Motor de Demanda de Material</strong></summary>

El motor de demanda traduce los planes de producción a nivel de ensamblaje en requisitos de piezas individuales.

Su secuencia de cálculo es:

1. Leer los registros válidos del plan de producción.
2. Seleccionar las filas de BOM aplicables para cada ensamblaje planificado.
3. Multiplicar las cantidades de ensamblaje planificadas por la cantidad estándar de cada pieza por ensamblaje.
4. Retener el contexto de fecha, turno, estación, ensamblaje y pieza para cada registro de demanda.
5. Agregar los requisitos cuando la vista de control de inventario necesita un total a nivel de pieza.
6. Comparar la demanda con la medida de inventario disponible definida.
7. Marcar los faltantes y exponer los resultados a los flujos de trabajo de reabastecimiento y logística.

Para una cantidad de ensamblaje planificada \(Q_a\), y un consumo estándar de componente \(B_{a,p}\), la demanda bruta de la pieza \(p\) es:

\[
D_p=\sum_a Q_a B_{a,p}
\]

La sumación se aplica al alcance del plan de producción seleccionado. Si el alcance es un turno y una estación, solo los planes que pertenecen a ese turno y estación deben contribuir al resultado.

**Patrón de cálculo ilustrativo**

```excel
=PlannedAssemblyQty*QtyPerAssembly
```

Para un libro de trabajo real, el motor de demanda debe usar una relación explícita entre los registros del plan y las filas de BOM. Una búsqueda directa es insuficiente cuando un ensamblaje contiene múltiples piezas componentes.

El motor debe conservar suficiente detalle para responder cuatro preguntas separadas:

- ¿Qué pieza se requiere?
- ¿Cuántas unidades se requieren?
- ¿Qué turno y estación crean el requisito?
- ¿Qué ensamblaje y relación BOM generaron la demanda?

Este detalle es esencial cuando la misma pieza individual es compartida por varios ensamblajes o estaciones de producción.

**La demanda bruta no es lo mismo que la demanda neta de reabastecimiento.** La demanda bruta representa las cantidades de componentes implícitas en el plan de producción. El reabastecimiento neto también debe considerar la posición de stock definida, el material ya asignado a otros requisitos, las cantidades entrantes confirmadas y cualquier consumo aprobado o ajuste de inventario.

La ecuación exacta de disponibilidad y sus salvaguardas se tratan en la especificación de la capa de ejecución en la Parte 3.

</details>

</details>

<details>
<summary><strong>Módulo 3 — Inventario de Supermercado y Ejecución Logística</strong></summary>

<details>
<summary><strong>Hoja `07_INV_Super` — Monitoreo del Inventario del Supermercado</strong></summary>

Esta hoja consolida la posición de material y traduce los faltantes en señales de reabastecimiento.

| Columna | Campo | Propósito |
|---|---|---|
| A | ID de Pieza | Identificador de la pieza individual |
| B | Nombre de Pieza | Descripción legible de la pieza |
| C | Fuente de Fabricación | Láser, Plegado o Mecanizado |
| D | Stock Inicial | Inventario arrastrado |
| E | Cantidad Recibida | Recepciones de material aguas arriba |
| F | Consumo Acumulado | Consumo de material derivado de los informes de producción |
| G | Stock Físico Disponible | Inventario físico registrado actual |
| H | Stock Reservado / Entrante | Inventario asociado con reservas o movimientos entrantes, según lo defina la implementación |
| I | Stock Neto Disponible | Inventario disponible para el cálculo de planificación relevante |
| J | Cantidad Requerida | Referencia de demanda para el alcance de planificación seleccionado |
| K | Cantidad de Faltante | Déficit de material calculado |
| L | Estado de Reabastecimiento | Normal, Replenish o Urgent |
| M | Cantidad de Reabastecimiento Sugerida | Cantidad recomendada alineada al embalaje |
| N | Ajuste de Recuento Físico | Corrección de stock aprobada |

La especificación distingue el inventario físico del inventario neto disponible. Esa distinción es esencial: el material ya comprometido con un requisito de producción no debe tratarse como libremente disponible para satisfacer otro requisito.

**Inventario físico disponible**

La ecuación de stock prevista es:

\[
\text{On-hand}=\text{Opening Stock}+\text{Receipts}+\text{Adjustments}-\text{Consumption}
\]

**Inventario neto disponible**

El tratamiento exacto de las cantidades entrantes y reservadas debe definirse de manera consistente. Un modelo de control recomendado es:

\[
\text{Net Available}
=
\text{On-hand}
-\text{Reservations}
+\text{Eligible Confirmed Inbound}
\]

Las cantidades entrantes deben incluirse solo cuando la política operativa permita explícitamente contarlas hacia la disponibilidad. Las recepciones no confirmadas no deben tratarse como stock físicamente recibido.

**Cálculo del faltante**

Para una cantidad requerida \(R\) y una cantidad disponible \(A\):

\[
\text{Shortage}=\max(0,R-A)
\]

Esta es una relación de planificación, no una política completa de reabastecimiento. Los requisitos de stock de seguridad, la demanda futura y las asignaciones de material deben considerarse por separado al determinar la cantidad final de reabastecimiento.

**Estado de Reabastecimiento**

La configuración de referencia usa tres estados:

| Estado | Significado operativo |
|---|---|
| `Normal` | Ninguna intervención de reabastecimiento está indicada actualmente por la regla configurada |
| `Replenish` | El inventario ha cruzado el umbral de reabastecimiento definido |
| `Urgent` | Una condición de faltante crítico requiere atención inmediata |

El umbral de emergencia está configurado en `01_SYS!D9`. El disparador exacto debe conectarse a una base temporal claramente definida y una tasa de consumo. El valor de referencia de `0.50` no debe tratarse como una regla universal de emergencia sin validar su unidad y significado operativo.

**Cantidad de Reabastecimiento Sugerida**

La especificación propone redondear el reabastecimiento a un múltiplo de embalaje estándar y considerar tanto la cantidad requerida como el stock de seguridad.

```excel
=LET(
   safeStock,
      XLOOKUP(
         A4,
         '02_MST_Part'!$A$4:$A$503,
         '02_MST_Part'!$I$4:$I$503,
         0
      ),
   snp,
      XLOOKUP(
         A4,
         '02_MST_Part'!$A$4:$A$503,
         '02_MST_Part'!$G$4:$G$503,
         1
      ),
   rawNeed,
      MAX(0,(J4+safeStock)-(I4+E4)),
   IF(rawNeed>0,CEILING.MATH(rawNeed,snp),0)
)
```

Este es un patrón de fórmula de referencia, no una fórmula lista para usar verificada para cada diseño de stock. Antes del despliegue, confirme si la columna E representa recepciones ya incluidas en la columna I. Si la misma cantidad entrante se cuenta dos veces, la recomendación de reabastecimiento quedará subestimada.

Una implementación de producción también debe distinguir recepciones físicas, cantidades entrantes elegibles, reservas y ajustes de inventario en lugar de depender de campos de stock ambiguos.

</details>

<details>
<summary><strong>Hoja `08_LOG_Trolley` — Carga de Carritos y Tareas de Entrega</strong></summary>

Esta hoja de cálculo convierte los requisitos de material en tareas logísticas internas accionables.

| Campo | Propósito |
|---|---|
| ID de Tarea | Identificador único de tarea de entrega |
| ID de Turno | Turno de producción objetivo |
| ID de Estación | Destino de entrega |
| ID de Carrito | Carrito de transporte asignado |
| ID de Pieza | Material entregado |
| Carga de Cantidad | Cantidad planificada para la tarea |
| Estado del Kit | Ready, Partly o Blocked |
| Estado de Tarea | Loading, In-Transit o Delivered |
| Confirmación de Despacho | Confirmación de carga física y salida |
| Hora de Confirmación de Entrega | Hora de llegada registrada |
| Personal de Entrega | Operador responsable |
| Advertencia de Capacidad | Verificación de capacidad de embalaje del carrito |

**Identificador de tarea**

```excel
=IF(B4:B1000="","",
   "TSK-"&TEXT(ROW(A4:A1000)-3,"0000")
)
```

El patrón de referencia genera un identificador formateado basado en la fila de la hoja. Para una trazabilidad duradera, use una clave de tarea única que no se reutilice después de ordenar, eliminar o reconstruir la lista de tareas.

**Asignar el carrito predeterminado**

```excel
=IF(C4:C1000="","",
   XLOOKUP(
      C4:C1000,
      '04_MST_Station'!$A$4:$A$20,
      '04_MST_Station'!$D$4:$D$20,
      "TR-DEFAULT"
   )
)
```

Un identificador de carrito alternativo no debe interpretarse como una asignación física confirmada. Los mapeos desconocidos de estación a carrito deben producir una excepción visible y requerir resolución antes del despacho.

**Preparación del kit**

La especificación suministrada define la preparación completa al 100% y un umbral de advertencia al 80%.

```excel
=LET(
   availStock,
      XLOOKUP(
         E4,
         '07_INV_Super'!$A$4:$A$503,
         '07_INV_Super'!$I$4:$I$503,
         0
      ),
   kitRatio,IF(F4>0,availStock/F4,1),
   fullPct,'01_SYS'!$D$10,
   warnPct,'01_SYS'!$D$11,
   IF(
      kitRatio>=fullPct,
      "Ready",
      IF(kitRatio>=warnPct,"Partly","Blocked")
   )
)
```

Esta fórmula ilustra la lógica de umbral para un requisito de material individual. Un cálculo de preparación de kit a nivel de producción **debe evaluar todas las piezas requeridas para la estación y el turno objetivo**. La cantidad disponible de una sola pieza dividida por su cantidad de carga no es, por sí sola, prueba de que todo el kit esté completo.

La compuerta de despacho debe usar por lo tanto el conjunto completo de requisitos, validar que cada pieza requerida esté disponible en cantidad suficiente y evitar que el material se asigne a múltiples tareas.

**Verificación de capacidad del carrito**

```excel
=LET(
   snp,
      XLOOKUP(
         E4,
         '02_MST_Part'!$A$4:$A$503,
         '02_MST_Part'!$G$4:$G$503,
         1
      ),
   boxes,CEILING.MATH(F4/snp),
   maxBoxes,'01_SYS'!$D$12,
   IF(
      boxes>maxBoxes,
      "Overload Warning",
      "Within Capacity"
   )
)
```

Esta es una verificación de referencia basada en múltiplos de embalaje. La implementación debe establecer si la capacidad se mide por línea de pieza, por carrito o en toda la carga. Un carrito real puede contener múltiples tipos de piezas; validar cada línea de forma independiente no garantiza que la carga combinada se mantenga dentro de su capacidad física.

Una tarea de carrito debe progresar a través de estados operativos explícitos. Las confirmaciones de despacho, entrega y devolución o disponibilidad deben registrarse como eventos separados donde el taller los requiera.

</details>

</details>

<details>
<summary><strong>Módulo 4 — Retroalimentación y Monitoreo de Producción</strong></summary>

<details>
<summary><strong>Hoja `09_ACT_Report` — Informes de Producción Real</strong></summary>

Esta hoja de cálculo registra la producción real de las estaciones de soldadura robotizadas y manuales.

| Campo | Propósito |
|---|---|
| ID de Informe | Registro de informe único |
| Fecha de Informe | Fecha real de reporte |
| ID de Turno | Turno de producción |
| ID de Estación | Estación que reporta |
| ID de Ensamblaje | Ensamblaje de soldadura completado |
| Cantidad Buena Real | Producción aceptada |
| Cantidad de Merma | Ensamblajes rechazados registrados |
| Notas de Tiempo Muerto | Notas de faltante, equipo u otras interrupciones |
| Cantidad Planificada | Objetivo de producción correspondiente |
| Cantidad de Variación | Producción buena real menos plan |
| Alarma de Merma | Verificación de tasa de merma configurada |
| Estado de Validación | Indicador de validez del registro |

**Obtener el plan de producción correspondiente**

```excel
=IF(A4:A2000="","",
   XLOOKUP(
      TEXT(B4:B2000,"yyyymmdd")&"_"&
      C4:C2000&"_"&
      D4:D2000&"_"&
      E4:E2000,
      '05_PLN_Shift'!$K$4:$K$100,
      '05_PLN_Shift'!$E$4:$E$100,
      0
   )
)
```

La clave del plan debe usar la misma normalización de fecha y texto en ambos lados. El formato de fecha, los espacios finales y los códigos inconsistentes de estación o ensamblaje pueden hacer que registros válidos no coincidan.

Si se permiten múltiples informes contra un plan de producción, el objetivo no debe contarse repetidamente como si cada informe fuera un plan separado. Una implementación de producción debe agregar la producción real por la clave de planificación completa.

**Variación de producción**

```excel
=IF(A4:A2000="","",F4:F2000-I4:I2000)
```

Un resultado positivo indica producción por encima del objetivo correspondiente; un resultado negativo indica un déficit.

**Monitoreo de tasa de merma**

```excel
=IF(A4:A2000="","",
   LET(
      totalUnits,F4:F2000+G4:G2000,
      scrapRate,IF(totalUnits>0,G4:G2000/totalUnits,0),
      tolRate,'01_SYS'!$D$13,
      IF(
         totalUnits=0,
         "No Output",
         IF(scrapRate>tolRate,"Scrap Above Tolerance","Within Tolerance")
      )
   )
)
```

La tasa de merma de referencia se calcula como merma dividida por producción buena más merma. La tolerancia predeterminada es del 2%, pero el umbral real debe aprobarse para el proceso de manufactura relevante.

**Validación de producción**

Un informe debe aceptarse solo cuando la estación y el ensamblaje existen en sus datos maestros y todas las cantidades cumplen las restricciones definidas.

Como mínimo:

- La producción buena debe ser no negativa.
- La cantidad de merma debe registrarse explícitamente, usando cero cuando no hubo merma.
- La estación y el ensamblaje deben estar registrados.
- El informe debe tener un identificador único.
- La fecha, el turno y la estación deben coincidir con un contexto de reporte válido.
- Los registros duplicados o en conflicto deben marcarse antes de aplicar su consumo al inventario.

</details>

<details>
<summary><strong>Consumo de Producción y Retroalimentación de Inventario</strong></summary>

Los informes de producción real son la fuente de retroalimentación para el modelo de material.

Para un ensamblaje con producción buena \(Q_g\), merma registrada \(Q_s\), y una cantidad de BOM por ensamblaje \(B_p\), una regla posible de consumo bruto es:

\[
C_p=(Q_g+Q_s)\times B_p
\]

Esta ecuación asume que tanto los ensamblajes aceptados como los desechados consumen la cantidad estándar completa de cada componente. Cuando los patrones reales de merma difieren, el taller debe definir la política de consumo apropiada.

El modelo de inventario debe usar una política consistente para:

- El consumo teórico basado en BOM.
- La producción buena y la merma.
- Las salidas reales de material, si se registran por separado.
- Las reversiones y correcciones.
- La prevención de informes duplicados.

Un informe no debe reducir el inventario más de una vez. La especificación fuente describe la retroalimentación de consumo basada en BOM, pero no establece un libro contable de transacciones completo con identificadores de registro inmutables. Ese control debe implementarse y probarse antes de que el libro de trabajo se use como registro autoritativo de inventario.

</details>

<details>
<summary><strong>Hoja `10_DSH_Board` — Panel de Operaciones de Planta</strong></summary>

El panel consolida la información operativa para supervisores de producción y despachadores.

El área de filtros de referencia contiene:

| Celda | Filtro |
|---|---|
| `B2` | Fecha de producción |
| `D2` | Turno |
| `F2` | Estación objetivo o todas las estaciones |

Las áreas propuestas de KPI y monitoreo incluyen:

- Cumplimiento de producción del turno.
- Tasa de entrega de kit completo.
- Número de estaciones con preparación de material bloqueada.
- Número de tipos de pieza afectados por faltantes.
- Cantidades de reabastecimiento por fuente de fabricación aguas arriba.
- Una lista clasificada de los faltantes más críticos.

**Cumplimiento de producción**

```excel
=LET(
   targetDate,$B$2,
   targetShift,$D$2,
   totPlan,
      SUMIFS(
         '05_PLN_Shift'!$E$4:$E$100,
         '05_PLN_Shift'!$A$4:$A$100,targetDate,
         '05_PLN_Shift'!$B$4:$B$100,targetShift
      ),
   totAct,
      SUMIFS(
         '09_ACT_Report'!$F$4:$F$2000,
         '09_ACT_Report'!$B$4:$B$2000,targetDate,
         '09_ACT_Report'!$C$4:$C$2000,targetShift
      ),
   IF(totPlan=0,"No Production Plan",TEXT(totAct/totPlan,"0.0%"))
)
```

Este es un cálculo de referencia. Debe extenderse al filtro de estación y a la política de estado del plan seleccionada. La producción real debe agregarse contra el alcance del plan apropiado para evitar porcentajes engañosos.

**Tasa de kit completo**

```excel
=LET(
   targetShift,$D$2,
   totTasks,COUNTIF('08_LOG_Trolley'!$B$4:$B$1000,targetShift),
   readyTasks,
      COUNTIFS(
         '08_LOG_Trolley'!$B$4:$B$1000,targetShift,
         '08_LOG_Trolley'!$G$4:$G$1000,"Ready"
      ),
   IF(totTasks=0,"No Delivery Tasks",readyTasks/totTasks)
)
```

Esta métrica depende de la granularidad de la tarea. Si una única tarea de entrega de carrito representa una pieza en lugar de un kit completo de estación, el resultado es una tasa de preparación de tareas, no una tasa de kit completo de estación. La etiqueta del panel debe reflejar la medición implementada.

**Recuento de estaciones bloqueadas**

Cuente las estaciones únicas con estado bloqueado en el turno seleccionado. Contar las líneas de material bloqueadas en lugar de las estaciones únicas exagerará el número de estaciones afectadas.

**Recuento de piezas con faltante**

Cuente las piezas registradas únicas cuyo faltante calculado sea positivo. Excluya las filas en blanco y los registros maestros inválidos.

**Resumen de reabastecimiento aguas arriba**

Agregue la cantidad de reabastecimiento sugerida por fuente de fabricación:

- Corte láser.
- Plegado.
- Mecanizado.

Esto brinda a los equipos de producción aguas arriba una vista consolidada de la cantidad requerida por fuente. El resultado sigue siendo una señal de planificación hasta que el trabajo aguas arriba haya sido aceptado, producido y recibido físicamente.

**Clasificación de faltantes**

El diseño de referencia usa funciones de matriz dinámica como `FILTER`, `SORT`, `HSTACK` y `CHOOSEROWS` para generar una lista clasificada de faltantes.

Una clasificación válida debe incluir el ID de pieza, la descripción, la fuente de fabricación o ubicación de almacenamiento, la cantidad disponible, la cantidad de faltante y la cantidad de reabastecimiento sugerida. La clave de ordenamiento debe definirse explícitamente y no debe confundir el faltante absoluto más grande con el riesgo más urgente de tiempo hasta desabastecimiento.

</details>

</details>

<details>
<summary><strong>Referencia de Fórmulas</strong></summary>

Los siguientes grupos resumen los patrones de cálculo principales utilizados en toda la arquitectura propuesta.

<details>
<summary><strong>Fórmulas de configuración y datos maestros</strong></summary>

| Propósito | Fórmula o función | Objetivo de control |
|---|---|---|
| Visualización de parámetros | `TEXT`, concatenación | Hacer legibles los ajustes compartidos |
| Validación de parámetros | `IF`, `ISNUMBER`, comprobaciones de rango | Marcar ajustes faltantes o inválidos |
| Recuperación de datos maestros | `XLOOKUP` | Recuperar nombres, categorías de fuente y ubicaciones |
| Validación de relación BOM | `MATCH`, `ISNUMBER` | Prevenir relaciones de piezas no registradas |
| Redondeo de stock de seguridad | `CEILING.MATH` | Alinear los buffers de inventario con las cantidades de embalaje |
| Agregación basada en tablas | `SUMIFS`, `COUNTIFS` | Agregar registros operativos con criterios explícitos |

</details>

<details>
<summary><strong>Fórmulas de planificación e inventario</strong></summary>

| Propósito | Fórmula o función | Objetivo de control |
|---|---|---|
| Expansión de plan a BOM | Cantidad del plan × uso de BOM | Calcular la demanda bruta de componentes |
| Agregación de demanda a nivel de pieza | `SUMIFS` | Combinar la demanda en el alcance de planificación definido |
| Cálculo de faltante | `MAX(0, required - available)` | Prevenir valores de faltante negativos |
| Cantidad de reabastecimiento | `LET`, `XLOOKUP`, `CEILING.MATH` | Aplicar stock de seguridad y redondeo de paquete |
| Clasificación de reabastecimiento | `IF` con umbrales configurados | Exponer estados Normal, Replenish y Urgent |
| Clasificación de faltantes | `FILTER`, `SORT`, `CHOOSEROWS` | Priorizar excepciones visibles de material |

</details>

<details>
<summary><strong>Fórmulas de logística, reportes y panel</strong></summary>

| Propósito | Fórmula o función | Objetivo de control |
|---|---|---|
| Identificación de tareas | `TEXT`, `ROW` | Generar referencias de tarea legibles |
| Mapeo de estación a carrito | `XLOOKUP` | Recuperar el recurso de transporte configurado |
| Clasificación de preparación | `LET`, comparaciones de umbrales | Clasificar la preparación de entrega |
| Coincidencia de plan de producción | `XLOOKUP` con clave compuesta | Recuperar la cantidad del plan correspondiente |
| Variación de producción | Producción real − plan | Cuantificar la brecha de producción |
| Monitoreo de merma | `LET`, cálculo de ratio | Comparar la merma contra la tolerancia configurada |
| Agregación de KPI | `SUMIFS`, `COUNTIFS` | Resumir los resultados de producción y entrega |

</details>

**Compatibilidad de fórmulas:** El diseño usa la funcionalidad de matriz dinámica de Microsoft 365, incluidas `FILTER`, `LET`, `HSTACK` y `CHOOSEROWS`. La disponibilidad varía según la versión de Excel. Valide cada fórmula en el entorno de destino antes del lanzamiento.

Las fórmulas en este README son implementaciones de referencia y patrones de diseño, no una afirmación de que ya se ha entregado un libro de trabajo completamente probado. Cuando una expresión usa un nombre de tabla recomendado, un campo de marcador de posición o un rango ilustrativo, esa referencia debe mapearse a la estructura real del libro de trabajo.

</details>

<details>
<summary><strong>Reglas de Validación</strong></summary>

| Campo o control | Regla | Comportamiento de error requerido |
|---|---|---|
| ID de Pieza | Debe ser único y no vacío para los registros activos | Marcar duplicados o identificadores faltantes |
| Fuente de fabricación | Debe ser Láser, Plegado o Mecanizado | Rechazar o marcar categorías no soportadas |
| Ubicación en supermercado | Debe estar presente para una pieza activa | Marcar los datos maestros como incompletos |
| SNP | Debe ser numérico y mayor que cero | Bloquear el redondeo de paquete y la liberación de tareas |
| Consumo diario promedio | Debe ser numérico y tener una base temporal definida | Marcar entradas faltantes o inconsistentes |
| ID de Pieza de BOM | Debe existir en el maestro de piezas | Marcar una relación BOM inválida |
| Cantidad de BOM | Debe ser mayor que cero para relaciones activas | Prevenir cálculos de demanda inválidos |
| ID de Estación | Debe existir en el maestro de estaciones | Marcar referencias de estación inválidas |
| Asignación de carrito | Debe mapear a un recurso registrado | Bloquear asignaciones no confirmadas |
| Cantidad planificada | Debe ser un entero positivo para un plan de producción liberado | Marcar cantidades de producción inválidas |
| ID de Turno | Debe coincidir con el diccionario de turnos configurado | Rechazar valores de turno no soportados |
| Unicidad del plan | Debe seguir la política aprobada de planes duplicados | Marcar registros duplicados o en conflicto |
| Recepción de inventario | Debe reflejar cantidades físicamente recibidas bajo la política de registro definida | Prevenir que recepciones no confirmadas se traten como stock |
| Ajuste de inventario | Debe registrarse con una razón y un proceso de corrección autorizado | Marcar correcciones no soportadas |
| ID de informe de producción | Debe ser único | Prevenir registros duplicados de consumo |
| Cantidad buena real | Debe ser no negativa | Marcar informes de producción inválidos |
| Cantidad de merma | Debe ingresarse explícitamente y ser no negativa | Rechazar registros de merma incompletos o inválidos |
| Contexto del informe de producción | Fecha, turno, estación y ensamblaje deben ser válidos | Marcar informes no coincidentes o ambiguos |
| Preparación de kit | Debe evaluar el conjunto completo de requisitos para el alcance previsto | Bloquear el despacho cuando el material requerido no esté disponible |
| Capacidad del carrito | Debe evaluar la carga combinada contra la capacidad real | Marcar cargas sobrecargadas |
| Salida de matriz dinámica | El área de derrame debe permanecer despejada | Resolver `#SPILL!` antes de usar la salida |
| Entradas de fórmulas | Deben usar tipos numéricos o de texto válidos según lo definido | Marcar números con formato de texto e identificadores malformados |
| Denominadores del panel | Deben ser válidos para el alcance de reporte seleccionado | Mostrar un estado explícito de sin plan o sin tareas en lugar de implicar un rendimiento normal |

<details>
<summary><strong>Comprobaciones de Integridad entre Módulos</strong></summary>

Antes del despliegue operativo, verifique que:

1. Cada ensamblaje activo del plan de producción tenga una BOM válida.
2. Cada pieza de la BOM se mapee a una pieza registrada con una fuente y ubicación válidas.
3. Cada requisito de producción pueda rastrearse hasta su plan y relación BOM.
4. La disponibilidad de inventario use un tratamiento consistente del stock físico, reservas, cantidades entrantes y ajustes.
5. Cada informe de producción contribuya al consumo de inventario como máximo una vez.
6. Un carrito no pueda tratarse como disponible mientras tenga una asignación activa sin resolver.
7. Una entrega no se marque como completa solo porque una tarea fue despachada.
8. Las métricas del panel usen fechas, turnos, filtros de estación y reglas de agregación consistentes.
9. Los cambios de parámetros se propaguen a todos los cálculos dependientes previstos.
10. Las entradas faltantes o inválidas permanezcan distinguibles de los valores cero genuinos.

La especificación original de arquitectura proporciona una verificación cruzada a nivel de campo y un mapa de referencia de parámetros. Esos documentos establecen la cobertura de diseño prevista; no deben interpretarse como evidencia independiente de pruebas en tiempo de ejecución para un libro de trabajo terminado.

</details>

</details>

<details>
<summary><strong>Tres Trampas que Atrapan Incluso a Planificadores de Producción con Experiencia</strong></summary>

<details>
<summary><strong>Trampa 1 — Un saldo de inventario positivo no demuestra preparación para la producción</strong></summary>

**Decisión:** Liberar un plan de soldadura porque el supermercado muestra suficiente inventario total.

**Fallo oculto:** El saldo de stock no tiene en cuenta todos los requisitos en competencia, las reservas ni las restricciones de entrega física.

**Por qué falla el razonamiento:** El inventario puede existir en agregado mientras que las piezas específicas requeridas para una estación no están disponibles en la cantidad requerida o están comprometidas en otro lugar.

**Enfoque corregido:** Calcule la demanda por pieza y alcance de planificación, derive la disponibilidad neta y verifique el kit completo antes del despacho.

**Implicación de la decisión:** Libere el plan solo después de evaluar la preparación del material contra los requisitos reales de componentes.

<details>
<summary><strong>Referencia de cálculo</strong></summary>

```text
Gross demand = Planned assembly quantity × BOM usage

Shortage = MAX(0, Required quantity − Net available quantity)

Ready = Every required part satisfies the defined availability condition
```

</details>

</details>

<details>
<summary><strong>Trampa 2 — Una tarea de entrega no es lo mismo que un kit completo</strong></summary>

**Decisión:** Despachar un carrito porque una de sus líneas de material parece lista.

**Fallo oculto:** El cálculo de preparación evalúa una pieza o línea individual en lugar de todos los componentes que necesita la estación.

**Por qué falla el razonamiento:** Una sola pieza crítica faltante puede impedir la producción incluso cuando el resto de la carga está disponible.

**Enfoque corregido:** Agregue la preparación en el conjunto completo de componentes requeridos, verifique el embalaje y la capacidad del carrito, y valide el estado de despacho.

**Implicación de la decisión:** Un carrito está listo para despacho solo cuando se cumplen las reglas reales a nivel de kit y la asignación es válida.

<details>
<summary><strong>Referencia de cálculo</strong></summary>

```text
For each required part:
    Check required quantity against eligible available quantity.

For the complete kit:
    Check every required part.
    Check combined trolley capacity.
    Check trolley assignment and current status.

Dispatch:
    Permit only when the configured release conditions are satisfied.
```

</details>

</details>

<details>
<summary><strong>Trampa 3 — La producción reportada puede crear una falsa confianza en el inventario</strong></summary>

**Decisión:** Confiar en el saldo de inventario actualizado inmediatamente después de ingresar un informe de producción.

**Fallo oculto:** El informe puede estar duplicado, incompleto, sin coincidencia con un plan o ser inconsistente con la política de consumo.

**Por qué falla el razonamiento:** Aplicar repetidamente el mismo informe puede deducir el mismo consumo teórico más de una vez. Un tratamiento incorrecto de la merma también puede distorsionar la posición de stock.

**Enfoque corregido:** Valide el identificador del informe y el contexto de producción, defina las reglas de consumo de producción buena y merma, y use un proceso de registro controlado.

**Implicación de la decisión:** Los cambios de inventario deben seguir eventos de producción validados, con correcciones rastreables a sus registros de origen.

<details>
<summary><strong>Referencia de cálculo</strong></summary>

```text
Theoretical component consumption
    = Reported consumed assembly quantity × BOM usage

Apply the consumption once per validated report.
Reconcile inventory corrections through an explicit adjustment process.
```

</details>

</details>

</details>

<details>
<summary><strong>Escenario de Ejemplo</strong></summary>

Considere un turno hipotético programado para producir 20 ensamblajes de soldadura. Cada ensamblaje requiere cuatro unidades de la Pieza P-1001 y dos unidades de la Pieza P-1002.

| Entrada | Pieza P-1001 | Pieza P-1002 |
|---|---:|---:|
| Cantidad de ensamblaje planificada | 20 | 20 |
| Uso de BOM por ensamblaje | 4 | 2 |
| Requisito bruto | 80 | 40 |
| Stock neto disponible elegible | 70 | 50 |
| Faltante inicial | 10 | 0 |

El plan crea un requisito de 80 unidades de P-1001 y 40 unidades de P-1002. P-1001 tiene un faltante de 10 unidades, mientras que P-1002 tiene stock suficiente para el requisito planificado.

Suponga que la cantidad de paquete estándar configurada para P-1001 es de 10 unidades. Si ninguna demanda adicional ni compromiso de inventario cambia el cálculo, el faltante bruto inmediato puede redondearse a un paquete estándar de 10 unidades.

Eso no demuestra automáticamente que el turno esté listo. El planificador también debe considerar la política de stock de seguridad, la demanda de cualquier otra estación, las recepciones confirmadas, las reservas y si el material físico puede entregarse antes de que comience la producción.

La recomendación operativa es por lo tanto marcar P-1001 para reabastecimiento, verificar la fuente y el momento de entrega, y evaluar el kit completo de la estación antes del despacho. Una vez recibido el material aguas arriba y entregado el carrito, la producción puede proceder sujeta a los controles de liberación normales del taller.

Si posteriormente se reportan 18 ensamblajes buenos y uno desechado, la política de consumo basada en BOM debe determinar si el consumo de material se calcula a partir de 19 ensamblajes totales o de otro registro de salida verificado. Bajo el supuesto de que tanto los ensamblajes buenos como los desechados consumen la cantidad estándar completa, el consumo de P-1001 sería \(19 \times 4 = 76\) unidades y el de P-1002 sería \(19 \times 2 = 38\) unidades.

Estas son cifras ilustrativas para explicar la lógica de control, no resultados observados ni una salida de libro de trabajo probada.

</details>

<details>
<summary><strong>Procedimiento Operativo — Ciclo de Control Diario de Cinco Pasos</strong></summary>

1. **Antes del turno:** Ingrese el plan de producción, verifique sus referencias de datos maestros y libere las tareas válidas.
2. **Antes de que comience la producción:** Revise la demanda, identifique los faltantes y comunique los requisitos de reabastecimiento a Láser, Plegado y Mecanizado.
3. **Antes del despacho:** Recoja los materiales del supermercado, verifique la completitud del kit y la capacidad del carrito, y registre las confirmaciones de despacho y entrega.
4. **Durante el turno:** Registre la producción buena, la merma y las excepciones operativas. Valide los informes antes de aplicar el consumo.
5. **Al final del turno:** Revise el cumplimiento de producción, la exposición a faltantes y el rendimiento de entrega. Concilie las diferencias de inventario físico mediante ajustes documentados.

</details>

<details>
<summary><strong>Mantenimiento de Datos y Solución de Problemas</strong></summary>

**Agregar registros:** Agregue nuevas entradas dentro de las Tablas de Excel designadas para que las referencias estructuradas se expandan. Mantenga despejados los rangos de derrame de matriz dinámica.

**Cambiar parámetros:** Modifique los valores de configuración aprobados en `01_SYS` en lugar de editar constantes de negocio en las fórmulas posteriores.

**Proteger fórmulas:** Separe las celdas de entrada del operador de las celdas calculadas. Proteja las áreas de fórmulas cuando corresponda y documente quién puede modificar los datos maestros.

**Resolver `#SPILL!`:** Identifique el rango de derrame obstruido y despeje el contenido de celdas no intencionado. No elimine una fórmula requerida para ocultar el error.

**Investigar resultados sin cambios:** Verifique el modo de cálculo, el estado del plan, las claves de búsqueda y la validación de entradas. Confirme que el plan relevante haya sido liberado si la implementación filtra por planes liberados.

**Investigar stock de seguridad sin cambios:** Confirme que el parámetro esté almacenado como número en lugar de texto, que la fórmula referencie la celda prevista y que el libro de trabajo haya recalculado.

**Investigar códigos de informe inválidos:** Verifique los identificadores de estación y ensamblaje contra sus datos maestros. Use listas controladas cuando estén disponibles y elimine espacios no intencionados o diferencias de formato.

</details>

<details>
<summary><strong>Compatibilidad, Escala y Colaboración</strong></summary>

El diseño fuente apunta a Microsoft 365 o Excel 2021 y posteriores, sujeto a la disponibilidad de funciones en la versión instalada. Las versiones anteriores de Excel pueden no soportar las funciones de matriz dinámica y búsqueda requeridas.

La especificación de implementación da estas referencias de escala de planificación:

- Maestro de piezas individuales: aproximadamente 500 piezas, con un rango de diseño propuesto de 1–2,000.
- Ensamblajes de soldadura: aproximadamente 50, con un rango de diseño propuesto de 1–500.
- Historial de planes de producción e informes: una directriz recomendada a nivel de libro de trabajo de no más de 50,000 filas acumuladas antes de considerar el archivado.

Estos son objetivos de diseño, no garantías de rendimiento evaluadas de forma independiente. La velocidad real de recálculo depende de las fórmulas, la estructura del libro de trabajo, el hardware y el volumen de datos.

OneDrive o SharePoint pueden soportar visualización y edición compartida ligera. Para los registros operativos, se recomienda la responsabilidad centralizada de la entrada de planes de producción y de la entrada de recepciones de inventario para reducir actualizaciones en conflicto.

</details>

<details>
<summary><strong>Alcance y Límites de Implementación</strong></summary>

El libro de trabajo está destinado a proporcionar una capa ligera de control de flujo de materiales en planta. No implementa:

- Diseño físico de la distribución de la fábrica y de rutas de ingeniería industrial.
- Control a nivel de PLC de AGV o carritos automatizados.
- Telemetría automática de equipos mediante IoT o SCADA.
- Algoritmos completos de planificación y programación avanzada.
- Una base de datos transaccional o un libro contable de inventario multiusuario de nivel empresarial, salvo implementación separada.
- Confirmación automática de movimientos físicos sin un mecanismo definido de retroalimentación de operador o equipo.

Estos límites deben considerarse al decidir si el marco es adecuado para un entorno de producción particular.

</details>

</details>

--

## Otras Herramientas de Esta Serie

Explore herramientas adicionales ligeras de soporte a decisiones de manufactura y operaciones en el perfil de GitHub del propietario del proyecto:

- **[project-time-tracking-excel-template](https://github.com/HyVoid/project-time-tracking-excel-template)** — ¿Qué proyectos se están desviando en costos de tiempo o margen? — Analice la asignación de costos de mano de obra de proyectos y la rentabilidad a través de carteras de proyectos activos.
- **[Caf-audit-tool-for-efficient-reviews](https://github.com/HyVoid/Caf-audit-tool-for-efficient-reviews)** — ¿Qué dimensión operativa está costando más ingresos y la fuga financiera exige una intervención inmediata? — Convierta observaciones estructuradas de cafeterías en una puntuación de diagnóstico ponderada, una estimación de fuga financiera y una lista priorizada de acciones correctivas.
- **[Restaurant-Menu-Configuration-Modifier-Pricing-Toolkit](https://github.com/HyVoid/Restaurant-Menu-Configuration-Modifier-Pricing-Toolkit)** — ¿El menú tiene precios consistentes en todas las combinaciones de modificadores y tamaños o hay errores de precios ocultos esperando salir a la luz? — Centralice la configuración del menú del restaurante, las reglas de precios de modificadores y los datos de menú listos para POS en una única fuente de verdad gobernada.
- **[wedding-planner](https://github.com/HyVoid/wedding-planner)** — ¿Qué tareas, costos y plazos de la planificación de la boda necesitan coordinación? — Coordine la gestión de proveedores, el seguimiento de tareas y el control presupuestario en los flujos de trabajo de planificación de bodas.
- **[manufacturing-capacity-planning-template](https://github.com/HyVoid/manufacturing-capacity-planning-template)** — ¿Se está utilizando la capacidad de mano de obra de manera eficiente o la operación necesita diferente personal o programación? — Transforme los planes de producción y los datos de mano de obra en utilización de capacidad, asignación de costos laborales y decisiones de dotación de personal.
- **[cin7-excel-reporting-template](https://github.com/HyVoid/cin7-excel-reporting-template)** — ¿Qué dicen los datos operativos de Cin7 sobre el rendimiento del negocio? — Traduzca los datos de inventario y operaciones de Cin7 en información accionable sobre el rendimiento del negocio.
- **[employee-performance-dashboard-excel](https://github.com/HyVoid/employee-performance-dashboard-excel)** — ¿Qué empleados y proyectos están en riesgo de incumplir la entrega y dónde debe intervenir la gerencia antes de que venzan los plazos? — Conecte la planificación anual de trabajo, el seguimiento de ejecución, la evaluación ponderada del rendimiento y los informes de gerencia en un flujo de trabajo operativo continuo.
- **[rental-property-management-excel-template](https://github.com/HyVoid/rental-property-management-excel-template)** — ¿Qué unidades están perdiendo ingresos por vacancia no detectada y qué rotaciones de inquilinos necesitan acción inmediata? — Transforme los registros de reservas en estado de ocupación en vivo, inteligencia de vacancia y alertas operativas en toda una cartera de alquileres.
- **[workforce-planning-payroll-excel-dashboard](https://github.com/HyVoid/workforce-planning-payroll-excel-dashboard)** — ¿La organización está consumiendo su capacidad anual de personal más rápido de lo planificado y qué departamentos necesitan intervención antes de que los costos de horas extra se disparen? — Consolidate el gasto en nómina, las horas contratadas anuales, los ratios de horas extra y la utilización de la fuerza laboral en un marco de planificación de capacidad entre departamentos.
- **[warehouse-billing-excel-template](https://github.com/HyVoid/warehouse-billing-excel-template)** — ¿Los cargos de facturación de almacén son precisos y trazables a los registros operativos subyacentes? — Calcule los cargos de almacenamiento, manipulación y transporte de almacén en estados de cuenta de clientes auditables.
- **[commercial-hvac-plumbing-bid-estimator](https://github.com/HyVoid/commercial-hvac-plumbing-bid-estimator)** — ¿Cuál es un precio de oferta defendible y auditable para este proyecto MEP comercial? — Estime y realice el seguimiento de los costos de proyectos MEP comerciales desde el cómputo métrico hasta la presentación final de la oferta.
- **[landed-cost-calculator-excel](https://github.com/HyVoid/landed-cost-calculator-excel)** — ¿Por qué el costo landed a nivel de SKU de mi ERP difiere del de la API del agente de carga, y qué método de asignación está causando la erosión del margen? — Concilie y compare los cálculos de costo landed contra una plantilla de profesional para rastrear las diferencias de asignación de costos a nivel de SKU hasta su lógica contable subyacente.
- **[hoa-budget-accounting-spreadsheet](https://github.com/HyVoid/hoa-budget-accounting-spreadsheet)** — ¿Se están asignando correctamente los fondos de nuestra asociación de propietarios (HOA) y vamos bien con el presupuesto? — Categorice transacciones y genere informes de variaciones presupuestarias para la gestión financiera de HOA.
- **[homeowner-management-excel-template](https://github.com/HyVoid/homeowner-management-excel-template)** — ¿Cuál es mi costo total real de ser propietario de una vivienda, incluyendo todos los gastos ocultos? — Calcule el costo total de propiedad de la vivienda integrando hipoteca, servicios públicos, mantenimiento y mejoras de capital.
- **[crew-scheduling-excel-template](https://github.com/HyVoid/crew-scheduling-excel-template)** — ¿Podrá mi cuadrilla actual manejar la carga de trabajo cuando las fechas del proyecto se desplacen y se superpongan? — Pronostique la demanda de cuadrillas y las brechas de personal en un horizonte de 12 meses para respaldar decisiones de planificación de capacidad.
- **[Schedule-Driven-Construction-Cash-Curve-Workbook](https://github.com/HyVoid/Schedule-Driven-Construction-Cash-Curve-Workbook)** — ¿Cómo evolucionarán con el tiempo el flujo de caja y el avance planificado de mi proyecto de construcción según el cronograma? — Convierta cronogramas de construcción y registros de partidas de oferta en curvas S automatizadas, pronósticos de costos por fases y rastreadores de avance planificado.

## Licencia

Este proyecto especifica la **Licencia Apache 2.0**. Consulte el archivo `LICENSE` del repositorio para los términos de aplicación.



