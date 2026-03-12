# API Blog - Node.js + MongoDB

Esta es una **API REST básica para un blog** construida con **Node.js, Express y MongoDB usando Mongoose**.
Permite manejar artículos mediante endpoints de una API.

## Tecnologías usadas

* Node.js
* Express
* MongoDB
* Mongoose
* Body-parser

---

# 📂 Estructura del proyecto

```
api-node-mongo-db
│
├── controllers
│   └── article.js
│
├── models
│   └── article.js
│
├── routes
│   └── article.js
│
├── app.js
├── index.js
├── package.json
```

---

# ⚙️ Instalación

1️⃣ Clonar el repositorio

```
git clone https://github.com/TU_USUARIO/api-node-mongo-db.git
```

2️⃣ Entrar a la carpeta del proyecto

```
cd api-node-mongo-db
```

3️⃣ Instalar dependencias

```
npm install
```

---

# 🗄️ Base de datos

Este proyecto usa **MongoDB local**.

La conexión se hace en:

```
mongodb://localhost:27017/api_blog
```

Asegúrate de tener MongoDB corriendo en tu máquina.

---

# ▶️ Ejecutar el servidor

```
node index.js
```

El servidor correrá en:

```
http://localhost:4200
```

---

# Endpoints

## Test de artículos

GET

```
http://localhost:4200/api/test
```

Respuesta:

```json
{
  "message": "Este es el endpoint de prueba para el controlador de articulos"
}
```

---

#  Modelo Article

El modelo de artículo contiene:

| Campo   | Tipo   |
| ------- | ------ |
| title   | String |
| content | String |
| date    | Date   |
| image   | String |

Ejemplo de documento:

```json
{
"title": "Mi primer articulo",
"content": "Contenido del articulo",
"date": "2026-03-12",
"image": "imagen.jpg"
}
```

---


