export const client = 'pg';
export const host = process.env['DBHOST'];
export const port = Number(process.env['DBPORT']);
export const user = process.env['DBUSER'];
export const password = process.env['DBPASSWORD'];
export const database = process.env['DBNAME'];