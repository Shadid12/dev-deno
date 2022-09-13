import { useState, useEffect } from "preact/hooks";
import Post from "../components/Post.tsx";
import { RemotePost } from "../types/Post.ts";

export default function PostList() {
  const [posts, setPosts] = useState([]);

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
    <div class="p-5">
      <h1 class="text-xl">Post List</h1>
      {
        posts.map((post: RemotePost) => (
          <Post post={post} id={post._id} />
        ))  
      }
    </div>
  )
}