# Movie DataBase_express.js

Este es un proyecto de una base de datos de películas, actores y directores desarrollado con Node.js, Express, Mongo Atlas y MongoDB. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos y cuenta con funcionalidades para buscar películas, actores y directores por diferentes criterios.

# Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongo Atlas

# Instalación

1. Clona el repositorio en tu computadora:
```
git clone https://github.com/ThePalmars1one/movieDataBase_express.js
```
2. Entra al directorio del proyecto:
```
cd movieDataBase_express.js
```
3. Instala las dependencias:
```
npm install
```
4. Crea un archivo .env en la raíz del proyecto y agrega la cadena de conexión de tu base de datos de Mongo Atlas:
```
MONGO_URI=mongodb+srv://tu-usuario:tu-contraseña@tu-cluster.mongodb.net/tu-base-de-datos
```
Asegúrate de reemplazar tu-usuario, tu-contraseña, tu-cluster y tu-base-de-datos con los valores correspondientes.

5. Inicia la aplicación:
```
npm start
```
6. Abre tu navegador y entra a http://localhost:9000 para acceder a la aplicación.

# Funcionalidades

La aplicación cuenta con las siguientes funcionalidades:

- Registro de películas, actores y directores en la base de datos.
- Lectura de películas, actores y directores de la base de datos.
- Actualización de películas, actores y directores en la base de datos.
- Eliminación de películas, actores y directores de la base de datos.
- Búsqueda de películas, actores y directores por nombre y apellido respectivamente.

# Estructura del proyecto

La estructura del proyecto es la siguiente:

1. Modelos

<img src="https://user-images.githubusercontent.com/112832288/221224784-190b8320-bdc3-4913-9bf0-f4ea7796cc15.png" style="width: auto; height: 800px;">

2. Rutas

- POST: Crear una pelicula

<img src="https://user-images.githubusercontent.com/112832288/221225570-77f00dae-6fe5-46c6-a006-7bb708ae8789.png" style="width: auto; height: 400px;">

- GET: Trae todas las peliculas

<img src="https://user-images.githubusercontent.com/112832288/221226023-12e72563-b100-421e-8624-d076af17b526.png" style="width: auto; height: 400px;">

- GET BY ID: Trae una pelicula por el ID

<img src="https://user-images.githubusercontent.com/112832288/221226376-329e264f-a031-431c-bdd1-5f7b5ec7e351.png" style="width: auto; height: 400px;">

- DELETE: Borra una pelicula por el ID

<img src="https://user-images.githubusercontent.com/112832288/221226747-ead9c762-74c7-47db-9eed-8f86d29704b9.png" style="width: auto; height: 400px;">

- PUT: Actualiza una pelicula

<img src="https://user-images.githubusercontent.com/112832288/221227067-1a8d9060-848e-4f7e-996e-2680c6c3be7c.png" style="width: auto; height: 500px;">

# Requests - peticiones

- POST: Crea una pelicula con los parametros requeridos

```
###
POST http://localhost:9000/api/movies HTTP/1.1
Content-Type: application/json

{
    "mov_id": 5,
    "mov_title": "Avatar",
    "mov_year": 2005,
    "mov_time": 190,
    "mov_lang": "ENG",
    "mov_dt_rel": "09-12-2009",
    "mov_rel_country": "USA"
}
```

- GET: Trae todas las peliculas que ya fueron creadas

```
###
GET http://localhost:9000/api/movies HTTP/1.1
```

- GET BY ID: Trae una pelicula por su mov_id

```
###
GET http://localhost:9000/api/movies/2 HTTP/1.1
```

- DELETE: Borra una pelicula por su mov_id
```
###
DELETE http://localhost:9000/api/movies/5 HTTP/1.1
```

- PUT: Actualiza una pelicula
```
###
PUT http://localhost:9000/api/movies/2 HTTP/1.1
Content-Type: application/json

{
    "mov_id": 2,
    "mov_title": "Ant Man",
    "mov_year": 2023,
    "mov_time": 130,
    "mov_lang": "ENG",
    "mov_dt_rel": "16-02-2023",
    "mov_rel_country": "USA"
}
```
