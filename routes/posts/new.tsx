/** @jsx h */
import { h, Fragment } from "preact";
import { PageProps } from "$fresh/server.ts";
import NewPost from "../../islands/NewPost.tsx";
import Navbar from "../../islands/Navbar.tsx";

export default function Greet(props: PageProps) {
  return (
    <Fragment>
      <Navbar />
      <NewPost start={0}/>
    </Fragment>
  )
}
