# DevPulse Solutions — Landing Page con React y Bootstrap

## 1. Descripción del Proyecto

**DevPulse Solutions** es una Landing Page moderna, reactiva y totalmente responsiva diseñada para una empresa de consultoría y desarrollo de software. El proyecto implementa una arquitectura basada en **componentes funcionales en JSX**, estilizada e integrada con **Bootstrap 5.3** y **Bootstrap Icons**, incorporando un formulario interactivo con gestión de estados locales mediante el hook `useState` y validaciones en tiempo real.

---

## 2. Tecnologías Utilizadas

- **Framework Frontend:** React 19.2 (Componentes funcionales, Hooks)
- **Empaquetador y Servidor de Desarrollo:** Vite 8.3
- **Framework de Estilos CSS:** Bootstrap 5.3 (Grid responsivo, cards, botones, alertas, formularios)
- **Librería de Iconos:** Bootstrap Icons 1.13
- **Lenguaje:** JavaScript ES6+ (JSX, módulos, async/await, desestructuración)
- **Control de Versiones:** Git & GitHub

---

## 3. Estructura y Organización de Componentes

Organización modular del proyecto:

```
landing-servicios/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación colapsable y responsiva con enlaces de ancla
│   │   ├── Hero.jsx            # Sección principal de bienvenida, llamada a la acción (CTA) y métricas
│   │   ├── Servicios.jsx       # Catálogo de servicios con filtrado interactivo por categorías
│   │   ├── Informacion.jsx     # Metodología ágil, pilares de ingeniería, flujo de 4 fases y testimonios
│   │   ├── Formulario.jsx      # Formulario reactivo con useState, validaciones dinámicas e historial
│   │   └── Footer.jsx          # Pie de página con información de contacto y enlaces
│   ├── App.jsx                 # Componente raíz que orquesta los componentes y sincroniza estados
│   ├── index.css               # Tokens de diseño, gradientes y personalizaciones sobre Bootstrap
│   └── main.jsx                # Punto de entrada e importación de los bundles de Bootstrap
├── index.html                  # Plantilla HTML5 con metadatos SEO y compatibilidad
├── package.json                # Dependencias y scripts del proyecto
└── README.md                   # Documentación técnica completa
```

---

## 4. Funcionalidades Implementadas

### Componentes y Estructura en React
- **Componentes Funcionales Modulares:** Separación de responsabilidades en componentes reutilizables (`Navbar`, `Hero`, `Servicios`, `Informacion`, `Formulario`, `Footer`).
- **Paso de Props y Callbacks:** Comunicación entre componentes para que al hacer clic en *"Cotizar este Servicio"* dentro de una tarjeta, la página se desplace suavemente hacia el formulario y seleccione automáticamente dicho servicio en el menú desplegable.
- **Sintaxis JSX Limpia:** Renderizado condicional, mapeo de listas (`.map()`) con identificadores únicos (`key`) y eventos sintéticos de React.

### Integración de Bootstrap 5
- **Diseño Mobile-First y Totalmente Responsivo:** Adaptable a dispositivos móviles, tablets, portátiles y pantallas de escritorio gracias al sistema de rejilla (`container`, `row`, `col-md-*`, `col-lg-*`).
- **Componentes Nativos de Bootstrap:** Uso de barra colapsable (`navbar-toggler`), tarjetas (`card`), insignias (`badge`), botones (`btn`), tablas responsivas (`table-responsive`) y alertas de Bootstrap.
- **Iconografía Consistente:** Integración de iconos vectoriales de `bootstrap-icons`.

### Estados y Validaciones con useState
El formulario implementa un sistema de validaciones en dos fases (en tiempo real mediante `onBlur`/`onChange` y globalmente en `onSubmit`):

1. **Nombre Completo o Empresa:** Campo obligatorio, mínimo 3 caracteres, validación alfabética mediante expresión regular.
2. **Correo Electrónico:** Campo obligatorio con validación estricta de formato RFC (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
3. **Teléfono / Celular:** Campo obligatorio con validación numérica exacta de 10 dígitos (ej. formato de telefonía móvil `0991234567`).
4. **Servicio de Interés:** Selección obligatoria dentro de la lista de servicios ofertados.
5. **Modalidad o Plan:** Selección mediante radio buttons entre Básico/MVP, Profesional o Empresarial.
6. **Fecha Estimada de Inicio:** Campo obligatorio que valida dinámicamente que la fecha no sea anterior al día actual.
7. **Detalle / Requerimientos:** Área de texto obligatoria con mínimo 15 caracteres y contador en tiempo real.
8. **Términos y Condiciones:** Checkbox de aceptación obligatorio para procesar la cotización.

#### Retroalimentación Visual Dinámica:
- Clases de Bootstrap en inputs: `is-invalid` (borde rojo y mensaje de error) e `is-valid` (borde verde de confirmación).
- Alerta dinámica de éxito al enviar con botón para cerrar.
- **Ticket Resumen Generado:** Muestra un cuadro detallado `#TICK-XXXX` con los datos de la solicitud procesada.
- **Historial de Solicitudes en Memoria:** Tabla interactiva que lista las solicitudes generadas durante la sesión, permitiendo visualizarlas o eliminarlas en tiempo real para demostrar el manejo de estado con React.

---

## 5. Instrucciones de Instalación y Ejecución Local

Para clonar y poner en marcha el proyecto en tu computadora local:

### Prerrequisitos
- Node.js versión 18 o superior instalada.
- Gestor de paquetes `npm` (incluido con Node.js).

### Pasos de ejecución:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Luisst32/landing-servicios.git
   cd landing-servicios
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *El servidor iniciará localmente en `http://localhost:5173/`.*

4. **Compilar para producción (opcional):**
   ```bash
   npm run build
   ```

---

## 6. Repositorio

- **Repositorio en GitHub:** [https://github.com/Luisst32/landing-servicios](https://github.com/Luisst32/landing-servicios)

---

## Autores

- Luis Peñafiel
- Melanie Bermeo
- Kevin Paul
- Christina Moina Parraga
