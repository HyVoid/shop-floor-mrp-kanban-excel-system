[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Sistema de Control de Flujo de Materiales en Planta: Plantilla Excel de MRP, Supermercado Kanban y Planificación de Producción de Soldadura
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/a63af286-1115-4c2c-aa06-6d7e04aba1e4" />

**Un marco ligero de control de flujo de materiales en planta, una calculadora de explosión de listas de materiales (BOM) y un rastreador de logística interna lean para operaciones de fabricación basadas en soldadura y trabajo de metales.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346)
![Tool Type: Production Control & MRP](https://img.shields.io/badge/Tool-Production%20Control%20%26%20MRP-2251FF)

**El Sistema de Control de Flujo de Materiales en Planta es una plantilla gratuita de planificación de producción MRP basada en navegador y Excel, diseñada para talleres de trabajo de metales y soldadura de alta mezcla y bajo volumen (HMLV). Convierte los programas de soldadura por turno en requisitos accionables de lista de materiales (BOM), señales de reabastecimiento de supermercado Kanban, tareas de preparación de carritos junto a la línea y seguimiento del consumo de trabajo en proceso (WIP)—eliminando las faltas que detienen la línea y el caos de hojas de cálculo sin costosas renovaciones de ERP/MES.**

> **Acceso, Demostración en Vivo y Disponibilidad del Libro de Trabajo**
>
> - **Aplicación Web Interactiva:** Gratuita, sin registro ni instalación. [Lanzar la demostración web interactiva del Sistema de Control de Flujo de Materiales en Planta](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/) 
>   
> - **Plantilla Excel de MRP Descargable:** Lista para el seguimiento de producción diario sin conexión. [Descargar el libro de trabajo Excel de Control de Producción y Reabastecimiento de Materiales (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)

---

## Capacidades Principales de Seguimiento de Manufactura: Mapeo de Puntos de Dolor a Soluciones

Para los gerentes de producción que buscan un **rastreador de inventario de manufactura** confiable o una **hoja de control de trabajo en proceso (WIP)**, este marco tiende un puente entre los saldos de inventario estáticos y la preparación de estaciones en tiempo real:

| Punto de Dolor Operativo en Planta | Intención de Búsqueda de Alta Frecuencia / Módulo | Cómo Resuelve Este Marco de Control |
| :--- | :--- | :--- |
| **Faltas de Componentes Imprevistas en las Estaciones de Soldadura** | **Explosión de BOM por Turno y Calculadora MRP** | Expande automáticamente los programas diarios de ensamblaje de soldadura mediante listas de materiales (BOM) multiparte para calcular la demanda neta de componentes por turno y estación de trabajo antes de que los operadores comiencen a soldar. |
| **Puntos Ciegos de Inventario entre Almacén y la Línea** | **Rastreador de Ubicación de WIP y Supermercado Kanban** | Separa los saldos contables brutos de las ubicaciones físicas de stock—rastreando cantidades exactas en buffers aguas arriba, supermercados Kanban, carritos de material en tránsito y celdas de soldadura robotizada/manual. |
| **Solicitudes Tardías de Material a la Fabricación Aguas Arriba** | **Reabastecimiento Automatizado y Lista de Prioridades de Faltantes** | Calcula las brechas netas de material en tiempo real contra los buffers de stock de seguridad y marca órdenes de reabastecimiento urgentes para las celdas de corte láser, plegado CNC y mecanizado aguas arriba. |
| **Carritos Despachados sin Piezas Críticas** | **Preparación de Kits de Carrito y Listitud de Entrega junto a la Línea** | Agrupa las listas de picking por estación, restricciones de embalaje y capacidad del carrito—asignando estados visuales explícitos de kit (`Ready`, `Partly Kitted`, `Blocked`) antes del despacho. |
| **Deriva de Inventario por Merma y Reproceso No Registrados** | **Consumo Retroactivo de Material Planificado vs. Real** | Concilia el consumo teórico de BOM contra la producción real del turno y la merma registrada en planta, recalculando dinámicamente los saldos restantes del supermercado y de las estaciones. |
| **Comunicación Fragmentada entre Turnos** | **Panel Andon y de Riesgo Logístico Visual en Planta** | Consolida el cumplimiento del plan de turno, la exposición a faltantes críticos, los desabastecimientos del supermercado y los estados de entrega milk-run internos en una única torre de control operativa. |

---

## Tutorial Paso a Paso: Cómo Ejecutar la Planificación de Producción Diaria y la Preparación de Materiales

El modelo operativo sigue un bucle de control lean de manufactura repetible de 4 pasos: configurar parámetros, mantener datos maestros, ejecutar cálculos MRP del turno y realizar el consumo retroactivo de la producción real. 

### Paso 1: Configurar los Parámetros Globales de Planta y Reabastecimiento
**Acción:** Establezca las reglas operativas básicas de su taller en el módulo de Configuración.
Defina las duraciones de los turnos, los turnos por día, los buffers de stock de seguridad, los disparadores de reabastecimiento Kanban de emergencia, los umbrales de preparación de kits, los límites de embalaje de carritos y las tolerancias de merma permitidas. Estos parámetros rigen todos los cálculos posteriores de **planificación de necesidades de material (MRP)** y alertas de faltantes.

### Paso 2: Importar la Lista de Materiales (BOM) y los Datos Maestros de Centros de Trabajo
**Acción:** Complete su catálogo maestro de piezas, el registro de estaciones de trabajo y las estructuras de ensamblaje.
Registre los componentes fabricados y comprados, las fuentes de fabricación aguas arriba (p. ej., láser, plegadora, torno), las ubicaciones de contenedores del supermercado, las cantidades de embalaje estándar (SPQ) y el uso diario promedio (ADU). Defina las **BOM de ensamblajes de soldadura** padre-hijo, clasifique las celdas de soldadura robotizadas frente a las manuales y asigne los recursos físicos de la flota de carritos. *(Optimizado para ~500 SKU individuales y ~50 subensamblajes de soldadura).*

### Paso 3: Ingresar los Programas de Producción por Turno para Generar Listas de Picking
**Acción:** Ingrese su programa de turnos diario para activar la explosión automatizada de demanda de BOM.
Registre la fecha de producción, la ventana del turno, la celda de soldadura objetivo, el número de pieza del ensamblaje, la cantidad de producción planificada y el estado de liberación. El motor de cálculo expande inmediatamente las cantidades de ensamblaje a demanda a nivel de componente, verifica la **disponibilidad de inventario del supermercado**, resalta los faltantes de piezas críticas y genera **tareas priorizadas de preparación de carritos y entrega milk-run**.

### Paso 4: Realizar el Consumo Retroactivo de la Producción Real, Registrar la Merma y Pasar a la Plantilla Excel Reutilizable
**Acción:** Registre los datos de ejecución de planta para cerrar el bucle de control de inventario.
Registre las recepciones de fabricación aguas arriba, los ajustes de recuento cíclico, las confirmaciones de despacho de carritos y los informes de turnos de soldadura completados (piezas buenas + merma). El modelo realiza automáticamente el consumo retroactivo de los componentes utilizados y actualiza su posición de inventario en tiempo real para el siguiente turno.

> **¿Listo para pasar de las pruebas de una sola sesión en el navegador a las operaciones diarias de fábrica?**  
> Una vez validado el flujo de trabajo en el sandbox del navegador, **[Descargue la Plantilla Excel Reutilizable de Control de Flujo de Materiales en Planta (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)** para guardar sus datos maestros de BOM personalizados, rastrear la variación histórica de múltiples turnos y ejecutar un control de producción diario repetible sin conexión en Microsoft Excel.

---

## ¿Por Qué Usar un Marco Dedicado de Control de Flujo de Materiales para la Fabricación de Soldadura?

En un **taller de trabajo de metales basado en soldadura**, un programa maestro de producción (MPS) a menudo parece 100% viable en un sistema ERP mientras faltan los componentes físicos reales requeridos en el punto de uso.

Esta falla operativa rara vez se debe a un inventario nulo en toda la planta. En cambio, es causada por una desconexión entre la **mezcla de ensamblaje del turno**, los **requisitos de BOM multinivel**, el stock físico que se encuentra en el **supermercado Kanban** y el estado de carga del **carrito de entrega junto a la línea** asignado a un puesto de soldadura específico. Un libro contable de stock estático no puede resolver este problema de sincronización cuádruple.

Considere un turno típico que programa múltiples conjuntos soldados estructurales en celdas de soldadura robotizada y estaciones TIG/MIG manuales. Cada conjunto soldado extrae un kit único de **placas cortadas láser, soportes plegados CNC y bujes mecanizados con precisión**. La falta de un solo soporte plegado detiene todo el utillaje de soldadura—incluso cuando el 95% del kit ya está preparado. Mientras tanto, el sistema ERP muestra el soporte "en stock", sin aclarar si está en la plegadora, guardado en el supermercado, cargado en un carrito o ya asignado a la orden de trabajo de otro turno.

Este **Sistema de Control de Flujo de Materiales en Planta** conecta esos puntos de datos operativos aislados en un flujo de trabajo único y sincronizado:
1. Traduce los objetivos de soldadura del turno en demanda exacta a nivel de componente mediante la explosión automatizada de BOM.
2. Calcula la demanda neta contra los saldos físicos del supermercado y las asignaciones abiertas de carritos.
3. Genera señales accionables de fabricación aguas arriba y manifiestos completos de preparación de kits antes de que comience el turno.
4. Concilia el uso teórico con los conjuntos soldados informados y la merma para mantener el inventario contable alineado con la realidad física.

El resultado es un **sistema de control de producción lean productizado dentro de Excel**—entregando decisiones de flujo de materiales consistentes y auditables sin obligar a los fabricantes pequeños y medianos a comprar módulos MES complejos, software de flotas de vehículos de guía automática (AGV) o personalizaciones pesadas de ERP.

---

## Hojas de Cálculo de Inventario Estáticas Tradicionales vs. Control Estructurado del Flujo de Materiales

| Dimensión Operativa | Sin Este Sistema (Hojas de Inventario Ad-Hoc) | Con Este Sistema (Marco Estructurado de MRP y Preparación de Kits en Planta) |
| :--- | :--- | :--- |
| **Detección de Faltantes de Componentes** | **Paradas No Planificadas de la Línea de Soldadura:** Las órdenes de trabajo parecen ejecutables a nivel de ensamblaje, pero los componentes hijos faltantes solo los descubren los soldadores durante la configuración del utillaje. | **Explosión y Cálculo Neto de BOM Antes del Turno:** Los programas de turno se expanden automáticamente en requisitos individuales de piezas, exponiendo los déficits exactos de piezas antes de que las órdenes de trabajo lleguen al suelo de planta. |
| **Visibilidad de Ubicación del Trabajo en Proceso (WIP)** | **Ceguera del Libro Contable de Stock:** Las piezas aparecen disponibles en el inventario total de la planta, pero los manejadores de material pierden tiempo buscando entre supermercados, carriles de preparación y puestos de soldadura. | **Seguimiento de Ubicación Multietapa:** Los datos maestros y los registros logísticos segregan claramente el stock retenido en supermercados Kanban, cargado en carritos de entrega o preparado en estaciones de trabajo. |
| **Programación de Fabricación Aguas Arriba** | **Urgencias y Bombeo de Incendios:** Las celdas de corte láser, plegado de chapa y mecanizado CNC reciben solicitudes urgentes de reabastecimiento mediante urgencias verbales o notas de papel. | **Señales de Reabastecimiento Basadas en Extracción:** Los algoritmos de faltante neto categorizan las prioridades de reorden (`Normal`, `Warning`, `Critical`) y enrutan la demanda directamente a centros de trabajo específicos aguas arriba. |
| **Preparación de Kits junto a la Línea y Despacho de Carritos** | **Kits Parciales y Estaciones Desordenadas:** Los carritos llegan a las celdas de soldadura con conjuntos incompletos de piezas, causando acumulación de WIP y cambios de estación a mitad de turno. | **Estados de Preparación de Kit con Control de Acceso:** Las tareas de picking aplican las restricciones de embalaje estándar y marcan los kits del carrito como `Ready`, `Partly` o `Blocked` antes del despacho al suelo de planta. |
| **Precisión de Inventario y Conciliación de Merma** | **Deriva Contable-Física del Inventario:** Los saldos de stock de la hoja de cálculo se retrasan respecto al uso real de la planta debido a mermas de soldadura no reportadas, reprocesos y sustituciones manuales de material. | **Consumo Retroactivo Automatizado de Producción:** Los cierres de turno y los registros de merma alimentan directamente el motor de consumo, actualizando dinámicamente los saldos del supermercado en tiempo real. |
| **Priorización de Cuellos de Botella en Toda la Planta** | **Gestión Aislada por Estación:** Los supervisores resuelven los faltantes celda por celda, ocultando los cuellos de botella sistémicos aguas arriba y las asignaciones de material en conflicto entre turnos. | **Torre de Control Centralizada en Planta:** Un panel unificado correlaciona el cumplimiento de turnos, la exposición a faltantes de componentes, la salud del supermercado y el flujo logístico interno. |

---

## Usuarios Ideales, Roles de Manufactura y Casos de Uso Industriales

### Para Quién Es Esto (Mapeo de Rol a Flujo de Trabajo)

- **Planificadores de Producción y Programadores Maestros** que buscan una **plantilla Excel de programación de producción por turno** para equilibrar los objetivos diarios de ensamblaje de soldadura entre centros de trabajo robotizados y manuales sin causar hambre de material.
- **Planificadores de Material, Analistas de Inventario y Compradores** que necesitan una **calculadora ligera de MRP y explosión de BOM** para traducir los programas de ensamblajes padre en demanda de componentes por periodos y prioridades de reabastecimiento aguas arriba.
- **Ingenieros Lean, Responsables de Almacén y Equipos de Logística Interna (Milk-Run)** que buscan un **rastreador de gestión de supermercado Kanban y preparación de carritos** para estandarizar el picking junto a la línea, la carga de contenedores y la entrega en el punto de uso.
- **Supervisores de Talleres de Soldadura, Jefes de Fabricación y Gerentes de Planta** que requieren un **panel de visibilidad en tiempo real de faltantes en planta y WIP** para verificar la preparación de kits de estación antes de los relevos de turno y rastrear la producción real vs. planificada.
- **Ingenieros Industriales y Practicantes de Excel de Manufactura** que construyen un **sistema de control de producción personalizable y de bajo código** para cerrar la brecha de ejecución entre la planificación ERP de alto nivel y las operaciones físicas de planta.

### Entornos de Manufactura Objetivo y Casos de Uso

Este marco está diseñado específicamente para la **manufactura discreta de Alta Mezcla, Bajo Volumen (HMLV)** y **entornos de taller a medida**, específicamente:
- **Subensamblajes de Maquinaria Pesada, Agrícola y de Construcción**
- **Talleres de Fabricación de Chapa Metálica, Corte Láser y Plegado con Prensa**
- **Proveedores Automotrices de Estampado y Soldadura Robotizada Tier-2/Tier-3**
- **Fabricantes de Acero Estructural, Bastidores y Carcasas Personalizadas**

### Alcance del Sistema y Límites Operativos

Para mantener velocidad, transparencia y despliegue sin sobrecarga de TI, esta herramienta está **deliberadamente limitada en alcance**:
- **Lo Que Es:** Un puente táctico de ejecución entre la planificación ERP semanal/mensual y el movimiento de materiales a nivel de turno en planta.
- **Lo Que No Es:** **No** es un reemplazo de los sistemas ERP financieros empresariales (SAP, Oracle, NetSuite), ni un motor completo de Planificación y Programación Avanzada (APS) de capacidad finita, ni un controlador de flota AGV/AMR impulsado por PLC, ni una plataforma automatizada de monitoreo de máquinas IIoT/SCADA. El diseño físico de la distribución de la planta, la integración de hardware de códigos de barras y la telemetría automática de máquinas quedan fuera del alcance nativo del libro de trabajo.

---

## Sobre la Arquitectura: la Hoja de Cálculo como Sistema de Soporte a Decisiones

La mayoría de las hojas de cálculo de fábrica fallan porque se construyen como cementerios de datos estáticos en lugar de modelos operativos interconectados. Este proyecto aborda las hojas de cálculo industriales como **sistemas de soporte a decisiones reutilizables y de baja sobrecarga**, regidos por una pregunta central de ingeniería: 

> *"¿Qué puntos de datos exactos de planta deben conectarse ahora mismo para que la próxima decisión de programación, preparación de kits o reabastecimiento se tome con cero ambigüedad?"*

El **Sistema de Control de Flujo de Materiales en Planta** aplica este principio vinculando cinco capas de manufactura tradicionalmente aisladas: **Planes de Producción por Turno → Demanda de BOM Multinivel → Inventario del Supermercado Kanban → Logística de Preparación de Carritos → Consumo Retroactivo de Producción Real y Merma**. 

Al imponer parámetros operativos centralizados, lógica de fórmulas trazable y marcas explícitas de excepciones, este marco brinda a los equipos de manufactura control inmediato sobre la disponibilidad de material junto a la línea—garantizando que las piezas fabricadas correctas lleguen a la estación de soldadura correcta en el carrito correcto, en cada turno.

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

## La Lógica de Negocio y la Metodología

El sistema se construye alrededor de un principio operativo simple: los planes de producción deben generar requisitos de material, la disponibilidad de material debe limitar la ejecución, y la producción real debe retroalimentar la próxima decisión de planificación.

- **Traducción de demanda basada en BOM** convierte los ensamblajes de soldadura planificados en requisitos de piezas individuales. Esto expone los faltantes de componentes invisibles en un programa solo de ensamblajes y da a los planificadores una base más clara para liberar producción.
- **Conciliación de posición de inventario** distingue el stock físico del material ya comprometido o esperado. Esto reduce el riesgo de tratar el mismo stock como disponible para múltiples requisitos de producción.
- **Reabastecimiento basado en umbrales** compara los requisitos de material con la posición de stock definida y resalta los faltantes según las reglas operativas configuradas. El resultado es una señal priorizada de reabastecimiento aguas arriba en lugar de una advertencia genérica de inventario.
- **Logística interna contenizada** conecta los requisitos de picking de material con las asignaciones de carritos, destinos de entrega, restricciones de embalaje y preparación de kits. Esto ayuda al equipo logístico a centrarse en el material necesario en cada estación de producción.
- **Retroalimentación de producción real** usa los informes de producción y la política de consumo aprobada para actualizar la posición de material. El taller puede entonces revisar sus prioridades de reabastecimiento usando información operativa actual en lugar de depender únicamente del plan original.

Juntos, estos métodos conectan la planificación, el inventario, la logística y los informes de producción en un proceso de control diario repetible. El marco mejora la visibilidad y la consistencia de las decisiones; su confiabilidad aún depende de datos maestros precisos, confirmaciones físicas disciplinadas y reglas de cálculo validadas.

## Otras Herramientas de Esta Serie

Explore herramientas adicionales ligeras de soporte a decisiones de manufactura y operaciones en el perfil de GitHub del propietario del proyecto:

- [HyVoid en GitHub](https://github.com/HyVoid) — herramientas de hojas de cálculo de manufactura, planificación y operaciones.

## Licencia

Este proyecto especifica la **Licencia Apache 2.0**. Consulte el archivo `LICENSE` del repositorio para los términos de aplicación.

