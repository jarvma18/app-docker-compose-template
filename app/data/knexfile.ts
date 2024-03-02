import type { Knex } from 'knex';
import env = require('./env');

const config: { [key: string]: Knex.Config } = {
  development: {
    client: env.client,
    connection: {
      host: env.host,
      port: env.port,
      user: env.user,
      password: env.password,
      database: env.database
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

module.exports = config;
