/** @jsx h */
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { Handlers, PageProps } from "$fresh/server.ts";
import { faunaClient, q } from "../../../utils/db.ts";
import { RemotePost } from "../../../types/Post.ts";
import Post from "../../../islands/Post.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { id } = ctx.params;

    try {
      const post = await faunaClient.query(
        q.Get(q.Ref(q.Collection('Post'), id))
      );
      return ctx.render({
        _id: post.ref.id,
        ...post.data,
      });
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  },
};

export default function PostPage(props: PageProps) {
  const [post, setPost] = useState<RemotePost>();
  setPost(props.data);

  if(!post) { 
    return <div>Loading...</div>
  }
  return (
    <Post post={post} />
  )
}
