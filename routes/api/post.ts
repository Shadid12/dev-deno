import { Handlers } from "$fresh/server.ts";
import { RemotePost } from "../../types/Post.ts";
import { faunaClient, q } from "../../utils/db.ts";

export const handler: Handlers = {
  /**
   * Create a new post
   */
  async POST(req: Request) {
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

  /**
   * Get all posts / Get a single post
   */
  async GET(req: Request) {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    // Get a single post
    if (id) {
      try {
        const post = await faunaClient.query(
          q.Get(q.Ref(q.Collection('Post'), id))
        );

        return Response.json({
          data: post.data,
        });
      } catch (error) {
        return Response.json({
          error: error.message,
        });
      }
    }

    // If no id is provided, return all posts
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
  },

  /**
   * Update a post
   */
  async PUT(req: Request) { 
    try {
      const body = await req.json();
      const post = await faunaClient.query(
        q.Update(q.Ref(q.Collection('Post'), body._id), {
          data: {
            ...body,
          },
        })
      );
      return Response.json({
        data: post.data,
      });
    } catch (error) { 
      return Response.json({
        error: error.message,
      });
    }
  },

  /**
   * Delete a post
   */
  async DELETE(req: Request) {
    try {
      const body = await req.json();
      const post = await faunaClient.query(
        q.Delete(q.Ref(q.Collection('Post'), body._id))
      );
      return Response.json({
        data: post.data,
      });
      
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  },
};