/** @jsx h */
import { h, Fragment } from "preact";
import PostList from "../islands/PostList.tsx";

export default function Home() {
  return (
    <Fragment>
      <PostList />
    </Fragment>
  );
}
