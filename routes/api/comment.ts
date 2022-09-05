import { Handlers } from "$fresh/server.ts";
import { RemoteComment } from "../../types/Comment.ts";
import { getFaunaClient, q, faunaClient } from "../../utils/db.ts";


export const handler: Handlers = {
  /**
   * Create a new comment
   */
   async POST(req: Request) {
    try {
      const body = await req.json();
      // Allow only logged in users to create a post
      const faunaClientWithAuth = getFaunaClient(req.headers.get("Authorization")!);
      const newcomment = await faunaClientWithAuth.query(
        q.Create(
          q.Collection('Comment'),
          { 
            data: { 
              ...body, 
              owner: q.CurrentIdentity(), 
              author: q.Select(["data", "username"], q.Get(q.CurrentIdentity())),
            } 
          },
        )
      );

      return Response.json({
        data: {
          _id: newcomment.ref.id,
          ...newcomment.data,
        }
      });
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  },
  /**
   * Delete a comment
   */

  async DELETE(req: Request) {
    try {
      const body = await req.json();
      // Allow only owner to delete a comment
      const faunaClientWithAuth = getFaunaClient(req.headers.get("Authorization")!);
      const comment = await faunaClientWithAuth.query(
        q.Delete(q.Ref(q.Collection('Comment'), body._id))
      );
      return Response.json({
        data: comment.data,
      });

    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  },
}