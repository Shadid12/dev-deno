import { PageProps } from "$fresh/server.ts";
import PostForm from "../../islands/PostForm.tsx";
import { Fragment } from "preact";


export default function NewPostPage(props: PageProps) {
  return (
    <Fragment>
      <PostForm />
    </Fragment>
  )
}
