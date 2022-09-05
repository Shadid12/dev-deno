import * as faunadb from "https://deno.land/x/fauna@5.0.0-deno-alpha9/mod.js";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const { FAUNA_SECRET, FAUNA_DOMAIN } = config();

export const q = faunadb.query as any;
export const faunaClient = new faunadb.Client({ 
  domain: FAUNA_DOMAIN,
  secret: FAUNA_SECRET,
});

export const getFaunaClient = (secret: string) => new faunadb.Client({
  domain: FAUNA_DOMAIN,
  secret,
});