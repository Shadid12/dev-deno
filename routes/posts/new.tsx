/** @jsx h */
import { h, Fragment } from "preact";
import { PageProps } from "$fresh/server.ts";
import NewPost from "../../islands/NewPost.tsx";

export default function PostForm(props: PageProps) {
  return (
    <Fragment>
      <NewPost/>
    </Fragment>
  )
}
