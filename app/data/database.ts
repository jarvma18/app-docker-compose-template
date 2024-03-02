import knex from 'knex';
import env = require('./env');

exports.knex = knex({
  client: env.client,
  connection: {
    host: env.host,
    port: env.port,
    user: env.user,
    password: env.password,
    database: env.database
  },
  useNullAsDefault: true
});
