const database = require('../database');

export async function createTest(body: any) {
  body.created_at = new Date();
  const test = await database.knex('test').insert(body).returning('*');;
  console.log(test[0]);
  return test[0];
};