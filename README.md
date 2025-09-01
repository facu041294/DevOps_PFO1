# PFO 1: DevOps - Simulación de Workflow Colaborativo con Git

Este repositorio documenta la resolución de la **Primera Práctica Formativa Obligatoria** de la materia Seminario de DevOps.

El objetivo principal de la práctica fue simular un `workflow` de desarrollo en paralelo, desde la creación de ramas (`branching`) y el desarrollo de `features` independientes, hasta la integración final, incluyendo la resolución de un conflicto de `merge` y el uso del ciclo de `Pull Requests` en GitHub.

**Equipo:**
-   **Ernesto Pisano:** Responsable del Backend.
-   **Facundo Villarreal:** Integrador y Project Manager.
-   **Mariano Lopez:** Responsable del Frontend.

---

## Ejecución de la Práctica

El proyecto se inició desde una rama `main` con una estructura base. El trabajo se dividió en dos `features` paralelas, demostrando flexibilidad y adaptación del equipo al intercambiar los roles asignados inicialmente.

### 1. Desarrollo del Frontend (`feature/perfil-nuevo-ui`)

-   **Responsable:** Mariano Lopez
-   **Descripción:** Se modificó el archivo `index.html` para incluir un formulario completo de registro de usuario y se creó un `script` `main.js` con la lógica `AJAX` (`fetch`) para enviar los datos del formulario de forma asíncrona.

### 2. Desarrollo del Backend (`feature/perfil-nuevo-backend`)

-   **Responsable:** Ernesto Pisano
-   **Descripción:** Se creó un `script` de servidor `backend-handler.php` para recibir los datos enviados por el frontend vía `POST`. El `script` valida los datos recibidos y retorna una respuesta en formato `JSON`.

---

## Proceso de Integración y Resolución de Conflictos

Una vez completado el desarrollo en las ramas `feature`, se procedió a la integración. El rol de Integrador (Facundo Villarreal) ejecutó los siguientes pasos para fusionar el trabajo, resolver los conflictos y preparar el `release` final en la rama `main`.

### Simulación y Detección del Conflicto

Para cumplir con la consigna, ambos desarrolladores modificaron la misma sección del archivo `index.html`, generando un conflicto de `merge` intencional al intentar fusionar las ramas.

### Log de Comandos de Integración

A continuación, se presenta la transcripción de la sesión de terminal (`Git Bash`) donde se realizó el proceso de `merge` y resolución de conflictos:

```bash
# Sincronizar con el repositorio remoto
git checkout main
git pull origin main
git fetch origin

# Crear una rama de integración a partir de la feature de UI
git checkout -b integration origin/feature/perfil-nuevo-ui

# Intentar fusionar la feature de backend, lo que genera el conflicto
git merge origin/feature/perfil-nuevo-backend
# OUTPUT: CONFLICT (content): Merge conflict in index.html

# --- Resolución Manual del Conflicto en VS Code ---

# Añadir el archivo resuelto al staging area
git add index.html

# Realizar el commit de merge para registrar la resolución
git commit -m "Merge: Resuelve conflicto e integra features de UI y Backend"

# Subir la rama de integración a GitHub para el Pull Request
git push origin integration```

### Pull Request y Fusión Final

Se creó un [Pull Request #1](https://github.com/facu041294/DevOps_PFO1/pull/1) desde la rama `integration` hacia `main`. Tras la revisión y aprobación por parte del equipo, el PR fue fusionado.

### Limpieza de Ramas (`Clean up`)

Como paso final y siguiendo las buenas prácticas, las ramas `feature/*` e `integration` fueron eliminadas tanto del repositorio remoto como del local, dejando la rama `main` como la única fuente de verdad con el trabajo completado.

---