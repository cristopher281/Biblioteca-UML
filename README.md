# Biblioteca UML - Estructura del Proyecto

## 📁 Estructura de Archivos

```
Biblioteca-UML/
│
├── index.html              # Página principal (HTML limpio y organizado)
│
├── css/
│   └── styles.css          # Todos los estilos CSS organizados por secciones
│
├── js/
│   └── main.js             # JavaScript principal con funciones modulares
│
├── derecho.png/            # Carpeta con imágenes
│   ├── Imagen de WhatsApp 2025-08-02 a las 21.27.46_b4e773e3.jpg
│   ├── Imagen de WhatsApp 2025-08-02 a las 21.30.25_122bcb70.jpg
│   ├── Imagen de WhatsApp 2025-08-02 a las 21.42.40_fdaf7511.jpg
│   ├── Imagen de WhatsApp 2025-08-02 a las 21.43.27_ce45bb4f.jpg
│   └── Imagen de WhatsApp 2025-08-11 a las 19.25.27_bd774d9d.jpg
│
└── README.md               # Este archivo
```

## 📝 Descripción de Archivos

### `index.html`
- **Propósito**: Estructura HTML principal del sitio
- **Características**:
  - HTML semántico y accesible
  - Comentarios claros por sección
  - Referencias a archivos CSS y JS externos
  - Meta tags para SEO
  - 30 recursos legales completos

### `css/styles.css`
- **Propósito**: Todos los estilos visuales del sitio
- **Organización**:
  1. Variables y configuración global
  2. Header y navegación
  3. Sección Hero
  4. Barra de búsqueda
  5. Contenedor principal (ancho completo)
  6. Grid de recursos
  7. Tarjetas de recursos
  8. Footer
  9. Modo oscuro
  10. Menú móvil
  11. Responsive design

### `js/main.js`
- **Propósito**: Funcionalidad JavaScript del sitio
- **Funciones principales**:
  - `initTheme()` - Manejo del tema claro/oscuro
  - `initMobileMenu()` - Menú responsive
  - `filterResources()` - Búsqueda en tiempo real
  - `initSort()` - Ordenamiento de recursos
  - `initSmoothScroll()` - Scroll suave
  - `initAnimations()` - Animaciones de entrada

## 🎨 Características del Diseño

### Colores Principales
- **Azul Principal**: `#0066CC`
- **Azul Claro**: `#E8F4FF`
- **Azul Oscuro**: `#004C99`
- **Texto Oscuro**: `#1A1A1A`
- **Texto Gris**: `#666666`

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Responsive Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🚀 Funcionalidades

### ✅ Implementadas
- [x] Búsqueda en tiempo real
- [x] Ordenamiento de resultados
- [x] Tema claro/oscuro
- [x] Menú responsive
- [x] Animaciones suaves
- [x] Diseño completamente responsive
- [x] 30 recursos legales completos
- [x] Grid de ancho completo

### 🔄 Mejoras Futuras Sugeridas
- [ ] Cargar recursos desde archivo JSON
- [ ] Paginación de resultados
- [ ] Favoritos guardados en localStorage
- [ ] Historial de búsquedas
- [ ] Compartir recursos en redes sociales
- [ ] Filtros avanzados opcionales

## 📖 Cómo Usar

### Para Desarrolladores

1. **Modificar Estilos**:
   - Edita `css/styles.css`
   - Los estilos están organizados por secciones con comentarios claros

2. **Agregar Funcionalidad**:
   - Edita `js/main.js`
   - Cada función está documentada y es independiente

3. **Agregar Recursos**:
   - Edita `index.html` en la sección `<div class="resources-grid">`
   - Copia el formato de las tarjetas existentes

### Para Mantenimiento

1. **Cambiar Colores**:
   - Modifica las variables CSS en `:root` en `styles.css`

2. **Actualizar Enlaces**:
   - Busca y reemplaza URLs en `index.html`

3. **Agregar Nuevas Categorías**:
   - Agrega checkboxes en el sidebar de `index.html`
   - Actualiza el atributo `data-category` en las tarjetas

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, Grid y Flexbox
- **JavaScript (ES6+)**: Funcionalidad interactiva
- **Font Awesome 6**: Iconos
- **Google Fonts**: Tipografía Inter

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles (iOS y Android)

## 📄 Licencia

© 2025 Universidad Martín Lutero - Biblioteca Jurídica. Todos los derechos reservados.

## 👥 Contacto

- **Email**: biblioteca@uml.edu.ni
- **Teléfono**: +505 2732-2000
- **Ubicación**: Ocotal, Nueva Segovia, Nicaragua
