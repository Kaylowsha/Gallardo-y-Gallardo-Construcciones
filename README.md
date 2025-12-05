# Gallardo y Gallardo Construcciones

Sitio web corporativo para Gallardo y Gallardo Construcciones - Empresa constructora especializada en proyectos de calidad.

## Características

- Página web moderna y responsive
- Galería de proyectos con filtros
- Sección de equipo con CV descargable
- Formulario de contacto
- Diseño optimizado para móviles y tablets

## Tecnologías

- React 18
- Vite
- CSS3 (con variables CSS)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Build

```bash
npm run build
```

## Deployment en Vercel

### Opción 1: Desde el Dashboard de Vercel

1. Ve a [Vercel](https://vercel.com)
2. Importa tu repositorio de GitHub
3. Vercel detectará automáticamente la configuración de Vite
4. Haz click en "Deploy"

### Opción 2: Con Vercel CLI

```bash
npm install -g vercel
vercel
```

## Estructura del Proyecto

```
├── public/              # Archivos estáticos (PDF, etc)
├── src/
│   ├── assets/         # Imágenes
│   ├── components/     # Componentes React
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── index.html
├── package.json
└── vite.config.js
```

## Personalización

Para personalizar el contenido:

1. **Imágenes**: Reemplaza las imágenes en `src/assets/images/`
2. **Información de contacto**: Edita `src/components/Contact.jsx`
3. **Colores**: Modifica las variables CSS en `src/index.css`
4. **Contenido**: Edita cada componente según necesites

## Licencia

© 2024 Gallardo y Gallardo Construcciones. Todos los derechos reservados.
