/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { tw } from "@twind";
import { faunaClient, q } from "../utils/db.ts";
import Post, { PostType } from "../components/Post.tsx";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: posts } = await faunaClient.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('Post'))),
          q.Lambda("post", q.Get(q.Var("post")))
        )
      );
      setPosts(posts);
    }
    fetchPosts();
  },[]);

  console.log(posts);

  return (
    <div class={tw`p-5`}>
      <h1 class={tw`text-xl`}>Post List</h1>
      {
        posts.map((post: {  data: PostType, ref: any }) => (
          <Post post={post.data} id={post.ref.value.id} />
        ))  
      }
    </div>
  )
}