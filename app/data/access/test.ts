const database = require('../database');

export async function createTest(body: any) {
  let test = await database.knex('test').insert(body);
  return test.rows[0];
};