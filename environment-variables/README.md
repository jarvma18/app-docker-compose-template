# Place for environment variables

This is place for environment variables and below is guide how to create needed envs for local dev.
You must create the files named like in the headers below and add the environment variables.

Note. The examples and current state of the environment variables are not suitable for PRODUCTION use.

## .app-db-env

```
POSTGRES_PASSWORD – Without specifying this, Postgres can’t run effectively.
POSTGRES_USER – Specifies a user with superuser privileges and a database with the same name. Postgres uses the default user when this is empty.
POSTGRES_DB – Specifies a name for your database or defaults to the POSTGRES_USER value when left blank. 
POSTGRES_INITDB_ARGS – Sends arguments to postgres_initdb and adds functionality
POSTGRES_INITDB_WALDIR – Defines a specific directory for the Postgres transaction log. A transaction is an operation and usually describes a change to your database. 
POSTGRES_HOST_AUTH_METHOD – Controls the auth-method for host connections to all databases, users, and addresses
PGDATA – Defines another default location or subdirectory for database files
PGUSER – Define this because psql and pg_isready have different scopes where they look for user name
```

### Example:

```
cat .app-db-env

POSTGRES_PASSWORD=postgres
POSTGRES_USER=postgres
POSTGRES_DB=postgres
PGUSER=postgres
```

## .app-env

```
DBHOST – Database host address
DBPORT – Database port
DBUSER – Database user
DBPASSWORD – Database password for the user
DBNAME – Database name
```

### Example:

```
cat .app-env

DBHOST=onlinestore-db
DBPORT=5432
DBUSER=postgres
DBPASSWORD=postgres
DBNAME=postgres
```