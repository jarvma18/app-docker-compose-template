# App database

App uses PostgreSQL 16 database now.
This container holds only the database.

## Run psql

```
docker compose exec app-db psql -h localhost -U postgres
```