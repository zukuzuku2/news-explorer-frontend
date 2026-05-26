# News Explorer (Frontend)

Este es el frontend de **News Explorer**, una aplicación interactiva desarrollada en **React** que permite a los usuarios buscar noticias recientes sobre cualquier tema utilizando la API de **NewsAPI**, registrarse e iniciar sesión de forma segura y guardar sus artículos favoritos en un panel personal persistente alimentado por **Firebase (Auth & Firestore)**.

---

## 🚀 Características

* **Búsqueda Dinámica de Noticias:** Consume la API de *NewsAPI* en tiempo real para obtener y renderizar artículos con paginación integrada.
* **Autenticación Completa con Firebase:** Flujo completo de registro, inicio de sesión y persistencia del estado de usuario (AuthProvider) de manera segura.
* **Base de Datos en la Nube (Firestore):** Permite a los usuarios guardar y eliminar sus noticias preferidas, organizadas en una interfaz interactiva de marcadores.
* **Diseño Adaptativo Premium:** Interfaz responsiva y móvil-primero con animaciones cuidadas, fuentes personalizadas y adaptaciones dinámicas para pantallas móviles, tabletas y computadoras.
* **Seguridad de Grado Profesional:**
  * Totalmente auditado con **0 vulnerabilidades** de seguridad en dependencias.
  * `.gitignore` profesional para garantizar el bloqueo y no filtración de credenciales, tokens, archivos `.env` y carpetas de configuración a GitHub.

---

## 🛠️ Tecnologías Utilizadas

* **Framework Core:** [React 18](https://react.dev/) (Hooks: `useState`, `useEffect`, `useContext`)
* **Enrutamiento:** [React Router DOM v6](https://reactrouter.com/)
* **Validación de Formularios:** [React Hook Form](https://react-hook-form.com/)
* **Servicios Backend (Serverless):** 
  * [Firebase Authentication](https://firebase.google.com/docs/auth)
  * [Cloud Firestore (NoSQL Database)](https://firebase.google.com/docs/firestore)
* **Consumo de APIs:** [NewsAPI](https://newsapi.org/) (mediante una arquitectura desacoplada de peticiones)
* **Estilado:** Vanilla CSS responsivo y optimizado con metodologías modernas.

---

## 📦 Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/zukuzuku2/news-explorer-frontend.git
   cd news-explorer-frontend
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```
   *Nota: Esto instalará los paquetes y aplicará los overrides de seguridad configurados en `package.json` para garantizar un entorno libre de vulnerabilidades.*

3. **Configurar Firebase (Opcional):**
   Los parámetros de Firebase se encuentran actualmente configurados de forma predeterminada en `src/utils/Firebase.config.js`. Puedes modificarlos con tus propias credenciales de Firebase en caso de ser necesario.

---

## 🖥️ Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

* ### `npm start`
  Inicia la aplicación en modo desarrollo local.\
  Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador. La página se recargará automáticamente al realizar cambios.

* ### `npm run build`
  Compila la aplicación en un paquete optimizado y minificado para producción dentro de la carpeta `build/`. Listo para ser desplegado.

* ### `npm test`
  Inicia el ejecutor de pruebas unitarias interactivo de Jest.

---

## 🔒 Auditoría y Seguridad Realizada

* **Corrección de Vulnerabilidades:** Se agregaron overrides específicos en `package.json` para forzar las versiones seguras de librerías anidadas problemáticas como `uuid`, `postcss`, `serialize-javascript`, y `nth-check`, resolviendo por completo las vulnerabilidades del proyecto a **0 vulnerabilidades activas**.
* **Filtros de Seguridad:** `.gitignore` profesional y optimizado para bloquear cualquier filtración accidental de claves y entornos locales.
* **Control de Calidad:** Compilado verificado y funcionando de manera robusta sin errores.
