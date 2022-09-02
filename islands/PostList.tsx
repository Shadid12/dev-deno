/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { tw } from "@twind";
import Post, { PostType } from "../components/Post.tsx";
import { RemotePost } from "../types/Post.ts";
import { store } from "../store/mystore.ts";

export default function PostList() {
  const [posts, setPosts] = useState([]);


  store.subscribe((state) => {
    console.log('State-->', state);
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post");
        const remotePosts = await response.json();
        setPosts(remotePosts.data);
      } catch (error) {
        console.error(error);
        alert("Something went wrong!");
      }
    }
    fetchPosts();
  },[]);

  console.log(posts);

  return (
    <div class={tw`p-5`}>
      <h1 class={tw`text-xl`}>Post List</h1>
      {
        posts.map((post: RemotePost) => (
          <Post post={post} id={post._id} />
        ))  
      }
    </div>
  )
}