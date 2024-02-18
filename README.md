# Winery Tracker

Winery Tracker is a Java Spring Boot application that serves as a simple tracker for wineries. It uses Java Persistence API (JPA) for data persistence and implements a REST API with repository and service layers.

## Table of Contents

- [Features](#features)
- [Winery Endpoints](#winery-endpoints)
- [Technologies Used](#technologies-used)

## Features

- **Winery Management**: Add, update, and delete winery information.
- **RESTful API**: Exposes endpoints for seamless integration with other applications.
- **Data Persistence with JPA**: Utilizes JPA to interact with a relational database for storing winery information.
- **Service and Repository Layers**: Implements a structured architecture with service and repository layers for better organization and maintainability.

## Winery Endpoints

- **GET /wineries**: Retrieve a list of all wineries.
- **GET /wineries/{id}**: Retrieve information about a specific winery.
- **POST /wineries**: Create a new winery.
- **PUT /wineries/{id}**: Update information for a specific winery.
- **DELETE /wineries/{id}**: Delete a winery.

## Technologies Used

- Java Spring Boot
- Java Persistence API (JPA)
- Gradle
