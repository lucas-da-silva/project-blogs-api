# Welcome to the Blogs API project repository!!

## Introduction

I developed an API and a database to **CRUD** (**C**reate, **R**ead, **U**pdate, **D**elete) posts for a blog. The API follows REST principles.

In this application, you can create a user and delete it, login, register new categories and retrieve them, and the main thing, make a `CRUD` of posts. To do this, it is necessary to generate a token (login with an existing user).

## Installation

<details>
<summary><strong>Installation instructions</strong></summary>

### Clone the repository

```bash
git clone git@github.com:lucas-da-silva/project-blogs-api.git
```

### Enter the repository

```bash
cd project-blogs-api
```

### Climbing the containers (docker is needed)

```bash
docker-compose up -d
```

### Entering the Node.js container

```bash
docker exec -it blogs_api bash
```

### Install dependencies

```bash
npm install
```

### Run the application (will create the database, tables and values for them)

```bash
npm start
```

> You can use [Thunder Client](https://www.thunderclient.com/) or [Insomnia](https://insomnia.rest/) (or whatever) to check the API.

### To stop containers

```bash
docker-compose down
```

</details>

## Aplication

The **[sequelize](https://sequelize.org/)** package is used to map the database entities, generate the connection and serve as the Model layer of the architecture used here, which is the **MSC** (**M**odel, **S**ervice and **C**ontroller).

In addition to creating all the routes, I developed the migrations and the models, defining the table relationships in the models, which are `1:1`, `1:N` and `N:N`.

The **[jwt](https://jwt.io/)** library was also used to generate a token, which is necessary to have complete access to the application, without a token, you cannot access the routes and manipulate the database.

There are multiple validations to perform a request, from `middlewares`, functions dedicated to validations and token validation, so pay attention to what is expected when making a request.

### Login routes

- `POST /login`: returns a `token`;
<details>
    <summary>The request body should follow the format below</summary>


```JSON
    {
      "email": "lewishamilton@gmail.com",
      "password": "123456"
    }
```

</details>

### User routes

- `POST /user`: adds a new `user` to the database and returns a `token`;
<details>
    <summary>The request body should follow the format below</summary>


```JSON
    {
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "password": "123456",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
```

</details>

- `GET /user`: returns all database `users`;

- `GET /user/:id`: returns the `user` based on the database `id` if it exists;

> The following endpoint needs a **valid token** in the request `header`, within the `Authorization` key;

- `DELETE /user/me`: delete you from the database, based on the `id` inside your `token`;

### Categories routes

- `POST /categories`: adds a new `category` to the database;
<details>
    <summary>The request body should follow the format below</summary>


```JSON
    {
      "name": "Typescript"
    }
```

</details>

- `GET /categories`: returns all database `categories`;

### Post routes

> All `/post` endpoints require a **valid token** in the `header` of the request, under the `Authorization` key.

- `POST /post`: add a new blog post and link it to categories in your tables in the database;
<details>
    <summary>The request body should follow the format below</summary>


```JSON
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "categoryIds": [1, 2]
    }
```

</details>

- `GET /post`: returns all database all blog `posts`, `user` owner and database `categories`;

- `GET /post/:id`: returns the blog `post` based on the database `id` if it exists;

- `PUT /post/:id`: alters a `post` in the database if it exists, to change you have to be the `owner` of the post (`tokenId === user_id`);
<details>
    <summary>The request body should follow the format below</summary>


```JSON
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key"
    }
```

</details>

- `DELETE /post/:id`: delete a blog `post` based on database `id` if it exists;

- `GET /post/search?q=:searchTerm`: fetch all blog `posts` based on `q` from the database, if it exists;

## Technologies used

<p>
<a href='https://nodejs.org/en/'>
  <img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' alt='Node.js' />
</a>
<a href='https://sequelize.org/'>
  <img src='https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white' alt='Sequelize' />
</a>
<a href='https://jwt.io/'>
  <img src='https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens' alt='JWT/JSON Web Token' />
</a>
<a href='https://expressjs.com/'>
  <img src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' alt='Express' />
</a>
<a href='https://www.mysql.com/'>
  <img src='https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white' alt='MySQL' />
</a>
<a href='https://www.docker.com/'>
  <img src='https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' alt='Docker' />
</a>
</p>

- [nodemon](https://nodemon.io/)

> I got the badges from github from [Iuri](https://github.com/iuricode);
