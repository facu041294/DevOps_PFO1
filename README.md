# PFO 1: DevOps - Workflow Colaborativo con Git

Este repositorio contiene el trabajo para la **Primera Práctica Formativa Obligatoria** de la materia Seminario de DevOps.

El objetivo es simular un `workflow` de desarrollo en paralelo utilizando `branching`, resolver un conflicto de `merge` de forma controlada y familiarizarse con el ciclo de `Pull Requests` en GitHub.

**Equipo:**
- Ernesto Pisano
- Facundo Villarreal
- Mariano Lopez

---

## Estructura de la Práctica y Roles

El proyecto base en la rama `main` contiene un `index.html` inicial. A partir de aquí, el desarrollo se divide en dos `features` paralelas, cada una en su propia rama.

### 1. Rama `feature/perfil-nuevo-ui` (Frontend)

-   **Responsable:** Ernesto Pisano
-   **Objetivo:** Modificar el `index.html` para añadir un formulario de registro de usuario.
-   **Tareas Clave:**
    1.  Crear un `<form>` con campos para "nombre de usuario" y "contraseña".
    2.  Implementar una llamada `AJAX` (usando `fetch` de JavaScript) que envíe los datos del formulario al `endpoint` del backend.
    3.  Gestionar la respuesta del backend (mostrar "ok" o "error" al usuario).

### 2. Rama `feature/perfil-nuevo-backend` (Backend)

-   **Responsable:** Mariano Lopez
-   **Objetivo:** Crear un `script` simple de servidor que reciba y procese los datos enviados desde el formulario del frontend.
-   **Tareas Clave:**
    1.  Crear un nuevo archivo en el proyecto (ej. `api/register.php`).
    2.  Escribir el código PHP para leer los datos (`POST`) de "nombre de usuario" y "contraseña" que llegan desde la llamada `AJAX`.
    3.  Realizar una validación simple en el servidor (ej. que los campos no estén vacíos).
    4.  Devolver una respuesta en formato `JSON` al frontend (ej. `{"status": "ok"}` o `{"status": "error", "message": "Faltan datos"}`).

---

## Flujo de Trabajo (Workflow)

1.  **Branching:** Cada responsable trabajará exclusivamente en su rama `feature`.
2.  **Desarrollo:** Implementar las funcionalidades descritas.
3.  **Simulación de Conflicto:** Se modificarán las mismas líneas en un archivo para generar un conflicto de `merge`.
4.  **Resolución:** Se documentará y resolverá el conflicto.
5.  **Pull Request:** Ambos crearán un `Pull Request` a `main`.
6.  **Merge:** Se revisarán y fusionarán los cambios.
7.  **Clean up:** Se eliminarán las ramas `feature` una vez fusionadas.