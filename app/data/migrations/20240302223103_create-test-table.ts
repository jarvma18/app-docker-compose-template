import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('test', function (table) {
    table.increments();
    table.text('name');
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('test');
}

