import { useState } from "preact/hooks";
import { Handlers, PageProps } from "$fresh/server.ts";
import { faunaClient, q } from "../../../utils/db.ts";
import Post from "../../../islands/Post.tsx";
import Comments from '../../../islands/Comments.tsx';
import { RemoteComment } from "../../../types/Comment.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { id } = ctx.params;

    try {
      const post = await faunaClient.query(
        q.Get(q.Ref(q.Collection('Post'), id))
      );
      // Comments Associated with Post
      const comments = await faunaClient.query(
        q.Map(
          q.Paginate(
            q.Match(q.FaunaIndex('comments_by_post'), id)
          ),
          q.Lambda('X', q.Get(q.Var('X')))
        )
      );
      const postComments = [] as RemoteComment[];
      comments.data.map((comment: any) => {
        postComments.push({
          _id: comment.ref.id,
          ...comment.data,
        });
      })
      return ctx.render({
        _id: post.ref.id,
        ...post.data,
        comments: postComments,
      });
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  },
};

export default function PostPage(props: PageProps) {
  const [post, setPost] = useState<any>();
  setPost(props.data);

  if(!post) { 
    return <div>Loading...</div>
  }
  return (
    <div>
      <Post post={post} />
      <Comments postId={post._id} postComments={post.comments}/>
    </div>
  )
}
