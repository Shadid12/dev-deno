/** @jsx h */
import { h, Fragment } from "preact";
import { PageProps } from "$fresh/server.ts";
import PostForm from "../../islands/PostForm.tsx";

export default function NewPostPage(props: PageProps) {
  return (
    <Fragment>
      <PostForm />
    </Fragment>
  )
}
