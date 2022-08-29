import { Handlers } from "$fresh/server.ts";
import { RemotePost } from "../../types/Post.ts";
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

  async GET() {
    try {
      const posts: RemotePost[] = [];
      const { data } = await faunaClient.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('Post'))),
          q.Lambda("post", q.Get(q.Var("post")))
        )
      );
      data.forEach((post: any) => {
        posts.push({
          _id: post.ref.id,
          ...post.data,
        });
      })
      return Response.json({
        data: posts,
      });
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  }
};