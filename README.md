# 🍴 Recipes App

> **Aplicación web para acceder fácilmente a recetas, tendencias del mercado y productos recomendados.**  
> Construido utilizando React, TypeScript, y siguiendo patrones de diseño modernos como Screaming Architecture.

---

## 🚀 Características

- 📱 **Diseño Responsivo**: Adaptado para desktop, tablets y móviles.
- 📡 **Consumo de API**: Integración con la [Spoonacular API](https://spoonacular.com/food-api/docs) para obtener recetas dinámicas.
- 🖇️ **Patrones de Diseño**: Arquitectura modular centrada en el dominio (Screaming Architecture).
- ⚡ **Rendimiento Optimizado**: Gestión de estado eficiente con **Redux Toolkit** y **React Query**.
- 🎨 **Estilos con Sass**: Estilos modulares para una personalización escalable.

---

## 📂 Estructura del Proyecto

El proyecto está organizado siguiendo el patrón **Screaming Architecture**, donde la estructura refleja los dominios principales de la aplicación:

```plaintext
src/
├── recipes/                 # Módulo principal para la gestión de recetas
│   ├── api/                 # Lógica de interacción con la API (Spoonacular)
│   ├── components/          # Componentes relacionados con recetas
│   ├── hooks/               # Hooks personalizados para recetas
│   ├── pages/               # Páginas específicas del dominio de recetas
│   ├── styles/              # Estilos SCSS del dominio de recetas
│   └── index.ts             # Punto de entrada del módulo
├── shared/                  # Código reutilizable y genérico
│   ├── components/          # Componentes compartidos (e.g., botones)
│   ├── hooks/               # Hooks reutilizables
│   ├── styles/              # Estilos globales
│   ├── utils/               # Helpers y utilidades
│   └── index.ts             # Exportaciones compartidas
├── App.tsx                  # Componente raíz de la aplicación
├── main.tsx                 # Punto de entrada principal
└── index.html               # Archivo base HTML
```

🛠️ Tecnologías y Herramientas

- Framework: React (con TypeScript)
- Gestión de Estado: Redux Toolkit y React Query
- Estilos: Sass
- Herramienta de Construcción: Vite
- API Externa: Spoonacular Recipe API
- Despliegue: Vercel.

📦 Instalación y Configuración

1. Clona el Repositorio:

```
git clone https://github.com/camiloacostam/recipe-app.git
```

```
cd recipe-app
```

2. Instala las Dependencias con pnpm:

```
pnpm install
```

3. Configura el Archivo de Entorno:

Crea un archivo .env en la raíz del proyecto y agrega tu API key de Spoonacular:

```
VITE_API_KEY=tu-api-key
```

4. Inicia el Servidor de Desarrollo:

```
pnpm dev
```

5. Accede a la Aplicación:

- Abre tu navegador y dirígete a http://localhost:5173.

📄 Scripts Disponibles

- pnpm dev: Inicia el servidor de desarrollo.
- pnpm build: Construye el proyecto para producción.
- pnpm preview: Previsualiza la aplicación construida.

✨ Funcionalidades Clave

1. Gestión de Recetas
   - Visualización de recetas obtenidas desde la API.
   - Integración con React Query para optimizar el manejo de datos remotos.
2. Diseño Responsivo
   - Compatible con dispositivos móviles, tablets y pantallas grandes.

🛠️ Consideraciones Técnicas

- Se evitó el uso de frameworks de UI como Bootstrap o Material UI para demostrar un manejo personalizado de los estilos.
- La arquitectura está diseñada para ser escalable, permitiendo la fácil incorporación de nuevas funcionalidades o dominios.
- Los estilos están organizados de manera modular utilizando Sass para evitar conflictos y promover el mantenimiento.

🤝 Contribuciones

¡Contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request en este repositorio.
