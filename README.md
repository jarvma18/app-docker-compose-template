# app-docker-compose-template

Purpose of this project is to offer ready template for dockerized application.
Some key elemets in this template is Node.js application with typescript and automatic build with nodemon.
Data storage is PostgreSQL container with persistent volume for data storage.
Some ready libraries are included for example knex for the database actions.

## Initial preparations

* Install Docker
* Install Docker compose

Docker & Docker compose versions that have been tested with this:
```
docker -v
Docker version 24.0.7, build afdd53b

docker compose version
Docker Compose version v2.23.0-desktop.1
```

## How to run

```
docker compose build && docker compose up
```
