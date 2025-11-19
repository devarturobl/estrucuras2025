# Diseño Visual - Sistema de Asistencia y Participación

## Filosofía de Diseño

### Concepto Principal
Diseño educativo moderno que combina profesionalismo con accesibilidad. Interfaz limpia y eficiente que facilita la gestión diaria del aula sin distracciones innecesarias.

### Principios de Diseño
- **Claridad**: Información claramente organizada y fácil de encontrar
- **Eficiencia**: Flujos de trabajo optimizados para tareas repetitivas
- **Accesibilidad**: Uso intuitivo para docentes con diferentes niveles tecnológicos
- **Profesionalismo**: Apariencia seria y confiable apropiada para el entorno educativo

## Paleta de Colores

### Colores Primarios
- **Azul Profundo**: #1e3a8a (encabezados, acciones principales)
- **Azul Claro**: #3b82f6 (botones, enlaces)
- **Gris Oscuro**: #374151 (texto principal)

### Colores Secundarios
- **Verde Suave**: #10b981 (asistencia presente, éxito)
- **Rojo Suave**: #ef4444 (asistencia ausente, alertas)
- **Ámbar**: #f59e0b (llegadas tardías, advertencias)
- **Gris Claro**: #f8fafc (fondos, separadores)

### Colores de Participación
- **Puntuación Alta**: #059669 (8-10 puntos)
- **Puntuación Media**: #d97706 (4-7 puntos)
- **Puntuación Baja**: #dc2626 (1-3 puntos)

## Tipografía

### Fuente Principal
- **Inter**: Para encabezados y texto principal
- **Características**: Sans-serif moderna, alta legibilidad
- **Pesos**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Fuente Secundaria
- **JetBrains Mono**: Para datos tabulares y números
- **Uso**: IDs, fechas, puntuaciones, códigos

## Sistema de Espaciado

### Unidades Base
- **4px**: Unidad base para espaciado consistente
- **8px**: Espaciado pequeño
- **16px**: Espaciado estándar
- **24px**: Espaciado grande
- **32px**: Espaciado extra grande

### Layout
- **Container máximo**: 1200px
- **Padding lateral**: 24px en móvil, 32px en desktop
- **Gap entre elementos**: 16px estándar, 24px para secciones

## Componentes de Interfaz

### Tarjetas de Información
- **Fondo**: Blanco (#ffffff)
- **Borde**: 1px solid #e5e7eb
- **Border-radius**: 12px
- **Sombra**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Padding**: 24px

### Botones
- **Primario**: Azul (#3b82f6), texto blanco
- **Secundario**: Gris claro (#f3f4f6), texto oscuro
- **Éxito**: Verde (#10b981), texto blanco
- **Peligro**: Rojo (#ef4444), texto blanco
- **Border-radius**: 8px
- **Padding**: 12px 24px
- **Font-weight**: 500

### Formularios
- **Inputs**: Borde #d1d5db, focus: azul (#3b82f6)
- **Labels**: Color #374151, font-weight 500
- **Validation**: Verde (#10b981) éxito, rojo (#ef4444) error

## Efectos Visuales

### Animaciones
- **Transiciones**: 200ms ease-out para cambios de estado
- **Hover effects**: Ligero aumento de escala (1.02) en tarjetas
- **Loading states**: Skeleton screens con animación pulse

### Micro-interacciones
- **Botones**: Sutil cambio de color en hover
- **Tarjetas**: Sombra aumentada en hover
- **Formularios**: Focus states con borde azul
- **Toast notifications**: Slide-in desde arriba

### Estados Visuales
- **Loading**: Spinner azul con animación rotate
- **Success**: Check verde con animación scale
- **Error**: X roja con animación shake
- **Empty states**: Ilustración simplificada con mensaje

## Layout Responsivo

### Breakpoints
- **Móvil**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Adaptaciones
- **Móvil**: Una columna, botones más grandes, navegación inferior
- **Tablet**: Dos columnas, navegación lateral colapsable
- **Desktop**: Tres columnas, navegación fija lateral

## Iconografía

### Estilo de Iconos
- **Tipo**: Outline icons de Heroicons
- **Tamaño**: 20px estándar, 24px para acciones principales
- **Color**: Hereda del texto padre o azul (#3b82f6)

### Iconos Principales
- **Asistencia**: UserCheckIcon
- **Participación**: ChatBubbleLeftRightIcon
- **Reportes**: ChartBarIcon
- **Configuración**: CogIcon
- **Alertas**: ExclamationTriangleIcon