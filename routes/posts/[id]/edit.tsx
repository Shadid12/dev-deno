/** @jsx h */
import { h, Fragment } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import PostForm from "../../../islands/PostForm.tsx";
import { faunaClient,q } from "../../../utils/db.ts";

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

export default function EditPostPage(props: PageProps) {
  return (
    <Fragment>
      <PostForm edit post={props.data}/>
    </Fragment>
  )
}
