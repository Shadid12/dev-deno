/** @jsx h */
import { h, Fragment } from "preact";
import Navbar from "../islands/Navbar.tsx";
import PostList from "../islands/PostList.tsx";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <PostList />
    </Fragment>
  );
}
