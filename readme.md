# Contact Management App API

This project showcases my journey in building a powerful RESTful API using Node.js, Express, MongoDB, and JWT. This readme gives you an overview of the project structure, key features, and how to set it up.

## Table of Contents

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Authentication and Authorization](#authentication-and-authorization)
- [Database Schema](#database-schema)
- [Conclusion](#conclusion)

## Introduction

In this project, I've created a robust RESTful API for managing contacts. Leveraging my skills in Node.js and Express, I've built a backend that's ready to handle CRUD operations on contacts while ensuring data security through JWT authentication.

## Project Overview

The project is structured to provide a seamless API experience. I've utilized Express to establish a server, handle routing, and execute various CRUD operations. To ensure smooth communication with the API, I've incorporated Thunder Client, a Visual Studio Code extension, for efficient testing.

## Features

- **Express Server Setup**: I've kicked off the project by setting up an Express server to handle incoming requests and manage routes.
- **CRUD Operations**: My API supports all the fundamental CRUD operations (Create, Read, Update, Delete) for contacts.
- **User Authentication**: Security is a priority. I've implemented user registration, login, and JWT-based access token generation to protect routes.
- **Route Protection**: Only authenticated users can access certain routes, providing a secure environment.
- **Error Handling**: My API gracefully handles errors and provides informative error responses to users.
- **Asynchronous Handling**: I've skillfully managed asynchronous operations using Express's async handling capabilities.
- **MongoDB Integration**: The application seamlessly integrates with MongoDB for efficient data storage and retrieval.
- **Relationship Management**: I've established a relationship between users and their contacts for a more organized database.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository.
2. Install the required dependencies using `npm install`.
3. Configure your MongoDB connection in the project settings.
4. Run the server using `npm start`.

## API Endpoints

I've designed the following endpoints for the API:

- `GET /contacts`: Retrieve a list of all contacts.
- `POST /contacts`: Create a new contact.
- `GET /contacts/:id`: Retrieve a specific contact.
- `PUT /contacts/:id`: Update a contact.
- `DELETE /contacts/:id`: Delete a contact.

- `POST /register`: User registration.
- `POST /login`: User login and access token generation.
- `GET /current`: Get information about the currently logged-in user.

## Authentication and Authorization

Security is paramount in this project. User registration and login are facilitated through hashed passwords, and JWT access tokens are issued for authentication. Certain routes are protected to ensure only authorized users can access them.

## Database Schema

The MongoDB database schema comprises two main components:

- **Contacts**: Each contact contains essential information such as name, email, and phone number.
- **Users**: User data includes username and securely stored hashed passwords.

## Conclusion

Through this project, I've not only gained a deeper understanding of Node.js, Express, MongoDB, and JWT but also developed a powerful API for contact management. The codebase is a testament to my expertise in backend development and creating robust RESTful APIs. Feel free to explore the code, use it as a learning resource, or even integrate it into your own projects.

Thank you for checking out my Contact Management App API repository!
