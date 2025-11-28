# 🏥 Proyecto NoSQL Scrum 1: CitasDB

> **Estado:** En Desarrollo (Sprint 1)

Aplicación web (Backend) para la gestión de citas y sedes, desarrollada con **Node.js**, **Express** y **MongoDB**. Este proyecto implementa una API RESTful para administrar la información de las sedes (CRUD) y sirve los archivos estáticos para el frontend, sentando las bases para un sistema completo de agendamiento de turnos.

## 👥 Equipo de Desarrollo

| Rol | Integrante |
| :--- | :--- |
| **Product Owner** | Daniel Andres Wiliamson Abril |
| **Scrum Master** | Gabriel Leandro Ardila Burgos |
| **Dev Backend** | Daniel Isaac Chaves Rojas |
| **Dev Frontend** | Andres Felipe Márquez Jaramillo |
| **Tester** | Andres Felipe Márquez Jaramillo |

---

## 🚀 Requisitos Previos

Para ejecutar este proyecto necesitas tener instalado:

*   **Node.js** (v18 o superior recomendado).
*   **MongoDB** (Servicio local corriendo o una cadena de conexión a MongoDB Atlas).
*   **Git** (Para clonar el repositorio).

---

## 🔧 Instalación y Configuración

Sigue estos pasos para poner en marcha el servidor:

1.  **Clonar el repositorio:**
    ```
    git clone https://github.com/DanielWilliamson22/Proyecto-NoSQL-Scrum1_CitasDB.git
    cd Proyecto-NoSQL-Scrum1_CitasDB
    ```

2.  **Instalar dependencias:**
    Descarga las librerías necesarias (`express`, `mongoose`, `cors`, etc.):
    ```
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo llamado `.env` en la raíz del proyecto y configura tus credenciales (ejemplo):
    ```
    PORT=4000
    MONGO_URI=mongodb://localhost:27017/citasDB
    ```

4.  **Iniciar el Servidor:**
    *   **Modo Desarrollo** (con reinicio automático):
        ```
        npm run dev
        ```
    *   **Modo Producción:**
        ```
        npm start
        ```

    *Deberías ver en la consola:*
    > Servidor corriendo en http://localhost:4000
    >
    > 🚀 Conexión exitosa a MongoDB: citasDB

---

## 📡 Documentación de la API

La URL base para todos los servicios es: `http://localhost:4000/api`

### 🏢 Módulo de Sedes
**Endpoint:** `/api/sedes`

| Acción | Método | Endpoint | Descripción | Ejemplo de Body (JSON) |
| :--- | :---: | :--- | :--- | :--- |
| **Crear** | `POST` | `/` | Registra una nueva sede. | `{ "nombre": "Sede Norte", "direccion": "Cra 15 #100", "ciudad": "Bogotá" }` |
| **Listar** | `GET` | `/` | Obtiene todas las sedes. | N/A |
| **Ver Una** | `GET` | `/:id` | Busca una sede por ID. | N/A |
| **Editar** | `PUT` | `/:id` | Actualiza datos de una sede. | `{ "telefono": "601-5551234" }` |
| **Eliminar**| `DELETE`| `/:id` | Elimina una sede. | N/A |

---

## 🧪 Pruebas con Postman

El proyecto incluye automatización de pruebas para facilitar el trabajo del equipo.

1.  Ve a la carpeta `docs/` dentro de este proyecto.
2.  Abre **Postman** e importa el archivo `postman_collection.json`.
3.  **¡Importante!** Ejecuta la petición **"1. Crear Sede"** primero.
    *   *Funcionalidad:* El script incluido guardará automáticamente el `_id` de la nueva sede en una variable de entorno de Postman.
    *   *Resultado:* Las peticiones de "Editar", "Ver Una" y "Eliminar" funcionarán de inmediato sin que tengas que copiar y pegar IDs manualmente.

---

## 📂 Estructura del Proyecto


*   **src/config:** Conexión a la base de datos.
*   **src/controllers:** Lógica de negocio (qué hacer cuando llega una petición).
*   **src/models:** Definición de los datos (Esquemas de Mongoose).
*   **src/routes:** Definición de las URLs de la API.
*   **public:** Archivos estáticos para la interfaz web simple.

