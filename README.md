# Spain FS PT 85 - Sistema de Autenticación con Python, Flask y React

Este proyecto consiste en la creación de un sistema de autenticación de usuarios utilizando **Python**, **Flask** y **React**. El sistema permite a los usuarios registrarse, iniciar sesión y gestionar su sesión a través de un backend en Flask y un frontend en React.

## Características

- **Registro de usuarios**: Los usuarios pueden registrarse proporcionando su nombre, correo electrónico y contraseña.
- **Inicio de sesión**: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña para acceder a la aplicación.
- **Autenticación basada en tokens**: El sistema utiliza JSON Web Tokens (JWT) para autenticar y gestionar sesiones de usuario.
- **Gestión de sesión**: Los usuarios pueden cerrar sesión, lo que invalidará su token de autenticación.

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **Frontend**:
  - **React**: Biblioteca de JavaScript para la creación de interfaces de usuario interactivas y dinámicas.
  - **Axios**: Librería para realizar solicitudes HTTP desde el frontend.

- **Backend**:
  - **Flask**: Micro-framework para Python que facilita la creación de aplicaciones web y APIs RESTful.
  - **Flask-JWT-Extended**: Extensión para Flask que facilita la implementación de autenticación basada en JSON Web Tokens (JWT).
  - **SQLAlchemy**: ORM (Object-Relational Mapper) para interactuar con la base de datos de manera más eficiente.
  - **SQLite/PostgreSQL**: Base de datos utilizada para almacenar los datos de los usuarios.

## Endpoints de la API

El backend de la aplicación expone los siguientes endpoints:

- `POST /api/register`: Registra un nuevo usuario en la aplicación.
- `POST /api/login`: Inicia sesión con las credenciales de un usuario (correo electrónico y contraseña).
- `GET /api/logout`: Cierra la sesión del usuario actual.
- `GET /api/profile`: Obtiene la información del perfil del usuario autenticado.

## Flujo de la Aplicación

1. El usuario se registra proporcionando su nombre, correo electrónico y contraseña.
2. Una vez registrado, el usuario puede iniciar sesión con sus credenciales.
3. El backend genera un **JWT** que es enviado al frontend, donde se almacena para autenticar futuras solicitudes.
4. El usuario puede acceder a la información del perfil y cerrar sesión en cualquier momento.

## Uso

### 1. Clona el repositorio
```bash
git clone https://github.com/Sergi-03/spain-fs-pt-85-Sistema-de-autenticacion-con-python-flask-y-react-SG.git
cd spain-fs-pt-85-Sistema-de-autenticacion-con-python-flask-y-react-SG
```

### 2. Instala dependencias
```bash
pipenv install
pipenv shell
```

### 3. Inicia el backend
```bash
flask run
```

### 4. Inicia el frontend
```bash
cd frontend
npm install
npm start
```

---


## Contacto

Si tienes preguntas o comentarios, no dudes en contactarme en: [ssegarragarcia@gmail.com]
