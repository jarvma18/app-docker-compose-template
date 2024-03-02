# App

## How to run

```
docker compose build && docker compose up
```

## Helpful commands
```
// Run knex init for ts
docker compose exec app knex init -x ts

// Create migration file
docker compose exec -w /usr/src/data app knex migrate:make migration_name -x ts

// Run migrations
docker compose exec -w /usr/src/data app knex migrate:latest
docker compose exec -w /usr/src/data app knex migrate:rollback --all
docker compose exec -w /usr/src/data app knex migrate:up
docker compose exec -w /usr/src/data app knex migrate:down

// Create seed file
docker compose exec -w /usr/src/data app knex seed:make seed_name

// Run seeds
docker compose exec -w /usr/src/data app knex seed:run
```