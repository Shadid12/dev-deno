import { Handlers } from "$fresh/server.ts";
import { RemotePost } from "../../types/Post.ts";
import { getFaunaClient, q, faunaClient } from "../../utils/db.ts";

export const handler: Handlers = {
  /**
   * Create a new post
   */
  async POST(req: Request) {
    try {
      const body = await req.json();
      // Allow only logged in users to create a post
      const faunaClientWithAuth = getFaunaClient(req.headers.get("Authorization")!);
      const newpost = await faunaClientWithAuth.query(
        q.Create(
          q.Collection('Post'),
          { 
            data: { 
              ...body, 
              owner: q.CurrentIdentity(), 
              author: q.Select(["data", "username"], q.Get(q.CurrentIdentity()))
            } 
          },
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
  },

  /**
   * Update a post
   */
  async PUT(req: Request) { 
    try {
      const body = await req.json();
      const post = await faunaClient.query(
        q.Update(q.Ref(q.Collection('Post'), body.id), {
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
      const faunaClientWithAuth = getFaunaClient(req.headers.get("Authorization")!);
      const post = await faunaClientWithAuth.query(
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