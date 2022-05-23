import { Database, PostgresConnector } from "https://deno.land/x/denodb@v1.0.40/mod.ts";

const connector = new PostgresConnector({
  database: 'soccerDb',
  host: 'localhost',
  username: 'dev',
  password: 'soccer',
  port: 5433,
});

export const dataBase = new Database(connector)