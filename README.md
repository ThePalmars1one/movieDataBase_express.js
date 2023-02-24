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
6. Abre tu navegador y entra a http://localhost:3000 para acceder a la aplicación.

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

![module](https://user-images.githubusercontent.com/112832288/221224784-190b8320-bdc3-4913-9bf0-f4ea7796cc15.png)

2. Rutas

- POST: Crear una pelicula

![post](https://user-images.githubusercontent.com/112832288/221225570-77f00dae-6fe5-46c6-a006-7bb708ae8789.png)

- GET: Trae todas las peliculas

![get](https://user-images.githubusercontent.com/112832288/221226023-12e72563-b100-421e-8624-d076af17b526.png)

- GET BY ID: Trae una pelicula por el ID

![get by id](https://user-images.githubusercontent.com/112832288/221226376-329e264f-a031-431c-bdd1-5f7b5ec7e351.png)

- DELETE: Borra una pelicula por el ID

![delete](https://user-images.githubusercontent.com/112832288/221226747-ead9c762-74c7-47db-9eed-8f86d29704b9.png)

- PUT: Actualiza una pelicula

![put](https://user-images.githubusercontent.com/112832288/221227067-1a8d9060-848e-4f7e-996e-2680c6c3be7c.png)

# Requests - peticiones



