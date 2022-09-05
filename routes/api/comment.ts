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
   * Get all comments by post id
   */
  // async GET(req: Request) {
  //   try {
  //     const comments: RemoteComment[] = [];
  //     const commentsByPostId = await faunaClient.query(
  //       q.Map(
  //         q.Paginate(q.Documents(q.Collection('Comment'))),
  //         q.Lambda("comment", q.Get(q.Var("comment")))
  //       )
  //     );
  //     data.forEach((comment: any) => {
  //       comments.push({
  //         _id: comment.ref.id,
  //         ...comment.data,
  //       });
  //     })
  //     return Response.json({
  //       data: comments,
  //     });
  //   } catch (error) {
  //     return Response.json({
  //       error: error.message,
  //     });
  //   }
  // }
}