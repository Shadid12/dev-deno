import { Handlers } from "$fresh/server.ts";
import { faunaClient, q } from "../../utils/db.ts";

export const handler: Handlers = {
  async POST(req) {
    try {
      const body = await req.json();

      const newpost = await faunaClient.query(
        q.Create(
          q.Collection('Post'),
          { data: { ...body } },
        )
      );

      return Response.json({
        data: {
          _id: newpost.ref.id,
          ...newpost.data,
        }
      });
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  },

  GET() {
    return Response.json({
      'hello': 'world',
    });
  }
};