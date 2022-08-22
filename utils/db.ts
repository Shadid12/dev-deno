import * as faunadb from "https://deno.land/x/fauna@5.0.0-deno-alpha9/mod.js";

export const q = faunadb.query as any;
export const faunaClient = new faunadb.Client({ 
  secret: 'db.us.fauna.com',
  domain: 'fnAEuiqX',
});